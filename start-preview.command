#!/bin/bash
# Double-click launcher for the local preview server (macOS).
# First run installs dependencies automatically, then starts Vite
# and opens the preview in your default browser.

cd "$(dirname "$0")"

if ! command -v node >/dev/null 2>&1; then
  echo
  echo "Node.js is not installed on this computer."
  echo
  echo "Please install Node.js (LTS version) from:"
  echo "   https://nodejs.org/"
  echo
  echo "Close this window, run the installer, then double-click this"
  echo "file again."
  echo
  read -p "Press Enter to close this window..."
  exit 1
fi

if [ ! -d node_modules ]; then
  echo
  echo "First-time setup: installing project dependencies."
  echo "This takes about 30 seconds and only happens once."
  echo
  if ! npm install; then
    echo
    echo "npm install failed. Please send the text in this window to Anton."
    echo
    read -p "Press Enter to close this window..."
    exit 1
  fi
fi

echo
echo "Starting preview at http://localhost:5173/"
echo "A browser tab will open in a few seconds."
echo
echo "Keep this window open while you work."
echo "Save any file to see changes instantly in the browser."
echo "Press Ctrl+C to stop the server."
echo

( sleep 4 && open "http://localhost:5173/" ) &

npm run dev
