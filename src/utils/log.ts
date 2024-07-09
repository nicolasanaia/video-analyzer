import { logger } from "./loggerConfig";

export default class Log {
    module?: string;

    constructor(module?: string) {
        this.module = module
    }

    async error<T>(message: string, body?: T): Promise<void> {
        logger.error(message, { module: this.module, body: body ? body : undefined});
    }

    async info<T>(message: string, body?: T): Promise<void> {
        logger.info(message, { module: this.module, body: body ? body : undefined});
    }

    async warn<T>(message: string, body?: T): Promise<void> {
        logger.warn(message, { module: this.module, body: body ? body : undefined});
    }

    async silly(message: string): Promise<void> {
        logger.silly(message);
    }
}
