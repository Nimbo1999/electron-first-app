import React from 'react';

const SettingsPage = () => {
	return (
		<div className="centered-view">
			<div className="centered-container">
				<form className="centered-container-form">
					<div className="header">Adjust application settings</div>

					<div className="form-container">
						<div className="my-3">
							<div className="form-check">
								<input
									id="isDarkTheme"
									name="isDarkTheme"
									type="checkbox"
									className="form-check-input"
								/>

								<label className="form-check-label" htmlFor="isDarkTheme">Dark Theme</label>
							</div>

							<div className="form-check">
								<input
									id="showNotifications"
									name="showNotifications"
									type="checkbox"
									className="form-check-input"
								/>

								<label className="form-check-label" htmlFor="showNotifications">Enable Notification</label>
							</div>

							<div className="form-check">
								<input
									id="playSound"
									name="playSound"
									type="checkbox"
									className="form-check-input"
								/>

								<label className="form-check-label" htmlFor="playSound">Sound notification</label>
							</div>
						</div>

						<button
							type="button"
							onClick={() => {}}
							className="btn btn-danger"
						>
							Quit App
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default SettingsPage;
