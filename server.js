const express = require('express');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // Import the cors package

const app = express();
const port = 5000;

app.use(cors()); // Enable CORS for all routes

app.get('/api/current-branch', (req, res) => {
  const branchFilePath = path.join(__dirname, '.git', 'current_branch');

  fs.readFile(branchFilePath, 'utf8', (err, branchName) => {
    if (err) {
      return res.status(500).send(`Error reading current branch file: ${err.message}`);
    }

    branchName = branchName.trim();

    exec(`git log -1 ${branchName}`, (logError, logStdout, logStderr) => {
      if (logError) {
        return res.status(500).send(`Error executing git log: ${logStderr}`);
      }
      res.json({ branch: branchName, details: logStdout });
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
