// run `node test.js` in the terminal, to see what happens.
// We have failing messages! That's no good!
// What is `test.js` trying to do?
// It is testing to see if what is imported from this file is equal to 20. 
// If it does, it passes the test. If not, it fails the test. 

// module.exports allows us to share information in one file with another file
// change the number to 20, the number of mushers we have available

module.exports = 20;

// now run `node test.js` in the terminal, to see what happens