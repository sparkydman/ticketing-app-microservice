import { CustomError, IErrorData } from './custom-error';

export class DBError extends CustomError {
  errorStatusCode = 500;

  /**
   *
   */
  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, DBError.prototype);
  }

  serializeError(): IErrorData[] {
    return [{ message: this.message }];
  }
}
