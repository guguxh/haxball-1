# Haxball Server

## Installation Process

```bash
do-release-upgrade # or install a newer version if you can
apt install nodejs npm
wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
sudo sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
apt-get update
apt-get install google-chrome-stabl
apt-get install git
git clone https://github.com/christian-kreuzberger-dtx/haxball.git
npm install
```

## Run

```bash
cd haxball
# edit haxball.js - add proper token
nodejs bot.js
` `

