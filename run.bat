@Echo off
cls
Echo Atualizando packages...
call yarn install
Echo:
Echo Gerando Debug App...
rem npx react-native run-android
yarn android