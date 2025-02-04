import { exec } from "child_process";
import readline from "readline";

const args = process.argv.slice(2);

if (args.length === 0) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter component name: ", (name) => {
    rl.question("Enter component type (default/page/layout): ", (type) => {
      const command = `npx generate-react-cli component ${name} --type=${type}`;
      exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.error(`Error: ${stderr}`);
          return;
        }
        console.log(stdout);
      });
      rl.close();
    });
  });
} else {
  const command = `npx generate-react-cli component ${args.join(" ")}`;
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Error: ${stderr}`);
      return;
    }
    console.log(stdout);
  });
}
