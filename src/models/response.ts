export class ApiResponse<T> {
    error: boolean;
    message: string;
    body?: T;

    constructor(error: boolean, message: string, body?: T) {
        this.error = error;
        this.message = message;
        this.body = body;
    }
}
