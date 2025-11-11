import { CustomApiError } from './CustomApiError';

class ConflictError extends CustomApiError {
  statusCode = 409;
  constructor(message: string) {
    super(message);
  }
}

export { ConflictError };