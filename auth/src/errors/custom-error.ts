export abstract class CustomError extends Error {
  abstract errorStatusCode: number;

  /**
   * @param message
   * @summary Takes an error message
   */
  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeError(): IErrorData[];
}

export interface IErrorData {
  message: string;
  field?: string;
}