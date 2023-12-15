const fs = require('fs').promises;  // Using fs.promises for Promise-based file operations

const read_fumens = async (piece) => {

    const filePath = 'inputs/' + piece + '.txt';
    let fumens = [];

    try {
        const data = await fs.readFile(filePath, 'utf8');

        const lines = data.split('\n');
        lines.forEach(line => {
            fumens.push(line.trim());
        })

    } catch (err) {
        console.error('Error reading or processing the file:', err);
    }

    return fumens;
}

const write_scores = async (piece, dataToAppend) => {
    const filePath = 'output/' + piece + '.txt';

    try {

        // Append the formatted data to the file
        await fs.appendFile(filePath, dataToAppend + '\n');

        // console.log('Data has been appended to the file.');
    } catch (err) {
        console.error('Error appending to file:', err);
    }
}


// Call the main function to start the process
// read_inputs_and_output_holds();

module.exports = {read_fumens, write_scores};