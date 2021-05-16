import BrowserWinHandler from './BrowserWinHandler'

var path = require('path');
var concatpath = path.join(__dirname, '/bingeicon.ico');
const winHandler = new BrowserWinHandler({
  height: 600,
  width: 1000,
  icon:   concatpath,
  webPreferences: {
    devTools: false
  }
})

winHandler.onCreated(_browserWindow => {
  winHandler.loadPage('/')
  // Or load custom url
  // _browserWindow.loadURL('https://google.com')
})

export default winHandler
