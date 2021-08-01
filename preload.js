const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {
	notificationApi: {
		sendNotification(message) {
			return ipcRenderer.send('notify', message);
		}
	}
});
