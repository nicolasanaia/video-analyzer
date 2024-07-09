import Transport, { TransportStreamOptions } from "winston-transport";

import LogsDatabase from "../database/logs";

class DatabaseTransport extends Transport {
    logDatabase: LogsDatabase;

    constructor(options: TransportStreamOptions) {
        super(options)
        this.level = options.level || 'info'
        this.logDatabase = new LogsDatabase();
    }
    
    log(info: any, callback: () => void) {
        setImmediate(() => {
            this.emit('logged', info);
        });

        if (info[Symbol.for('level')] !== 'info') {    
            const logToSave = {
                date: info.timestamp,
                level: info[Symbol.for('level')],
                message: info.message,
                module: info.module,
                object: JSON.stringify(info.body)
            };

            this.logDatabase.saveLog(logToSave);
        }

        callback();
    };
}

export default function transportLogToDB(options: TransportStreamOptions) {
    return new DatabaseTransport(options);
};