import { CustomApiError } from './CustomApiError'

export class InsufficientFundsError extends CustomApiError {
	statusCode = 402 // Assign the correct status code

	constructor(walletBalance: number, requiredAmount: number) {
		super(
			`Insufficient funds in wallet, Wallet balance: ${walletBalance}, Minimum balance amount: ${requiredAmount}.`
		)
	}
}
