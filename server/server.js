// server/server.js
const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');

const app = express();
const port = 3001;  // Different from React's default port of 3000

app.use(cors());  // Enable CORS for all routes
app.use(express.json());  // Parse JSON request bodies

app.post('/query', (req, res) => {
  const userQuery = req.body.query;

  // Here, you'll run the Python script and get the response
  exec(`python3 app.py "${userQuery}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res.status(500).send('Internal Server Error');
    }

    // Send the script's output as the response
    res.send(stdout);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
