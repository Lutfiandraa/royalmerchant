@echo off
if not exist "public\assets" mkdir "public\assets"
copy "app\assets\charcoaldefault.jpg" "public\assets\charcoaldefault.jpg"
echo File copied successfully!

