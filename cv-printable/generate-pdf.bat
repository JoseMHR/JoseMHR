@echo off
setlocal
echo ========================================================
echo   Compilador de CV A4 Bilingue (1 Pagina) - JoseMHR
echo ========================================================

set SCRIPT_DIR=%~dp0
set HTML_ES=%SCRIPT_DIR%index.html
set HTML_EN=%SCRIPT_DIR%index-en.html
set PDF_ES=%SCRIPT_DIR%CV_Jose_Manuel_Heredia_Reyes.pdf
set PDF_EN=%SCRIPT_DIR%CV_Jose_Manuel_Heredia_Reyes_EN.pdf

set BROWSER_BIN=""
if exist "C:\Program Files\Google\Chrome\Application\chrome.exe" (
    set BROWSER_BIN="C:\Program Files\Google\Chrome\Application\chrome.exe"
    echo [OK] Usando Google Chrome headless...
) else if exist "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" (
    set BROWSER_BIN="C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
    echo [OK] Usando Microsoft Edge headless...
) else (
    echo [ERROR] No se encontro Google Chrome ni Microsoft Edge.
    exit /b 1
)

echo [1/2] Compilando version en Espanol (index.html)...
%BROWSER_BIN% --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf="%PDF_ES%" "%HTML_ES%"
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Fallo la compilacion del CV en Espanol.
    exit /b 1
)

echo [2/2] Compilando version en Ingles (index-en.html)...
%BROWSER_BIN% --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf="%PDF_EN%" "%HTML_EN%"
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Fallo la compilacion del CV en Ingles.
    exit /b 1
)

if not exist "%SCRIPT_DIR%..\assets\docs" mkdir "%SCRIPT_DIR%..\assets\docs"
copy /Y "%PDF_ES%" "%SCRIPT_DIR%..\assets\docs\CV_Jose_Manuel_Heredia_Reyes.pdf" >nul
copy /Y "%PDF_EN%" "%SCRIPT_DIR%..\assets\docs\CV_Jose_Manuel_Heredia_Reyes_EN.pdf" >nul

echo [EXITO] Ambos CVs compilados y sincronizados en assets/docs/:
echo   - CV_Jose_Manuel_Heredia_Reyes.pdf (ES)
echo   - CV_Jose_Manuel_Heredia_Reyes_EN.pdf (EN)
echo ========================================================
