@echo off
echo ================================
echo  Building GrowShow for Production
echo ================================
echo.

echo [1/3] Installing dependencies...
call npm install
if errorlevel 1 (
    echo Error: Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo [2/3] Building optimized production version...
call npm run build
if errorlevel 1 (
    echo Error: Build failed
    pause
    exit /b 1
)

echo.
echo [3/3] Build completed successfully!
echo.
echo Your optimized website is ready in the '.next' folder
echo Deploy to Vercel by pushing to GitHub
echo.

pause