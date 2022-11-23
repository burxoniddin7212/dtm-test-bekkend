
export class AuthorizatsionError extends Error {
  public status: number;
  constructor(public message: string) {
    super()
    this.message = message,
      this.name = 'AuthorizatsionError',
      this.status = 401
  }
}

export class ForbiddineError extends Error {
  public status: number;
  constructor(public message: string) {
    super()
    this.message = message,
      this.name = 'ForbiddineError',
      this.status = 403
  }
}

export class InternalServerError extends Error {
  status: number;
  constructor(public message: string) {
    super()
    this.message = message,
      this.name = 'InternalServerError',
      this.status = 500
  }
}

export class BedRequestError extends Error {
  public status: number;
  constructor(public message: string) {
    super()
    this.message = message,
      this.name = 'BedRequestError',
      this.status = 400
  }
}











