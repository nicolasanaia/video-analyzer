import { HttpError } from "routing-controllers";

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
    error: boolean = true;
    httpStatus?: number;

    constructor(message: string, code?: number, body?: T) {
        super(message, body);
        this.httpStatus = code;
    }
}

export class ApiInternalServerError<T> extends ApiResponseError<T> {
    constructor(message: string, body?: T) {
        super(message, 500, body);
    }
}

export class ApiBadRequestError<T> extends ApiResponseError<T> {
    constructor(message: string, body?: T) {
        super(message, 400, body);
    }
}