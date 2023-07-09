import { CustomError, IErrorData } from './custom-error';

export class NotFoundError extends CustomError {
  errorStatusCode = 404;

  /**
   *
   */
  constructor() {
    super('Route not found');

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeError(): IErrorData[] {
    return [{ message: "Resource not found" }];
  }
}
