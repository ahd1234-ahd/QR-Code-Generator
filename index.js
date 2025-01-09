
import inquirer from 'inquirer';
import qr from 'qr-image';  // This works for CommonJS modules in ES syntax
import fs from 'fs';

inquirer
  .prompt([{
    type: 'input',
    name: 'imageName',
    message:'enter text',
  },
  ])
  .then((answers) => {
    const userInput = answers.imageName;
    var qr_svg = qr.image(userInput, { type: 'png' });

    qr_svg.pipe(fs.createWriteStream('qr_code.png'));  // QR code will be saved as qr_code.svg


    fs.writeFile("immage.txt", userInput, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
      });



  })
  .catch((error) => {
    if (error.isTtyError) {
        console.error("Prompt couldn't be rendered in the current environment.");
    } else {
        console.error('Something went wrong:', error);
    }
  });



  
