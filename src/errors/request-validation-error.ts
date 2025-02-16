import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error";

/*
interface CustomError {
  statusCode: number;
  serializeErrors(): {
    message: string;
    field?: string;
  }[]
}

export class RequestValidationError extends Error implements CustomError
*/

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(public errors: ValidationError[]) {
    super('Invalid request params')

    // Bcz we are extending a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype)
  }

  serializeErrors() {
    return this.errors.map(error => {
      if (error.type === 'field') return { message: error.msg, field: error.path }

      return { message: error.msg }
    })

  }
}

