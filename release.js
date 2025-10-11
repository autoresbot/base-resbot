// npm run release "update fitur serializer"

import { execSync } from "child_process";

const commitMessage = process.argv[2] || "update";

try {
  console.log("🚀 Starting release process...");

  // 1️⃣ Git add
  execSync("git add .", { stdio: "inherit" });

  // 2️⃣ Git commit
  execSync(`git commit -m "${commitMessage}"`, { stdio: "inherit" });

  // 3️⃣ Git push
  execSync("git push origin master", { stdio: "inherit" });

  // 4️⃣ NPM publish
  execSync("npm publish", { stdio: "inherit" });

  console.log("✅ Release complete!");
} catch (err) {
  console.error("❌ Error during release:", err.message);
  process.exit(1);
}
