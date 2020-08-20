# For nodemon issues:

## In Home Directory

`mkdir ~/.npm-global`

## Configure npm to use the new directory path:

`npm config set prefix '~/.npm-global'`

## open or create a ~/.profile file and add this line:

-- export PATH=~/.npm-global/bin:\$PATH

## On the command line, update your system variables:

`source ~/.profile`

## To test your new configuration, install a package globally without using sudo

`npm install -g jshint`

## run nodemon

`nodemon server.js`
