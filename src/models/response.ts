export class ApiResponse<T> {
    error: boolean = false;
    message: string;
    body?: T;

    constructor(message: string, body?: T) {
        this.message = message;
        this.body = body;
    }
}

export class ApiResponseError<T> extends ApiResponse<T> {
    constructor(message: string, body?: T) {
        super(message, body);
    }
}
