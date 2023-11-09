export interface ResponseResult<T = unknown> {
    error: number;
    data?: T;
    errorMessage?: string;
  }