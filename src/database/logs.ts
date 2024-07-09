import { ILog } from "../interfaces/logs";
import { TABLES } from "../constants/tables";
import db from "./db";

export default class LogsDatabase {
    private table: string = TABLES.LOGS;

    async saveLog(log: ILog): Promise<void> {
        await db<ILog>(this.table)
            .insert(log);
    }
}