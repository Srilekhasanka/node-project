import { Response } from 'express'

class ResponseService {
	constructor() {}

	isSuccess = (statusCode: number) => {
		const errorStatusCodes = [400, 401, 404, 403, 500, 469, 409] // Can add more if required
		return errorStatusCodes.every((status) => status !== statusCode)
	}

	sendResponse = (res: Response, statusCode: number, payload?: object, message?: string) => {
		return res.status(statusCode).json({
			success: this.isSuccess(statusCode) ? true : false,
			payload,
			message: message,
		})
	}

	serviceResponse = (statusCode: number, payload: object, message: string) => {
		return { statusCode, payload, message }
	}
}

export default ResponseService
