import { CustomError, IErrorData } from './custom-error';

export class ExceptionError extends CustomError {
  errorStatusCode;

  /**
   *
   */
  constructor(message: string, statusCode: number) {
    super(message);
    this.errorStatusCode = statusCode;

    Object.setPrototypeOf(this, ExceptionError.prototype);
  }

  serializeError(): IErrorData[] {
    return [{ message: this.message }];
  }
}
