// Main process
const path = require('path');
const { app, BrowserWindow, ipcMain, Notification } = require('electron');

const isDev = !app.isPackaged;

const createWindow = () => {
	// Browser window <- Renderer Process
	const browserWindow = new BrowserWindow({
		width: 1200,
		height: 800,
		backgroundColor: 'white',
		webPreferences: {
			nodeIntegration: false,
			preload: path.join(__dirname, 'preload.js'),
		},
	});

	browserWindow.loadFile(path.join(__dirname, 'dist', 'index.html'))
		.then(() => {
			isDev && browserWindow.webContents.openDevTools();
		});
}

if (isDev) {
	require('electron-reload')(__dirname, {
		electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
	})
}

app.whenReady().then(createWindow);

ipcMain.on('notify', (_, body) => {
	new Notification({ title: 'Notification Title', body }).show();
});

app.on('window-all-closed', event => {

	console.log(event);

	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) createWindow();
})