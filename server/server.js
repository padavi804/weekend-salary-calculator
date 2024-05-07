// Remember to `npm init` and `npm install express`!
// Add server code here. This will be the same as the code from lecture.
const express = require('express');

const app = express();
const port = process.envPORT || 5001

app.use(express.static('server/public'));

app.listen(port, () => {
    console.log('listening on port', port);
});