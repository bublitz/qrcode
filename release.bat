@echo off
cls
call yarn install
echo Gerando Release app...
rem npx react-native run-android --variant=release
cd android
call gradlew bundleRelease
cd app\build\outputs\bundle\release
explorer .
cd ..\..\..\..\..\..
