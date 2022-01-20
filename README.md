# Haxball Server

## Installation Process on Ubuntu 20.04

```bash
apt install nodejs npm libxss1 git
wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
sudo sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
apt-get update
apt-get install google-chrome-stable 
git clone https://github.com/christian-kreuzberger-dtx/haxball.git
npm install
```

## Run

```bash
cd haxball
# edit haxball.js - create a new headless token
nano haxball.js
# ...
nodejs haxball.js
```

