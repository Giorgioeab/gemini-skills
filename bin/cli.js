#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const HOME = process.env.HOME || process.env.USERPROFILE;
const SKILLS_ROOT = path.join(HOME, ".agents", "skills");
const PACKAGE_ROOT = path.resolve(__dirname, "..");
const SOURCE_SKILLS = path.join(PACKAGE_ROOT, "skills");

const SKILL_NAMES = [
  "core",
  "brainstorm",
  "create",
  "debug",
  "deploy",
  "enhance",
  "orchestrate",
  "plan",
  "preview",
  "status",
  "test",
  "ui-ux",
];

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
  const force = process.argv.includes("--force");

  console.log("📦 Installing gemini-skills to ~/.agents/skills/\n");

  // Install each skill as a separate folder
  for (const name of SKILL_NAMES) {
    const dest = path.join(SKILLS_ROOT, name);
    if (fs.existsSync(dest)) {
      if (!force) {
        console.log(`  ⚠️  ${name}/ exists (use --force to overwrite)`);
        continue;
      }
      fs.rmSync(dest, { recursive: true, force: true });
    }
    fs.mkdirSync(dest, { recursive: true });

    // Copy SKILL.md
    const skillSrc = path.join(SOURCE_SKILLS, name, "SKILL.md");
    fs.copyFileSync(skillSrc, path.join(dest, "SKILL.md"));

    // Copy .agent/ into core only (shared core)
    if (name === "core") {
      const agentSrc = path.join(PACKAGE_ROOT, ".agent");
      copyDirSync(agentSrc, path.join(dest, ".agent"));
      console.log(`  ✅ ${name}/ (SKILL.md + .agent/)`);
    } else {
      console.log(`  ✅ ${name}/ (SKILL.md)`);
    }
  }

  console.log("\n✅ Installed 12 skills successfully!");
  console.log(`   Location: ${SKILLS_ROOT}/\n`);
  console.log("📁 Skills installed:");
  console.log("   core        → Agent routing, Socratic Gate, clean code");
  console.log("   brainstorm  → /brainstorm workflow");
  console.log("   create      → /create workflow");
  console.log("   debug       → /debug workflow");
  console.log("   deploy      → /deploy workflow");
  console.log("   enhance     → /enhance workflow");
  console.log("   orchestrate → /orchestrate workflow");
  console.log("   plan        → /plan workflow");
  console.log("   preview     → /preview workflow");
  console.log("   status      → /status workflow");
  console.log("   test        → /test workflow");
  console.log("   ui-ux       → /ui-ux-pro-max workflow");
}

function uninstall() {
  let removed = 0;
  for (const name of SKILL_NAMES) {
    const dest = path.join(SKILLS_ROOT, name);
    if (fs.existsSync(dest)) {
      fs.rmSync(dest, { recursive: true, force: true });
      removed++;
    }
  }
  if (removed === 0) {
    console.log("ℹ️  Nothing to remove. No gemini-skills installed.");
  } else {
    console.log(`🗑️  Removed ${removed} skill(s) from ~/.agents/skills/`);
  }
}

function status() {
  let installed = 0;
  let missing = 0;
  for (const name of SKILL_NAMES) {
    const dest = path.join(SKILLS_ROOT, name);
    if (fs.existsSync(dest)) {
      installed++;
      console.log(`  ✅ ${name}`);
    } else {
      missing++;
      console.log(`  ❌ ${name}`);
    }
  }
  console.log(`\n${installed}/12 skills installed.`);
  if (missing > 0) {
    console.log("Run: npx @giorgioeab/gemini-skills install --force");
  }
}

function list() {
  console.log("Available skills:\n");
  console.log("  core         Agent routing, Socratic Gate, clean code");
  console.log("  brainstorm   /brainstorm — explore ideas before coding");
  console.log("  create       /create — create new applications");
  console.log("  debug        /debug — systematic bug investigation");
  console.log("  deploy       /deploy — production deployment");
  console.log("  enhance      /enhance — improve existing code");
  console.log("  orchestrate  /orchestrate — multi-agent coordination");
  console.log("  plan         /plan — project planning (no code)");
  console.log("  preview      /preview — local dev server management");
  console.log("  status       /status — project progress report");
  console.log("  test         /test — generate and run tests");
  console.log("  ui-ux        /ui-ux-pro-max — design with 50+ styles");
}

function help() {
  console.log(`
gemini-skills — 12 AI Agent Skills (20 agents, 37 domain skills, 11 slash commands)

Usage:
  npx @giorgioeab/gemini-skills install [--force]   Install 12 skills to ~/.agents/skills/
  npx @giorgioeab/gemini-skills uninstall            Remove all skills
  npx @giorgioeab/gemini-skills status               Check which skills are installed
  npx @giorgioeab/gemini-skills list                 List available skills
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
  case "list":
  case "ls":
    list();
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
