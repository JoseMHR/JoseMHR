@echo off
setlocal
echo ========================================================
echo   Compilador de CV A4 (1 Pagina) - JoseMHR
echo ========================================================

set SCRIPT_DIR=%~dp0
set HTML_PATH=%SCRIPT_DIR%index.html
set PDF_PATH=%SCRIPT_DIR%CV_Jose_Manuel_Heredia_Reyes_2026_Draft.pdf

set CHROME_PATH="C:\Program Files\Google\Chrome\Application\chrome.exe"
set EDGE_PATH="C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

if exist %CHROME_PATH% (
    echo [OK] Compilando con Google Chrome headless...
    %CHROME_PATH% --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf="%PDF_PATH%" "%HTML_PATH%"
    goto done
)

if exist %EDGE_PATH% (
    echo [OK] Compilando con Microsoft Edge headless...
    %EDGE_PATH% --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf="%PDF_PATH%" "%HTML_PATH%"
    goto done
)

echo [ERROR] No se encontro Google Chrome ni Microsoft Edge.
pause
exit /b 1

:done
echo [EXITO] PDF generado en 1 pagina: %PDF_PATH%
echo ========================================================
