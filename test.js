const { execSync } = require("child_process");

try {
  const output = execSync("node hola.js").toString().trim();

  if (output === "hola mundo") {
    console.log("Test passed");
  } else {
    console.error("Test failed");
    process.exit(1);
  }
} catch (error) {
  console.error("Error ejecutando hola.js");
  process.exit(1);
}
