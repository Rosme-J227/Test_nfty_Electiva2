console.log("hola Rosme");

const { execSync } = require("child_process");

const output = execSync("node hola.js").toString().trim();

if (output === "hola mundo") {
  console.log("✅ Test passed");
} else {
  console.error("❌ Test failed");
  process.exit(1);
}
