class ErrorHandler extends Error {

	code;
	message;

	constructor(err) {
		super(err);

		this.code = err.code || 500;
		this.message = err.message || 'Ops, ocorreu um erro na applicação, tente novamente mais tarde!';
	}

	get code() {
		return this.code;
	}

	get message() {
		return this.message;
	}
}

export default ErrorHandler;
