import { CustomApiError } from './CustomApiError'

class BadRequestError extends CustomApiError {
	statusCode = 400
	constructor(message: string) {
		super(message)
	}
}

export { BadRequestError }
