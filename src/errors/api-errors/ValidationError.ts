import { CustomApiError } from './CustomApiError'

class ValidationError extends CustomApiError {
	statusCode = 403
	constructor(message: string) {
		super(message)
	}
}

export { ValidationError }
