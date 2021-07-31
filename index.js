// Main process
const path = require('path');
const { app, BrowserWindow } = require('electron');

const createWindow = () => {
	// Browser window <- Renderer Process
	const window = new BrowserWindow({
		width: 800,
		height: 800,
		backgroundColor: 'white',
		webPreferences: {
			nodeIntegration: true
		}
	});

	window.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', event => {

	console.log(event);

	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) createWindow();
})