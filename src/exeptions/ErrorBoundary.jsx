import React from 'react';

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			errorMsg: null,
			errorCode: null,
			hasError: false,
		}
	}

	static getDerivedStateFromError(error) {
		return {
			errorMsg: error.message,
			errorCode: error.code,
			hasError: true
		}
	}

	componentDidCatch(error, errorInfo) {
		if (process.env.NODE_ENV === 'development') {
			console.group('componentDidCatch error');
			console.log(error);
			console.log(errorInfo);
			console.groupEnd();
		}
	}

	render() {
		const { children } = this.props;
		const { hasError } = this.state;

		if (hasError) {
			return (
				<div>
					Ops, detectamos algo de incomum na applicação, por favor tente novamente mais tarde!

					<button
						type="button"
						onClick={() => this.setState({
							errorMsg: null,
							errorCode: null,
							hasError: false,
						})}
					>
						OK
					</button>
				</div>
			)
		}

		return children;
	}
}

export default ErrorBoundary;
