#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const AGENTS_DIR = path.join(
  process.env.HOME || process.env.USERPROFILE,
  ".agents",
  "skills",
  "antigravity-kit"
);

const PACKAGE_ROOT = path.resolve(__dirname, "..");
const SOURCE_AGENT = path.join(PACKAGE_ROOT, ".agent");
const SOURCE_SKILLS = path.join(PACKAGE_ROOT, "skills", "antigravity-kit");
const SOURCE_GEMINI = path.join(PACKAGE_ROOT, "GEMINI.md");
const SOURCE_EXTENSION = path.join(PACKAGE_ROOT, "gemini-extension.json");

const command = process.argv[2];

function copyDirSync(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function install() {
  console.log("📦 Installing gemini-skills to ~/.agents/skills/antigravity-kit/\n");

  if (fs.existsSync(AGENTS_DIR)) {
    console.log("⚠️  Directory already exists. Use --force to overwrite.");
    if (!process.argv.includes("--force")) {
      process.exit(1);
    }
    console.log("🔄 Overwriting existing installation...\n");
    fs.rmSync(AGENTS_DIR, { recursive: true, force: true });
  }

  fs.mkdirSync(AGENTS_DIR, { recursive: true });

  // Copy .agent/ → ~/.agents/skills/antigravity-kit/.agent/
  const destAgent = path.join(AGENTS_DIR, ".agent");
  console.log("  → Copying .agent/ (20 agents, 37 skills, 11 workflows)");
  copyDirSync(SOURCE_AGENT, destAgent);

  // Copy skills/antigravity-kit/SKILL.md → ~/.agents/skills/antigravity-kit/SKILL.md
  console.log("  → Copying SKILL.md");
  fs.copyFileSync(
    path.join(SOURCE_SKILLS, "SKILL.md"),
    path.join(AGENTS_DIR, "SKILL.md")
  );

  // Copy GEMINI.md
  console.log("  → Copying GEMINI.md");
  fs.copyFileSync(SOURCE_GEMINI, path.join(AGENTS_DIR, "GEMINI.md"));

  // Copy gemini-extension.json
  console.log("  → Copying gemini-extension.json");
  fs.copyFileSync(SOURCE_EXTENSION, path.join(AGENTS_DIR, "gemini-extension.json"));

  console.log("\n✅ Installed successfully!");
  console.log(`   Location: ${AGENTS_DIR}`);
  console.log("\n📁 Contents:");
  console.log("   .agent/agents/    → 20 specialist agents");
  console.log("   .agent/skills/    → 37 domain skills");
  console.log("   .agent/workflows/ → 11 slash commands (/plan, /debug, etc.)");
  console.log("   .agent/rules/     → Core rules & routing");
  console.log("   .agent/scripts/   → Validation scripts");
  console.log("   SKILL.md          → Skill metadata");
  console.log("   GEMINI.md         → Gemini CLI entry point");
}

function uninstall() {
  if (!fs.existsSync(AGENTS_DIR)) {
    console.log("ℹ️  Nothing to remove. gemini-skills is not installed.");
    process.exit(0);
  }
  fs.rmSync(AGENTS_DIR, { recursive: true, force: true });
  console.log("🗑️  Removed ~/.agents/skills/antigravity-kit/");
}

function status() {
  if (fs.existsSync(AGENTS_DIR)) {
    const agentDir = path.join(AGENTS_DIR, ".agent");
    const agents = fs.existsSync(path.join(agentDir, "agents"))
      ? fs.readdirSync(path.join(agentDir, "agents")).length
      : 0;
    const skills = fs.existsSync(path.join(agentDir, "skills"))
      ? fs.readdirSync(path.join(agentDir, "skills")).length
      : 0;
    const workflows = fs.existsSync(path.join(agentDir, "workflows"))
      ? fs.readdirSync(path.join(agentDir, "workflows")).length
      : 0;
    console.log(`✅ Installed at ${AGENTS_DIR}`);
    console.log(`   Agents: ${agents} | Skills: ${skills} | Workflows: ${workflows}`);
  } else {
    console.log("❌ Not installed. Run: npx @giorgioeab/gemini-skills install");
  }
}

function help() {
  console.log(`
gemini-skills — AI Agent Skills Pack

Usage:
  npx @giorgioeab/gemini-skills install [--force]   Install to ~/.agents/
  npx @giorgioeab/gemini-skills uninstall            Remove from ~/.agents/
  npx @giorgioeab/gemini-skills status               Check installation
  npx @giorgioeab/gemini-skills help                 Show this help

Options:
  --force    Overwrite existing installation
`);
}

switch (command) {
  case "install":
    install();
    break;
  case "uninstall":
  case "remove":
    uninstall();
    break;
  case "status":
    status();
    break;
  case "help":
  case "--help":
  case "-h":
    help();
    break;
  default:
    if (!command) {
      help();
    } else {
      console.error(`Unknown command: ${command}`);
      help();
      process.exit(1);
    }
}
