@echo off
REM Double-click launcher for the local preview server.
REM First run installs dependencies automatically, then starts Vite
REM and opens the preview in your default browser.

cd /d "%~dp0"
title Anton Liutin site preview

where node >nul 2>nul
if errorlevel 1 (
  echo.
  echo Node.js is not installed on this computer.
  echo.
  echo Please install Node.js ^(LTS version^) from:
  echo    https://nodejs.org/
  echo.
  echo Close this window, run the installer, then double-click this
  echo file again.
  echo.
  pause
  exit /b 1
)

if not exist node_modules (
  echo.
  echo First-time setup: installing project dependencies.
  echo This takes about 30 seconds and only happens once.
  echo.
  call npm install
  if errorlevel 1 (
    echo.
    echo npm install failed. Please send the text in this window to Anton.
    echo.
    pause
    exit /b 1
  )
)

echo.
echo Starting preview at http://localhost:5173/
echo A browser tab will open in a few seconds.
echo.
echo Keep this window open while you work.
echo Save any file to see changes instantly in the browser.
echo Press Ctrl+C ^(then Y^) to stop the server.
echo.

start "" cmd /c "timeout /t 4 /nobreak >nul & start http://localhost:5173/"

call npm run dev
