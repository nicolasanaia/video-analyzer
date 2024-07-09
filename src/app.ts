import 'reflect-metadata';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { defaultMetadataStorage } from 'class-transformer';
import { validationMetadatasToSchemas } from 'class-validator-jsonschema';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import express from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import path from "path";
import { useExpressServer, getMetadataArgsStorage } from 'routing-controllers';
import { routingControllersToSpec } from 'routing-controllers-openapi';
import swaggerUi from 'swagger-ui-express';
import { NODE_ENV, PORT, ORIGIN, CREDENTIALS } from './config';
import { logger } from './utils/loggerConfig';

class App {
  public app: express.Application;
  public env: string;
  public port: string | number;
  public controllers: string[];
  
  constructor() {
    this.app = express();
    this.env = NODE_ENV || 'development';
    this.port = PORT || 3000;
    this.controllers = [path.join(__dirname, '/controllers/*')]

    this.initializeMiddlewares();
    this.initializeRoutes();
    this.initializeSwagger();
  }

  public listen() {
    this.app.listen(this.port, async () => {
      logger.info(`=================================`);
      logger.info(`======= ENV: ${this.env} =======`);
      logger.info(`🚀 App listening on the port ${this.port}`);
      logger.info(`=================================`);
    });
  }

  public getServer() {
    return this.app;
  }

  private initializeMiddlewares() {
    this.app.use(hpp());
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
  }

  private initializeRoutes() {
    useExpressServer(this.app, {
      cors: {
        origin: ORIGIN,
        credentials: CREDENTIALS,
      },
      controllers: this.controllers,
      defaultErrorHandler: false,
      routePrefix: '/api'
    });
  }

  private initializeSwagger() {
    const schemas = validationMetadatasToSchemas({
      classTransformerMetadataStorage: defaultMetadataStorage,
      refPointerPrefix: '#/components/schemas/',
    });

    const routingControllersOptions = {
      controllers: this.controllers,
      routePrefix: '/api'
    };

    const storage = getMetadataArgsStorage();
    const spec = routingControllersToSpec(storage, routingControllersOptions, {
      components: {
        schemas,
        securitySchemes: {
          Bearer: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'header',
            description: 'Enter the token with the `Bearer: ` prefix, e.g. "Bearer abcde12345"',
          },
        },
      },

      info: {
        description: 'App focado a ter responsabilidades de backend para o App Todovino (BFF)',
        title: 'Micro Serviço Backend App Todovino (BFF)',
        version: '1.0.1',
      },

    });

    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec));
  }
}

export default App;
