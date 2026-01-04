@echo off
setlocal enabledelayedexpansion

:: Get the directory where this script is located
set "script_dir=%~dp0"

:: Define the input and output directories relative to the script location
set "input_dir=%script_dir%input"
set "output_dir=%script_dir%output"

:: Define the path to cwebp.exe (colocated with this script)
set "cwebp_exe=%script_dir%cwebp.exe"

:: Check if cwebp.exe exists
if not exist "%cwebp_exe%" (
    echo Error: cwebp.exe not found at "%cwebp_exe%"
    echo Please place cwebp.exe in the same directory as this batch file.
    pause
    exit /b 1
)

:: Create the output directory if it doesn't exist
if not exist "%output_dir%" mkdir "%output_dir%"

:: Check if input directory exists
if not exist "%input_dir%" (
    echo Error: Input directory "%input_dir%" does not exist.
    echo Please create the input folder and place your PNG files there.
    pause
    exit /b 1
)

echo Input directory: %input_dir%
echo Output directory: %output_dir%
echo Using cwebp: %cwebp_exe%
echo.

:: Count PNG and JPG files
set "count=0"
for %%f in ("%input_dir%\*.png") do set /a count+=1
for %%f in ("%input_dir%\*.jpg") do set /a count+=1
for %%f in ("%input_dir%\*.jpeg") do set /a count+=1

if %count%==0 (
    echo No PNG or JPG files found in the input directory.
    pause
    exit /b 0
)

echo Found %count% image file(s) to convert.
echo.

:: Change to the script directory to avoid path issues
pushd "%script_dir%"

:: Loop through all PNG and JPG files in the input directory
set "converted=0"
for %%f in ("input\*.png" "input\*.jpg" "input\*.jpeg") do (
    set "filename=%%~nxf"
    set "basename=%%~nf"
    
    echo Converting "!filename!" to WebP...
    
    :: Use relative paths and call cwebp directly
    cwebp.exe -q 80 "input\!filename!" -o "output\!basename!.webp" >nul 2>&1
    if !errorlevel! equ 0 (
        set /a converted+=1
        echo   ✓ Successfully converted to "!basename!.webp"
    ) else (
        echo   ✗ Failed to convert "!filename!"
        :: Try with quotes around the entire command for problematic filenames
        "cwebp.exe" -q 80 "input\!filename!" -o "output\!basename!.webp" >nul 2>&1
        if !errorlevel! equ 0 (
            set /a converted+=1
            echo   ✓ Successfully converted to "!basename!.webp" (retry)
        )
    )
    echo.
)

:: Return to original directory
popd

echo Conversion complete: !converted! of %count% files converted successfully.
pause