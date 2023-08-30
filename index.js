const { spawn } = require("child_process");
const express = require("express");
const app = express();
const logger = require("./HAXORSIAM/log");
const PORT = process.env.PORT || 7999 || 9999 || 8888;

app.get("/", function (request, response) {
  const result = {
    developer: "Siam Rahman"
  };
  response.json(result);
});

app.listen(PORT, () => {
  logger.loader(`Bot is running on port: ${PORT}`);
  startBot(0);
});

async function startBot(index) {
  logger(`Starting child process ${index}`, "[ Starting ]");

  // Get the current hour in local time
  const currentHour = new Date().getHours();

  // Check if the current hour is between 1 AM and 6 AM
  if (currentHour >= 1 && currentHour <= 6) {
    logger.loader("Exiting the program due to time condition.");
    process.exit(0); // Automatically exit the program
  }

  // Continue with spawning the child process
  const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "./HAXORSIAM/main.js"], {
    cwd: __dirname,
    stdio: "inherit",
    shell: true,
    env: {
      ...process.env,
      CHILD_INDEX: index,
    },
  });

  child.on("close", async (codeExit) => {
    if (codeExit !== 0 || global.countRestart && global.countRestart < 5) {
      await startBot(index);
      return;
    }
    return;
  });

  child.on("error", (error) => {
    logger(`An error occurred: ${JSON.stringify(error)}`, "[ Starting ]");
  });
}
