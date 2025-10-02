@echo off
echo ================================
echo  GrowShow Website Setup
echo ================================
echo.

echo [1/4] Installing dependencies...
call npm install
if errorlevel 1 (
    echo Error: Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo [2/4] Running development server...
echo Open http://localhost:3000 in your browser
echo Press Ctrl+C to stop the server
echo.

call npm run dev

pause