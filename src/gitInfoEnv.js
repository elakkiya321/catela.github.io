const fs = require('fs');
const path = require('path');
const {execSync} = require('child_process');

const execSyncWrapper = (command) => {
  let stdout = null;
  try {
    stdout = execSync(command).toString().trim();
  } catch (error) {
    console.error(error);
  }
  return stdout;
};

const main = () => {
  let REACT_APP_BRANCH_NAME = execSyncWrapper('git rev-parse --abbrev-ref HEAD');

  const obj = {
    REACT_APP_BRANCH_NAME,
  };

  const filePath = path.resolve('.env'); 
  const fileContents = JSON.stringify(obj, null, 2);

  fs.writeFileSync(filePath, fileContents);
  console.log(`Wrote the following contents to ${filePath}\n${fileContents}`);
};

main();