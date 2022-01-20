var room = HBInit({
	roomName: "Haxball Server 1234",
	maxPlayers: 16,
    token: "thr1.AAAAAGHdgJXARWhiju_8tg.NidNhbeEh4I", // https://www.haxball.com/headlesstoken
    public: true,
    noPlayer: true,
    password: "dynatrace",
    geo: {"code": "DE", "lat" : 49.5, "lon" : 11.1}
});

room.setDefaultStadium("Big");
room.setScoreLimit(3);
room.setTimeLimit(3);
room.setTeamsLock(true);


room.onRoomLink = function (url) {
	console.log(url);
}

  // If there are no admins left in the room give admin to one of the remaining players.
  function updateAdmins() {
console.log("Updateing admins")
    // Get all players except the host (id = 0 is always the host)
    var players = room.getPlayerList().filter((player) => player.id != 0 );
    if ( players.length == 0 ) return; // No players left, do nothing.
    if ( players.find((player) => player.admin) != null ) return; // There's an admin left so do nothing.
    room.setPlayerAdmin(players[0].id, true); // Give admin to the first non admin player in the list
  }

  room.onPlayerJoin = function(player) {
    updateAdmins();
  }

  room.onPlayerLeave = function(player) {
    updateAdmins();
  }
root@s-2vcpu-4gb-fra1-01:~/haxball# at hax^C
root@s-2vcpu-4gb-fra1-01:~/haxball# cat haxball.js
const puppeteer = require('puppeteer');
async function bot () {
    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
 
page
    .on('console', message =>
      console.log(`${message.type().substr(0, 3).toUpperCase()} ${message.text()}`))
    .on('pageerror', ({ message }) => console.log(message))
    .on('response', response =>
      console.log(`${response.status()} ${response.url()}`))
    .on('requestfailed', request =>
      console.log(`${request.failure().errorText} ${request.url()}`))
 
    await page.goto('https://www.haxball.com/headless', {waitUntil: 'networkidle2'});
    await page.addScriptTag({path: 'bot.js'});
 
}
bot();
console.log('Bot loaded');
