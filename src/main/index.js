import { app } from 'electron'

// Quit when all windows are closed.
// app.on('window-all-closed', function () {
//   // On macOS it is common for applications and their menu bar
//   // to stay active until the user quits explicitly with Cmd + Q
//   if (process.platform !== 'darwin') app.quit()
// })

app.on('window-all-closed', function (e) {
  console.log('BingePlus is closing')
  // var choice = require('electron').dialog.showMessageBox(this,
  //     {
  //       type: 'question',
  //       buttons: ['Yes', 'No'],
  //       title: 'Confirm',
  //       message: 'Are you sure you want to quit?'
  //    });
  //    if(choice == 1){
  //      e.preventDefault();
  //    }

  if (process.platform !== 'darwin') app.quit()
})

// Load here all startup windows
require('./mainWindow')
