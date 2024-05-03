const fs = require('fs');
const csv = require("csv-parser");

const readCSV = async (filePath) => {
    const result = []
    return new Promise((resolve, reject) => {
        fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (data) => result.push(data))
        .on('end', () => {
          resolve(result);
        })
        .on('error', () => {
          console.log(error)
          reject(error)
        }) 
    })  
}

module.exports = readCSV;
