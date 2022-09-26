@Echo off
Echo:
Echo Limpando Android...
cd android
call gradlew clean
call gradlew cleanBuildCache
cd ..
Echo:
Echo Limpando Packages...
call yarn cache clean
call yarn start --reset-cache
Echo:
Echo Ok...
