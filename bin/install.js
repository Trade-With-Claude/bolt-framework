#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

const TARGET_DIR = path.join(os.homedir(), '.claude', 'commands', 'bolt');
const REPO_URL = 'https://github.com/Trade-With-Claude/bolt-framework.git';
const TMP_DIR = path.join(os.tmpdir(), 'bolt-framework-install');

console.log('');
console.log('BOLT — Claude Code Project Management Framework');
console.log('================================================');
console.log('');

// Clean up any previous tmp install
if (fs.existsSync(TMP_DIR)) {
  fs.rmSync(TMP_DIR, { recursive: true });
}

// Clone the repo
console.log('Downloading BOLT commands...');
try {
  execSync(`git clone --depth 1 ${REPO_URL} "${TMP_DIR}"`, { stdio: 'pipe' });
} catch (e) {
  console.error('Error: Could not clone repository. Check your internet connection.');
  process.exit(1);
}

// Create target directory
fs.mkdirSync(TARGET_DIR, { recursive: true });

// Copy command files
const sourceDir = path.join(TMP_DIR, 'commands', 'bolt');
const files = fs.readdirSync(sourceDir).filter(f => f.endsWith('.md'));

files.forEach(file => {
  fs.copyFileSync(path.join(sourceDir, file), path.join(TARGET_DIR, file));
});

// Copy templates if they exist
const templatesSource = path.join(TMP_DIR, 'templates');
const templatesTarget = path.join(os.homedir(), '.claude', 'commands', 'bolt-templates');
if (fs.existsSync(templatesSource)) {
  fs.mkdirSync(templatesTarget, { recursive: true });
  const templateFiles = fs.readdirSync(templatesSource);
  templateFiles.forEach(file => {
    const src = path.join(templatesSource, file);
    if (fs.statSync(src).isFile()) {
      fs.copyFileSync(src, path.join(templatesTarget, file));
    }
  });
}

// Clean up
fs.rmSync(TMP_DIR, { recursive: true });

console.log(`Installed ${files.length} commands to ${TARGET_DIR}/`);
console.log('');
console.log('Commands available:');
files.forEach(f => {
  console.log(`  /bolt:${f.replace('.md', '')}`);
});
console.log('');
console.log('Get started: run /bolt:help in Claude Code');
console.log('');
