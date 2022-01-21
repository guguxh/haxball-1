/* ROOM */

const roomName2 = "⚪️FUTSAL DO PELÉ 24 HRS | NIVEL⚪️"; // NOME DA SALA
const maxPlayers = 20; // QUANTIDADE DE SLOTS DA SALA
const playerName2 = " ";
const roomPublic = true; // true = Público ; false = Não Listado
const geo = {"code": "br", "lat": -23.51634162, "lon": -46.6460824}; // Localização (não necessário mexer)
const token = "thr1.AAAAAGHq0msbtN_xgKvDEA.daZv2WaK_o4"; // NÃO MEXER

const room = HBInit({ roomName: roomName2, playerName: playerName2, maxPlayers: maxPlayers, public: roomPublic, geo: geo, token: token});

var futsalzin = `{"name":"Futsal x3  by Bazinga from HaxMaps","width":620,"height":270,"spawnDistance":350,"bg":{"type":"hockey","width":550,"height":240,"kickOffRadius":80,"cornerRadius":0},"vertexes":[{"x":550,"y":240,"trait":"ballArea"},{"x":550,"y":-240,"trait":"ballArea"},{"x":0,"y":270,"trait":"kickOffBarrier"},{"x":0,"y":80,"bCoef":0.15,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":180},{"x":0,"y":-80,"bCoef":0.15,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":180},{"x":0,"y":-270,"trait":"kickOffBarrier"},{"x":-550,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-590,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-590,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":-550,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":550,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,-80]},{"x":590,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,-80]},{"x":590,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,80]},{"x":550,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,80]},{"x":-550,"y":80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[-700,80]},{"x":-550,"y":240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":-550,"y":-80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[-700,-80]},{"x":-550,"y":-240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":-550,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","pos":[700,80]},{"x":550,"y":240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":-240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":550,"y":-80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[700,-80]},{"x":550,"y":-240,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":-240,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-550,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":550,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":0,"y":-240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"trait":"kickOffBarrier","vis":true,"color":"F8F8F8"},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"trait":"kickOffBarrier","vis":true,"color":"F8F8F8"},{"x":0,"y":80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":-180},{"x":0,"y":-80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":-180},{"x":0,"y":80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":0},{"x":0,"y":-80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":0},{"x":-557.5,"y":80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[-700,80]},{"x":-557.5,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false},{"x":-557.5,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0},{"x":-557.5,"y":-80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[-700,-80]},{"x":557.5,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0},{"x":557.5,"y":-80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[700,-80]},{"x":557.5,"y":80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[700,80]},{"x":557.5,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false},{"x":0,"y":-80,"bCoef":0.1,"trait":"line"},{"x":0,"y":80,"bCoef":0.1,"trait":"line"},{"x":-550,"y":-80,"bCoef":0.1,"trait":"line"},{"x":-550,"y":80,"bCoef":0.1,"trait":"line"},{"x":550,"y":-80,"bCoef":0.1,"trait":"line"},{"x":550,"y":80,"bCoef":0.1,"trait":"line"},{"x":-240,"y":256,"bCoef":0.1,"trait":"line"},{"x":-120,"y":256,"bCoef":0.1,"trait":"line"},{"x":-240,"y":-256,"bCoef":0.1,"trait":"line"},{"x":-120,"y":-224,"bCoef":0.1,"trait":"line"},{"x":-120,"y":-256,"bCoef":0.1,"trait":"line"},{"x":240,"y":256,"bCoef":0.1,"trait":"line"},{"x":120,"y":224,"bCoef":0.1,"trait":"line"},{"x":120,"y":256,"bCoef":0.1,"trait":"line"},{"x":240,"y":-224,"bCoef":0.1,"trait":"line"},{"x":240,"y":-256,"bCoef":0.1,"trait":"line"},{"x":120,"y":-224,"bCoef":0.1,"trait":"line"},{"x":120,"y":-256,"bCoef":0.1,"trait":"line"},{"x":-381,"y":240,"bCoef":0.1,"trait":"line"},{"x":-381,"y":256,"bCoef":0.1,"trait":"line"},{"x":-550,"y":200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":-390,"y":70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-550,"y":226,"bCoef":0.1,"trait":"line","curve":-90},{"x":-536,"y":240,"bCoef":0.1,"trait":"line","curve":-90},{"x":-550,"y":-200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":-390,"y":-70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-550,"y":-226,"bCoef":0.1,"trait":"line","curve":90},{"x":-536,"y":-240,"bCoef":0.1,"trait":"line","curve":90},{"x":-556,"y":123,"bCoef":0.1,"trait":"line"},{"x":-575,"y":123,"bCoef":0.1,"trait":"line"},{"x":556,"y":123,"bCoef":0.1,"trait":"line"},{"x":575,"y":123,"bCoef":0.1,"trait":"line"},{"x":-556,"y":-123,"bCoef":0.1,"trait":"line"},{"x":-575,"y":-123,"bCoef":0.1,"trait":"line"},{"x":556,"y":-123,"bCoef":0.1,"trait":"line"},{"x":575,"y":-123,"bCoef":0.1,"trait":"line"},{"x":-381,"y":-240,"bCoef":0.1,"trait":"line"},{"x":-381,"y":-256,"bCoef":0.1,"trait":"line"},{"x":381,"y":240,"bCoef":0.1,"trait":"line"},{"x":381,"y":256,"bCoef":0.1,"trait":"line"},{"x":381,"y":-240,"bCoef":0.1,"trait":"line"},{"x":381,"y":-256,"bCoef":0.1,"trait":"line"},{"x":550,"y":-226,"bCoef":0.1,"trait":"line","curve":-90},{"x":536,"y":-240,"bCoef":0.1,"trait":"line","curve":-90},{"x":550,"y":226,"bCoef":0.1,"trait":"line","curve":90},{"x":536,"y":240,"bCoef":0.1,"trait":"line","curve":90},{"x":550,"y":200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":390,"y":70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":550,"y":-200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":390,"y":-70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":390,"y":70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":390,"y":-70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-375,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":3.5,"bCoef":0.1,"trait":"line","curve":180}],"segments":[{"v0":6,"v1":7,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":7,"v1":8,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":-590},{"v0":8,"v1":9,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":10,"v1":11,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[700,-80],"y":-80},{"v0":11,"v1":12,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":590},{"v0":12,"v1":13,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[700,80],"y":80},{"v0":2,"v1":3,"trait":"kickOffBarrier"},{"v0":3,"v1":4,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.15,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":3,"v1":4,"curve":-180,"vis":true,"color":"F8F8F8","bCoef":0.15,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":4,"v1":5,"trait":"kickOffBarrier"},{"v0":14,"v1":15,"vis":true,"color":"F8F8F8","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-550},{"v0":16,"v1":17,"vis":true,"color":"F8F8F8","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-550},{"v0":18,"v1":19,"vis":true,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":240},{"v0":20,"v1":21,"vis":true,"color":"F8F8F8","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":550},{"v0":22,"v1":23,"vis":true,"color":"F8F8F8","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":550},{"v0":24,"v1":25,"vis":true,"color":"F8F8F8","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":550,"y":-240},{"v0":26,"v1":27,"curve":0,"vis":true,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":-240},{"v0":28,"v1":29,"vis":true,"color":"F8F8F8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":30,"v1":31,"vis":true,"color":"F8F8F8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":38,"v1":39,"curve":0,"vis":false,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-557.5},{"v0":40,"v1":41,"curve":0,"vis":false,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-557.5},{"v0":42,"v1":43,"curve":0,"vis":false,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":557.5},{"v0":44,"v1":45,"curve":0,"vis":false,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":557.5},{"v0":46,"v1":47,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":0},{"v0":48,"v1":49,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-550},{"v0":50,"v1":51,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":550},{"v0":64,"v1":65,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":66,"v1":67,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":69,"v1":68,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":70,"v1":71,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":67,"v1":71,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":73,"v1":72,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":74,"v1":75,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":76,"v1":77,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":78,"v1":79,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":80,"v1":81,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":82,"v1":83,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":84,"v1":85,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":86,"v1":87,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":89,"v1":88,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":91,"v1":90,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":92,"v1":93,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":94,"v1":95,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":96,"v1":97,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":390},{"v0":99,"v1":98,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":98,"v1":99,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":101,"v1":100,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":100,"v1":101,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":103,"v1":102,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":102,"v1":103,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":105,"v1":104,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":104,"v1":105,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":107,"v1":106,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":106,"v1":107,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":109,"v1":108,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":108,"v1":109,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":111,"v1":110,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":110,"v1":111,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":113,"v1":112,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":112,"v1":113,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":115,"v1":114,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":114,"v1":115,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":117,"v1":116,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":116,"v1":117,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":119,"v1":118,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":118,"v1":119,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":121,"v1":120,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":120,"v1":121,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":123,"v1":122,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":122,"v1":123,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":125,"v1":124,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":124,"v1":125,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":127,"v1":126,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":126,"v1":127,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":129,"v1":128,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":128,"v1":129,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5}],"goals":[{"p0":[-557.5,-80],"p1":[-557.5,80],"team":"red"},{"p0":[557.5,80],"p1":[557.5,-80],"team":"blue"}],"discs":[{"radius":5,"pos":[-550,80],"color":"FF6666","trait":"goalPost","y":80},{"radius":5,"pos":[-550,-80],"color":"FF6666","trait":"goalPost","y":-80,"x":-560},{"radius":5,"pos":[550,80],"color":"6666FF","trait":"goalPost","y":80},{"radius":5,"pos":[550,-80],"color":"6666FF","trait":"goalPost","y":-80},{"radius":3,"invMass":0,"pos":[-550,240],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[-550,-240],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[550,-240],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[550,240],"color":"FFCC00","bCoef":0.1,"trait":"line"}],"planes":[{"normal":[0,1],"dist":-240,"bCoef":1,"trait":"ballArea","vis":false,"curve":0},{"normal":[0,-1],"dist":-240,"bCoef":1,"trait":"ballArea"},{"normal":[0,1],"dist":-270,"bCoef":0.1},{"normal":[0,-1],"dist":-270,"bCoef":0.1},{"normal":[1,0],"dist":-620,"bCoef":0.1},{"normal":[-1,0],"dist":-620,"bCoef":0.1},{"normal":[1,0],"dist":-620,"bCoef":0.1,"trait":"ballArea","vis":false,"curve":0},{"normal":[-1,0],"dist":-620,"bCoef":0.1,"trait":"ballArea","vis":false,"curve":0}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"line":{"vis":true,"bCoef":0.1,"cMask":[""]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":5},"ballPhysics":{"radius":6.25,"bCoef":0.4,"invMass":1.5,"damping":0.99,"color":"FFCC00"}}`;
 

room.setTeamsLock(true);
const password = "lindo"
const passwordCamp = "camp123"
room.setTeamColors(1, 360, 0x696969, [0xFFFFFF, 0xF5F5F5, 0xE6E6E6]);
room.setTeamColors(2, 60, 0xFFFFFF, [0x707070, 0x696969, 0x5C5C5C]);

/* STADIUM */

const afks = [];

const japones = "ሣࠛ硫⩅ౣ瀖⬢䀙笩त「縗h㡰ऻ紕怜䐃⨬ᬌย礩ㅱᴧဋ㤢ఌ佹砕Ĉ⼈渻䬭॑⬺爂᰾ᜪ䉧ᬯ㍸᜖ᘬ慩㙲Ԑ瀩ञࠣ笋℉⨄㐷紪権ਛൽ㔙怅㬆癕⨴琐ḉ≼崪ᙻḻ⨂㈿爇䕦ᴵ灾㸏眮ቡᄸ܍礂海學㰌⬦ ѫ⼕ย⌑ḷ㠕ፃ㤕㌋␢眢砬ⵯ煾Ⱘ縂㉰匊㤀ह稫ᝈⴾㄫ㤒䉊؈ି㔞帱ॹࠚⰯἯ浸ἱᔞ፭ਮ娮";
const japones2 = "ᬌย礩ㅱᴧဋ㤢ఌ佹砕Ĉ⼈渻䬭॑⬺爂᰾ᜪ䉧ᬯ㍸᜖ᘬ慩㙲Ԑ瀩ञࠣ笋℉⨄㐷紪権ਛൽ㔙怅㬆癕⨴琐ḉ≼崪ᙻḻ⨂㈿爇䕦ᴵ灾㸏眮ቡᄸ܍礂海學㰌⬦ ѫ⼕ย⌑ḷ㠕ፃ㤕㌋␢眢砬ⵯ煾Ⱘ縂㉰匊㤀ह稫ᝈⴾㄫ㤒䉊؈ି㔞帱ॹࠚⰯἯ浸ἱᔞ፭ਮ娮ف㤮〕㱳⬗ᅷд甇ᜯ⩿ᤶⱁ戃椏缁 ࠛ硫⩅ౣ瀖⬢䀙笩त「縗h㡰ऻ紕怜䐃⨬";
const japones3 = "ఌ佹砕Ĉ⼈渻䬭॑⬺爂᰾ᜪ䉧ᬯ㍸᜖ᘬ慩㙲Ԑ瀩ञࠣ笋℉⨄㐷紪権ਛൽ㔙怅㬆癕⨴琐ḉ≼崪ᙻḻ⨂㈿爇䕦ᴵ灾㸏眮ቡᄸ܍礂海學㰌⬦ ѫ⼕ย⌑ḷ㠕ፃ㤕㌋␢眢砬ⵯ煾Ⱘ縂㉰匊㤀ह稫ᝈⴾㄫ㤒䉊؈ି㔞帱ॹࠚ 椏Ἧ浸ἱᔞ፭ਮ娮ف㤮 椏㱳椏ᅷд甇ᜯ⩿ᤶⱁ戃 椏缁⼐獾⌱മ㈐ᵲ桨ԷᴑĿᑆ";
const japones4 = "ボΞԼΐԾ҉ↁA҉$: ۝۞۩߷ऄ۝۞۩߷ऄ۝۞۩߷ऄ۝۞۩߷ऄ۝۞۩߷ऄ۝۞۩߷ऄ ボΞԼΐԾ҉ↁA҉$: ۝۞۩߷ऄ۝۞۩߷ऄ۝۞۩߷ऄ۝۞۩߷ऄ۝۞۩߷ऄ۝۞۩߷ऄ ボΞԼΐԾ҉ↁA҉$: ۝۞۩߷ऄ۝۞۩߷ऄ۝۞۩߷ऄ۝۞۩߷ऄ۝۞۩߷ऄ۝۞۩߷ऄ ボΞԼΐԾ҉ↁA҉$";
const japones5 = "㧫璧�觭䢜潇ကᩨ쀡ఈ泄찉넾﫤㏭�緺�堲昸⸐낧懈౩䊀脁潡䣚⾤㸼짠ब꺅�ﹴﯰ﹟ﵿ࿿빏⿠雴㰯첇브쾞�읨⎘堌�̃㭎掌�䑂吺쏘뗲᭾�띀急蔹♤⹉ꆣせㆉ였鷀Ú錘陈搳窇㉕ꙕ鄲欙莚쁃◑첶㘥䅺ǫ呡讬ꯩ䌻⨣�馫㷈搊ꌈ恘㠄陌颓̌谆、ઠ鞿å 䆔⽪ﭓ櫆陗썆㾑쾛炦͝薐�翺￧祋ۓ岳书";
const japones6 = "۝۞۩߷ऄ۝۞۩߷ऄ۝۞۩߷ऄ۝۞۩߷ऄ۝۞۩߷ऄ۝۞۩߷ऄ";
const playerRadius = 15;
var ballRadius = 10;
var triggerDistance = playerRadius + ballRadius + 0.01;

room.setCustomStadium(futsalzin);
/* OPTIONS */

const maxTeamSize = 20;
/* PLAYERS */

const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
var extendedP = [];
const eP = { ID: 0, AUTH: 1, CONN: 2, AFK: 3, ACT: 4, GK: 5, MUTE: 6 };
const Ss = { GA: 0, WI: 1, DR: 2, LS: 3, WR: 4, GL: 5, AS: 6, GK: 7, CS: 8, CP: 9, RL: 10, NK: 11}
var teamR;
var teamB;
var teamS;
var gameocorring;

/* GAME */

var officialAdms = [];
var criaColor = [];
var otherColor = [];
var lastTeamTouched;
var lastPlayersTouched; // These allow to get good goal notifications (it should be lastPlayersKicked, waiting on a next update to get better track of shots on target)
var countAFK = false; // Created to get better track of activity
var activePlay = false; // Created to get better track of the possession
var banList = []; // Getting track of the bans, so we can unban ppl if we want
var muteList = [];

/* STATS */

var game;
var GKList = ["",""];
var Rposs = 0;
var Bposs = 0;
var penativo = true;
var point = [{"x": 0, "y": 0}, {"x": 0, "y": 0}]; // created to get ball speed
var ballSpeed;
var lastWinner = Team.SPECTATORS;
var streakr = 0;
var streakb = 0;
var allBlues = []; // This is to count the players who should be counted for the stats. This includes players who left after the game has started, doesn't include those who came too late or ...
var allReds = []; // ... those who came in a very unequal game.
var map = 3;

/* OBJECTS */

function Goal(time, team, striker, assist) {
	this.time = time;
	this.team = team;
	this.striker = striker;
	this.assist = assist;
}

function Game(date, scores, goals) {
	this.date = date;
	this.scores = scores;
	this.goals = goals;
}

/* COLORS */

var welcomeColor = 0x8A2BE2;
var AnnouncementColor = 0xFFFF00;
var announcementColor = 0xFFFF00;
var redColor = 0xFF1F17;
var blueColor = 0x0080ff;
var pinkColor = 0xFFFF00;
var yellowColor = 0xFFFF1F;
var cianoColor = 0xB22222;
var strongRed = 0x3679FF;
var colorOne = 0xFF8400;
var colorTwo = 0xFFAA4F;
var colorThree = 0xFFC382;
var colorFour = 0xE69500;
var colorAdm = 0xEBA300;
var colorBan = 0x3A96DD;
var colorPass = 0xFFC83D;
var colorHelp = 0x0000FF;
var redUni = 0xFF1F17;
var blueUni = 0x0080ff;
var privateMessageColor = 0xFF6EFA;
var defaultColor = null;

/* FUNCTIONS */
function updateAdmins() { 
  // pega todos os jogadaores com exceรงรฃo do host.
  var players = room.getPlayerList().filter((player) => player.id != 0 );
  if ( players.length == 0 ) return; // nenhum player sobrando, nao faz nada.
  if ( players.find((player) => player.admin) != null ) return; // Hรก um admin, nรฃo fazer nada.
}

/* AUXILIARY FUNCTIONS */

function getRandomInt(max) { // returns a random number from 0 to max-1
	return Math.floor(Math.random() * Math.floor(max)); 
}

function getTime(scores) { // returns the current time of the game
	return "[" + Math.floor(Math.floor(scores.time/60)/10).toString() + Math.floor(Math.floor(scores.time/60)%10).toString() + ":" + Math.floor(Math.floor(scores.time - (Math.floor(scores.time/60) * 60))/10).toString() + Math.floor(Math.floor(scores.time - (Math.floor(scores.time/60) * 60))%10).toString() + "]"
}

function pointDistance(p1, p2) {
	var d1 = p1.x - p2.x;
	var d2 = p1.y - p2.y;
	return Math.sqrt(d1 * d1 + d2 * d2);
}

/* EVENTOS */

// Bot Functions
function SendMsg(msg, ignoreQuiteMode=true){
	if(!ignoreQuiteMode && _quiteMode){
		return;
	}
	room.sendAnnouncement(msg, null, announcementColor, "bold", null);
};
function QuiteBot(){if(!_quiteMode){SendMsg(_stringQuiteModeOn,true);}else{SendMsg(_stringQuiteModeOff,true)}_quiteMode=!_quiteMode;}

// Ban-Removal-System Functions
function RemoveBans(){
	SendMsg(_stringBanRemoval,false);
	room.clearBans();
}

/* BUTTONS */

function topBtn() {
    if (teamS.length == 0) {
        return;
    }
    else {
        if (teamR.length == teamB.length) {
            if (teamS.length > 1) {
                room.setPlayerTeam(teamS[0].id, Team.RED);
                room.setPlayerTeam(teamS[1].id, Team.BLUE);
            }
            return;
        }
        else if (teamR.length < teamB.length) {
            room.setPlayerTeam(teamS[0].id, Team.RED);
        }
        else {
            room.setPlayerTeam(teamS[0].id, Team.BLUE);
        }
    }
}

function resetBtn() {
    resettingTeams = true;
    setTimeout(function() { resettingTeams = false; }, 100);
    if (teamR.length <= teamB.length) {
        for (var i = 0; i < teamR.length; i++) {
            room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
            room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
        }
        for (var i = teamR.length; i < teamB.length; i++) {
            room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
        }
    }
    else {
        for (var i = 0; i < teamB.length; i++) {
            room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
            room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
        }
        for (var i = teamB.length; i < teamR.length; i++) {
            room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
        }
    }
}

function blueToSpecBtn() {
    resettingTeams = true;
    setTimeout(function() { resettingTeams = false; }, 100);
    for (var i = 0; i < teamB.length; i++) {
        room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
    }
}

function redToSpecBtn() {
    resettingTeams = true;
    setTimeout(function() { resettingTeams = false; }, 100);
    for (var i = 0; i < teamR.length; i++) {
        room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
    }
}

function blueToRedBtn() {
    resettingTeams = true;
    setTimeout(() => { resettingTeams = false; }, 100);
    for (var i = 0; i < teamB.length; i++) {
        room.setPlayerTeam(teamB[i].id, Team.RED);
    }
}

/* GAME FUNCTIONS */

function endGame(winner) { // handles the end of a game : no stopGame function inside
	const scores = room.getScores();
	game.scores = scores;
	const loser = 
		winner == 1 ? 2 : 1 ;
	Rposs = Rposs/(Rposs+Bposs);
	Bposs = 1 - Rposs;
	lastWinner = winner;
	if (winner == Team.RED) {
		streakr++;
		streakb = 0;
		room.sendAnnouncement("🥇 O time vermelho venceu por " + scores.red + "-" + scores.blue + " e está com " + streakr + " vitórias seguidas (🔥).", null, announcementColor, "bold", null);
	}
	else if (winner == Team.BLUE) {
		streakb++;
		streakr = 0;
		room.sendAnnouncement("🥇 O time azul venceu por " + scores.blue + "-" + scores.red + " e está com " + streakb + " vitórias seguidas (🔥).", null, announcementColor, "bold", null);
	}
	
    room.sendAnnouncement("🤼 O time vermelho (🔴) teve " + (Rposs*100).toPrecision(3).toString() + "% de posse de bola enquanto o time azul (🔵) teve " + (Bposs*100).toPrecision(3).toString() + "%.", null, announcementColor, "bold", null);
    scores.red == 0 ? room.sendAnnouncement(" 🛡️ " + GKList[1].name + " não tomou nenhum gol!", null, announcementColor, "bold", null) : scores.blue == 0 ? room.sendAnnouncement(" 🛡️ " + GKList[0].name + " não tomou nenhum gol!", null, announcementColor, "bold", null) : null;

	room.stopGame();

}

/* PLAYER FUNCTIONS */

function updateList(number, team) {
    if (room.getScores() != null) {
        if (team == Team.RED) {
            GKList = GKList.slice(0, number).concat(GKList.slice(number + 1, maxPlayers)).concat(0).concat(GKList.slice(maxPlayers, GKList.length));
            
        }
        else if (team == Team.BLUE) {
            GKList = GKList.slice(0, maxPlayers + number).concat(GKList.slice(maxPlayers + number + 1, GKList.length).concat(0));
        }
    }
}

function updateTeams() { // update the players' list and all the teams' list
	players = room.getPlayerList().filter((player) => player.id != 0);
	teamR = players.filter(p => p.team === Team.RED);
	teamB = players.filter(p => p.team === Team.BLUE);
	teamS = players.filter(p => p.team === Team.SPECTATORS);
}

function getAuth(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AUTH] : null;
}

function getAFK(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AFK] : null;
}

function setAFK(player, value) {
	extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.AFK] = value);
}

function getActivity(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.ACT] : null;
}

function setActivity(player, value) {
	extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.ACT] = value);
}

function getGK(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.GK] : null;
}

function setGK(player, value) {
	extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.GK] = value);
}

function getMute(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.MUTE] : null;
}

function setMute(player, value) {
	extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.MUTE] = value);
}

/* STATS FUNCTIONS */

function getLastTouchOfTheBall() {
	const ballPosition = room.getBallPosition();
	updateTeams();
	for (var i = 0; i < players.length; i++) {
		if (players[i].position != null) {
			var distanceToBall = pointDistance(players[i].position, ballPosition);
			if (distanceToBall < triggerDistance) {
				!activePlay ? activePlay = true : null;
				if (lastTeamTouched == players[i].team && lastPlayersTouched[0] != null && lastPlayersTouched[0].id != players[i].id) {
					lastPlayersTouched[1] = lastPlayersTouched[0];
					lastPlayersTouched[0] = players[i];
				}
				lastTeamTouched = players[i].team;
			}
		}
	}
}

function getStats() { // gives possession, ball speed and GK of each team
	if (activePlay) {
		updateTeams();
		lastTeamTouched == Team.RED ? Rposs++ : Bposs++;
		var ballPosition = room.getBallPosition();
		point[1] = point[0];
		point[0] = ballPosition;
		ballSpeed = (pointDistance(point[0], point[1]) * 60 * 60 * 60)/15000;
		var k = [-1, Infinity];
		for (var i = 0; i < teamR.length; i++) {
			if (teamR[i].position.x < k[1]) {
				k[0] = teamR[i];
				k[1] = teamR[i].position.x;
			}
		}
		k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
		k = [-1, -Infinity];
		for (var i = 0; i < teamB.length; i++) {
			if (teamB[i].position.x > k[1]) {
				k[0] = teamB[i];
				k[1] = teamB[i].position.x;
			}
		}
		k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
		findGK();
	}
}

function findGK() {
	var tab = [[-1,""], [-1,""]];
	for (var i = 0; i < extendedP.length ; i++) {
		if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.RED) {
			if (tab[0][0] < extendedP[i][eP.GK]) {
				tab[0][0] = extendedP[i][eP.GK];
				tab[0][1] = room.getPlayer(extendedP[i][eP.ID]);
			}
		}
		else if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.BLUE) {
			if (tab[1][0] < extendedP[i][eP.GK]) {
				tab[1][0] = extendedP[i][eP.GK];
				tab[1][1] = room.getPlayer(extendedP[i][eP.ID]);
			}
		}
	}
	GKList = [tab[0][1], tab[1][1]];
}

function initPlayerStats(player){
    if (stats.get(player.name)) return;
    stats.set(player.name, [0, 0, 0, 0, 0, 0, 0, 0, 0]) // goals, assists, wins, loses, og, cs
}

/* EVENTS */

var adminColor = 0x0000FF;
var messageColor;
var colorControl = [];
var arm = new Map();
var stats = new Map();
var teste = true;
var permis = false;
var senhaperma = "!visita";
var specoff, chatoff, alloff = false;
var topontuadores = [];

var conns = [];

var playersConn = {};

if(localStorage.getItem("conns")) {
	conns = JSON.parse(localStorage.getItem("conns"))
}else{
	var conn = JSON.stringify(conns);

	localStorage.setItem("conns", conn)
}

/* PLAYER MOVEMENT */

room.setTimeLimit(3);
room.setScoreLimit(3);

room.onPlayerJoin = function(player) {

	for(let i = 0; i < conns.length; i++) {
		if(conns[i] == player.conn) {
			room.kickPlayer(player.id, "🚨👮‍♂️ Você está na lista negra da sala!", true)
			break;
		}
	}

	var ps;

	arm.set(player.id, [player.conn, 0, 0, "", 0, false, 0, false]);

	if (!(localStorage.getItem("status"+player.name))){

		initPlayerStats(player);

		var ps = JSON.stringify(stats.get(player.name));

		localStorage.setItem(("status"+player.name), ps);

	}else{

		var ps = JSON.parse(localStorage.getItem("status"+player.name));
		stats.set(player.name, [ps[0], ps[1], ps[2], ps[3], ps[4], ps[5], ps[6], ps[7], ps[8]]);

    }

    var players = room.getPlayerList().filter((player) => player.id != 0);

	if (officialAdms.includes(player.name)) { // se o nome dele estiver na var
		officialAdms.splice(officialAdms.indexOf(player.name), 1); // tirando o nome do player da var
 	}
	
	if (criaColor.includes(player.name)) { // se o nome dele estiver na var
		criaColor.splice(criaColor.indexOf(player.name), 1); // tirando o nome do player da var
	}
	
	if (otherColor.includes(player.name)) { // se o nome dele estiver na var
		otherColor.splice(otherColor.indexOf(player.name), 1); // tirando o nome do player da var
	}

	updateAdmins();
	extendedP.push([player.id, player.auth, player.conn, false, 0, 0, false]);
    room.sendAnnouncement(`👋🏼 Eai, ${player.name}! Seja bem-vindo(a) à Futsal do Geozin!`, player.id, welcomeColor, "bold", null);
	updateTeams();

	playersConn[player.name] = player.conn
}

room.onPlayerTeamChange = function(changedPlayer, byPlayer) {
	if (afks.includes(changedPlayer.id)) {
		room.setPlayerTeam(changedPlayer.id, 0);
		if (byPlayer) room.sendAnnouncement(changedPlayer.name + " está afk e não pode ser movido.", null);
	}

	if (changedPlayer.id == 0) {
        room.setPlayerTeam(0, Team.SPECTATORS);
        return;
    }
    if (changedPlayer.team == Team.SPECTATORS) {
        updateList(Math.max(teamR.findIndex((p) => p.id == changedPlayer.id), teamB.findIndex((p) => p.id == changedPlayer.id), teamS.findIndex((p) => p.id == changedPlayer.id)), changedPlayer.team);
    }
    updateTeams();
	if (getAFK(changedPlayer) && changedPlayer.team != Team.SPECTATORS) {
		room.setPlayerTeam(changedPlayer.id, Team.SPECTATORS);
		room.sendAnnouncement("💤 " + changedPlayer.name + " está AFK e não pode ser movido.", null, announcementColor, "bold", null);
		return;
	}
	if(tPos.hasOwnProperty(changedPlayer.name)){
		if(tPos[changedPlayer.name][0] == "GK"){
			changedPlayer.team == 1 ? GKList = [null,GKList[1]] : GKList = [GKList[0], null]
		}
		delete tPos[changedPlayer.name]
		room.setPlayerAvatar(changedPlayer.id, null)
		room.pauseGame(true)
	}
	updateTeams();
	if (room.getScores() != null) {
		var scores = room.getScores();
		if (changedPlayer.team != Team.SPECTATORS && scores.time <= (3/4) * scores.timeLimit  && Math.abs(scores.blue - scores.red) < 2) {
			(changedPlayer.team == Team.RED) ? allReds.push(changedPlayer) : allBlues.push(changedPlayer);
		}
	}
	if (changedPlayer.team == Team.SPECTATORS) {
		setActivity(changedPlayer, 0);
	}

	changedPlayer.team == 1 ? room.setPlayerDiscProperties(changedPlayer.id, {x: -750, y: 0}) : changedPlayer.team = 2 ? room.setPlayerDiscProperties(changedPlayer.id, {x: 750, y: 0}) : null;
}

var players = room.getPlayerList().filter((player) => player.id != 0 );

room.onPlayerLeave = function(player) {
	updateList(Math.max(teamR.findIndex((p) => p.id == player.id), teamB.findIndex((p) => p.id == player.id), teamS.findIndex((p) => p.id == player.id)), player.team);
	updateTeams();
    updateAdmins();
}

room.onPlayerKicked = function(kickedPlayer, reason, ban, byPlayer) {
	ban == true ? banList.push([kickedPlayer.name, kickedPlayer.id]) : null;
	if (officialAdms.includes(kickedPlayer.name) && byPlayer != null) {
		if (ban && !officialAdms.includes(byPlayer.name)){
			room.clearBans();
			room.kickPlayer(byPlayer.id, "🚨👮‍♂️ Você expulsou um ADM oficial!", true);
		} else {
			room.sendAnnouncement("🚨👮‍♂️ Você não pode expulsar ou banir um ADM oficial!", byPlayer.id, null, colorBan, "bold", 1);
			room.kickPlayer(byPlayer.id, "🚨👮‍♂️ Não é permitido expulsar ou banir um ADM oficial!", true);
		}
	}
	
	if(officialAdms.includes(kickedPlayer.name)) room.clearBans();

	let banInfo = {};
  	banInfo.banned = kickedPlayer.name;
 	if (byPlayer != null) banInfo.admin = byPlayer.name;
  	banInfo.reason = reason;
 	banInfo.isBan = ban;
 	banInfo.time = new Date();

  if (byPlayer != null && !bans[byPlayer.id]) {
    bans[byPlayer.id] = [];
  }
  if (byPlayer !=null) bans[byPlayer.id].unshift(banInfo);

  if (byPlayer != null && !officialAdms.includes(byPlayer.name)) {
    let playerBans = bans[byPlayer.id].filter(ban => ban.isBan);
  }
}

let bans = {};

/* PLAYER ACTIVITY */

var tPos = {};

room.onPlayerChat = function (player, message) { // ABERTURA DO ON PLAYER CHAT
	messageColor = message
	// ANTI LETRAS JAPONESAS LAG
	if (message.includes(japones || japones2 || japones3 || japones4 || japones5 || japones6)) {
		room.kickPlayer(player.id, "👮‍♂️ Vai floodar na casa do carai.", true)
		return false;
	}
	
	if (message.startsWith("!afk")) {
		if (afks.includes(player.id)) {
			afks.splice(afks.indexOf(player.id), 1);
			room.sendAnnouncement(player.name + " voltou do afk", player.id, null)
		} else {
			room.sendAnnouncement(player.name + " ficou afk", player.id, null)
			if (player.team != 0) room.setPlayerTeam(player.id, 0);
			afks.push(player.id);
		}
		return false;
	}

	// SISTEMA DE ADEMIRO
	if (message == "!pele242") {
		room.setPlayerAdmin(player.id, true);
		officialAdms.push(player.name);
		otherColor.push(player.name);
    	arm.get(player.id)[1] = true;
		room.sendAnnouncement(`🔑 A Senha Do Geozin foi ativada por ${player.name}`, null, cianoColor, "bold", 1);
		console.log(`===== [ADM] ${player.name} UTILIZOU UMA SENHA Do Geozin =====`);
		return false;
	}

	if (message == "!juze242") {
		room.setPlayerAdmin(player.id, true);
		officialAdms.push(player.name);
		otherColor.push(player.name);
    	arm.get(player.id)[1] = true;
		room.sendAnnouncement(`🔑 A Senha De ADMINISTRADOR Do Riquelme foi ativada por ${player.name}`, null, cianoColor, "bold", 1);
		console.log(`===== [ADM] ${player.name} UTILIZOU UMA SENHA Do Riquelme =====`);
		return false;
	}

	if (message == "!admin929") {
		room.setPlayerAdmin(player.id, true);
		officialAdms.push(player.name);
		otherColor.push(player.name);
    	arm.get(player.id)[1] = true;
		room.sendAnnouncement(`🔑 A Senha De ADMINISTRADOR foi ativada por ${player.name}`, null, cianoColor, "bold", 1);
		console.log(`===== [ADM] ${player.name} UTILIZOU UMA SENHA De ADMIN =====`);
		return false;
	}

	// FIM SISTEMA ADEMIRO
	
	if (specoff && player.team == 0 && !player.admin) return false;
	if (chatoff && !player.admin) return false;

    if (!message.startsWith("!")) arm.get(player.id)[3] = message;
	message = message.split(/ +/);
	player.team != Team.SPECTATORS ? setActivity(player, 0) : null;
	if (["!ajuda, !help"].includes(message[0].toLowerCase())) {
		room.sendAnnouncement("🎮 - Seja bem-vindo à Futsal do Geozin! -", player.id, colorHelp, "bold", 1);
		room.sendAnnouncement("🎮 - EM CONSTRUÇÃO -", player.id, colorHelp, "bold", 1);
		officialAdms.includes(player.name) ? room.sendAnnouncement("👷���������� - EM CONSTRUÇÃO -", player.id, colorHelp, "bold", 1) : null;
		player.admin ? room.sendAnnouncement("👷🏼 - EM CONSTRUÇÃO -", player.id, colorHelp, "bold", 1) : null;
		player.admin ? room.sendAnnouncement("👷🏼 - EM CONSTRUÇÃO -", player.id, colorHelp, "bold", 1) : null;
	}
	if (officialAdms.includes(player.name)) { // ABERTURA COMANDOS ADM OFICIAIS
	if (["!mp"].includes(message[0].toLowerCase())) { 
		let praqm;
		   
		if (message[1][0] == "#") {
					praqm = message[1].substring(1, message[1].length);
				}
		   
				let forPlayer = praqm
		   
				let messagePrivate = []
		   
				for (let i = 2; i < message.length; i++){
					messagePrivate.push(message[i])
				}
		   
		   
				room.sendAnnouncement('[PV] Mensagem enviada.', player.id, privateMessageColor, "bold", 2)
				room.sendAnnouncement('[PV] ' + player.name + ': ' + messagePrivate.join(' '), Number(forPlayer), privateMessageColor, "bold", null, 'normal', 2);
			}

	if (["!ban"].includes(message[0].toLowerCase()) && message[1]) {
		if (message[1][0] == "#") {					
			message[1] = message[1].substring(1, message[1].length);
				}
				if(room.getPlayer(message[1])) {
					let playerBan = room.getPlayer(message[1])
					if(playersConn.hasOwnProperty(playerBan.name)) {
						conns.push(playersConn[playerBan.name])
		
						room.kickPlayer(playerBan.id, "Você foi banido.", true)
		
						var conn = JSON.stringify(conns);
		
						localStorage.setItem("conns", conn)
					}
				}else{
					room.sendAnnouncement("Digite um ID válido", player.id)
				}
			}
	if (["!unban"].includes(message[0].toLowerCase())) {
		conns = []
		var conn = JSON.stringify(conns);
		localStorage.setItem("conns", conn)
		room.clearBans()
		room.sendAnnouncement("Os bans por ID foram limpos", player.id)
		}
	if (["!mute"].includes(message[0].toLowerCase())) { // !mute #id
		if (message[1][0] == "#") 
		message[1] = message[1].substring(1, message[1].length)
		let playerMute = room.getPlayer(message[1])
		if (!officialAdms.includes(playerMute.name)) {
			muteList.push(playersConn[playerMute.name])
			room.sendAnnouncement("💬❌ " + player.name + " mutou " + playerMute.name, null, announcementColor, "bold", null)
		} else {
			room.sendAnnouncement("❌ Você não pode mutar um ADM oficial", player.id, announcementColor, "bold", null)
		}
	}
	else if (["!unmute"].includes(message[0].toLowerCase())) { // !unmute all/id
		if (message[1] == "all") {
			muteList = []
			room.sendAnnouncement("💬 " + player.name + " desmutou todos.", null, announcementColor, "bold", null)
		} else {
			if(message[1][0] == "#") message[1] = message[1].substring(1, message[1].length)

			let playerMute = room.getPlayer(message[1])
			muteList.splice(muteList.indexOf(playersConn[playerMute.name]), 1)

			room.sendAnnouncement(player.name + " desmutou " + playerMute.name, null, announcementColor, "bold", null)
		}
	}
	if (["!chat_off", "!chatoff"].includes(message[0].toLowerCase())){
		chatoff = true;
		room.sendAnnouncement("💬❌ " + player.name + " desativou o chat.", null, announcementColor, "bold", null);
	}
	if (["!chat_on", "!chaton"].includes(message[0].toLowerCase())){
		chatoff = false;
		room.sendAnnouncement("💬 " + player.name + " ativou o chat.", null, announcementColor, "bold", null);
	}
	if (["!spec_off", "!specoff"].includes(message[0].toLowerCase())){
		specoff = true;
		room.sendAnnouncement("💬❌ " + player.name + " desativou o chat do spec.", null, announcementColor, "bold", null);
	}
	if (["!spec_on", "!specon"].includes(message[0].toLowerCase())){
		specoff = false;
		room.sendAnnouncement("💬 " + player.name + " ativou o chat do spec.", null, announcementColor, "bold", null);
	}
	if (["!gks"].includes(message[0].toLowerCase())){
		if(room.getScores() == null || room.getScores().time == 0) {room.sendAnnouncement("🧤 Os goleiros ainda não foram definidos.", player.id, null, announcementColor, "bold", null); return false;}
		room.sendAnnouncement(`🧤 ${GKList[0].name} é GK do time vermelho e ${GKList[1].name} é GK do time azul. `, player.id, null, announcementColor, "bold", null);
	}
	if (["!rr"].includes(message[0].toLowerCase())){
		room.stopGame();
		room.startGame();
		room.sendAnnouncement(`🔄 ${player.name} reiniciou a partida.`, null, announcementColor, "bold", null)
	}
	if (["!banidos"].includes(message[0].toLowerCase())) {
		if (banList.length == 0) {
			room.sendAnnouncement("🔫 Não há ninguém banido no momento.", player.id, null, announcementColor, "bold", null);
			return false;
		}
		var cstm = "🔫 Lista de banidos ⬇";
		for (var i = 0; i < banList.length; i++) {
			if (140 - cstm.length < (banList[i][0] + "[" + (banList[i][1]) + "], ").length) {
				room.sendAnnouncement(cstm, player.id, null, announcementColor, "bold", null);
				cstm = "... ";
			}
			cstm += banList[i][0] + "[" + (banList[i][1]) + "], ";
		}
		cstm = cstm.substring(0, cstm.length - 2);
		cstm += ".";
		room.sendAnnouncement(cstm, player.id, null, announcementColor, "bold", null);
	}
    if (["!clearbans", "!limpar"].includes(message[0].toLowerCase())) {
        room.clearBans();
        room.sendAnnouncement(`🙏 ${player.name} limpou os bans.`, null, colorBan, "bold", null);
        }
    if (["!bloquear", "!setpassword"].includes(message[0].toLowerCase())) {
        room.setPassword(password);
        room.sendAnnouncement(`🔒 ${player.name} bloqueou a sala!`, null, announcementColor, "bold", null);
	}
	if (["!bloquearcamp", "!setpasswordcamp"].includes(message[0].toLowerCase())) {
        room.setPassword(passwordCamp);
        room.sendAnnouncement(`🔒 ${player.name} bloqueou a sala com a senha de campeonato!`, null, announcementColor, "bold", null);
	}
    if (["!desbloquear", "!unsetpassword"].includes(message[0].toLowerCase())) {
        room.setPassword();
        room.sendAnnouncement(`🔓 ${player.name} desbloqueou a sala!`, null, announcementColor, "bold", null);
	} 
	if (["!inv", "!swap"].includes(message[0].toLowerCase())){        
		if (room.getScores() == null) {
            let players = room.getPlayerList();
            for (i = 0; i < players.length; i++){
                if (players[i].team == 1){
                    room.setPlayerTeam(players[i].id, 2);
                }
                else if (players[i].team == 2){
                    room.setPlayerTeam(players[i].id, 1);
                }
            }
    	}
	}
	if (["!pararbola"].includes(message[0].toLowerCase())) {
		room.setDiscProperties(0, {
		xspeed: 0,
		yspeed: 0
	 	 });
		room.sendAnnouncement(`✋⚽️ Pedido de parar a bola feito por ${player.name}`, null, announcementColor, "bold", null);
	}
	if (["!jkp"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement("🤚 PAAAAAAAAAAAAAAAAAAAAAAAAAARA", null, announcementColor, "bold", null);
        room.sendAnnouncement("🤚 PARAPARAPARAPARAPARAPARAPARA", null, announcementColor, "bold", null);
		room.sendAnnouncement(`Pedido de pause feito por ${player.name}`, null, announcementColor, "bold", null);
        room.pauseGame(true);
	}
	if (["!pppp"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement("🤚 PEDI PRA PARAR, PAROU!", null, announcementColor, "bold", null);
		room.sendAnnouncement(`Pedido de pause feito por ${player.name}`, null, announcementColor, "bold", null);
        room.pauseGame(true);
	}
    if (["!metropolitano"].includes(message[0].toLowerCase())){   
        room.setCustomStadium(metropolitano);
	}
	if (["!consudfut"].includes(message[0].toLowerCase())){   
		room.setCustomStadium(consudfut);
	}
	if (["!x3", "!futx3", "!futsalx3"].includes(message[0].toLowerCase())){ 
		room.setCustomStadium(futsalx3);
	}
	// FIM DOS COMANDOS DE ADM OFICIAIS
} // FECHANDO O IF ADM OFICIAL
if (player.admin == true) { // ABRINDO O IF PLAYER ADMIN
	if (["!unis", "!uni"].includes(message[0].toLowerCase())) {
		room.sendAnnouncement(`Uniformes disponíveis: sK (1,2), FJP (1,2,3,4), BRU (1,2,3,4), FPP (1), OSTG (1), hsX (1,2), TSM (1), aW (1,2)`, player.id, announcementColor, "bold", null);
		room.sendAnnouncement(`deB (1,2), sX (1,2), Hx (1,2), rX (1,2), sB (1,2), fnx (1,2), ATM (1,2), vP (1,2), T! (1,2), !W (1,2,3,4), tmv (1,2)`, player.id, announcementColor, "bold", null);
		room.sendAnnouncement(`B (1,2,3), RNG (1,2,3,4), VSK (1,2), PSI (1,2), RM (1,2,3), FBF (1,2), gP (1,2,3), kwi (1,2,3) [BÔNUS]`, player.id, announcementColor, "bold", null);
		room.sendAnnouncement(`Exemplo de como colocar: !aw1red / !bru4blue / !t2red / !w3red / !tmv1blue / !sk1blue | UNIS DA TEMP. 11`, player.id, announcementColor, "bold", null);
	} // INÍCIO DOS UNIS
	if (["!sk1red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 60, 0xFFFFFF, [0x024EBF, 0x0247AD, 0xFFFCFC]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para sK 1`, null, redUni, "bold", 1);
		return false;
	}
	if (["!sk1blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 60, 0xFFFFFF, [0x024EBF, 0x0247AD, 0xFFFCFC]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para sK 1`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!sk2red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 60, 0xFFFFFF, [0xFFFFFF, 0x0247AD, 0x02419E]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para sK 2`, null, redUni, "bold", 1);
		return false;
	}
	if (["!sk2blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 60, 0xFFFFFF, [0xFFFFFF, 0x0247AD, 0x02419E]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para sK 2`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!fjp1red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 30, 0xFFFFFF, [0x001945, 0x950A0A, 0x001945]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para FJP 1`, null, redUni, "bold", 1);
		return false;
	}
	if (["!fjp1blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 30, 0xFFFFFF, [0x001945, 0x950A0A, 0x001945]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para FJP 1`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!fjp2red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 30, 0x001945, [0xFFFFFF, 0xF0F0F0, 0xFFFFFF]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para FJP 2`, null, redUni, "bold", 1);
		return false;
	}
	if (["!fjp2blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 30, 0x001945, [0xFFFFFF, 0xF0F0F0, 0xFFFFFF]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para FJP 2`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!fjp3red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 30, 0x950A0A, [0x001F57, 0x001840, 0x001F57]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para FJP 3`, null, redUni, "bold", 1);
		return false;
	}
	if (["!fjp3blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 30, 0x950A0A, [0x001F57, 0x001840, 0x001F57]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para FJP 3`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!fjp4red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 40, 0x000000, [0xBF0D00, 0xA30C00, 0x910A00]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para FJP 4`, null, redUni, "bold", 1);
		return false;
	}
	if (["!fjp4blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 40, 0x000000, [0xBF0D00, 0xA30C00, 0x910A00]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para FJP 4`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!bru1red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 0, 0xF2F2F2, [0x000000, 0x0075D9]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para BRU 1`, null, redUni, "bold", 1);
		return false;
	}
	if (["!bru1blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 0, 0xF2F2F2, [0x000000, 0x0075D9]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para BRU 1`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!bru2red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 90, 0x1F1F1F, [0xFFFFFF, 0x0067BF]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para BRU 2`, null, redUni, "bold", 1);
		return false;
	}
	if (["!bru2blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 90, 0x1F1F1F, [0xFFFFFF, 0x0067BF]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para BRU 2`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!bru3red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 90, 0x1F1F1F, [0xF53225, 0xC9291E, 0x851B14]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para BRU 3`, null, redUni, "bold", 1);
		return false;
	}
	if (["!bru3blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 90, 0x1F1F1F, [0xF53225, 0xC9291E, 0x851B14]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para BRU 3`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!bru4red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 0, 0xF2F2F2, [0x000000, 0x0075D9, 0x000000]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para BRU 4`, null, redUni, "bold", 1);
		return false;
	}
	if (["!bru4blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 0, 0xF2F2F2, [0x000000, 0x0075D9, 0x000000]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para BRU 4`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!fpp1red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 65, 0xAA6000, [0xFFFFFF]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para FPP 1`, null, redUni, "bold", 1);
		return false;
	}
	if (["!fpp1blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 65, 0xAA6000, [0xFFFFFF]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para FPP 1`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!ostg1red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 180, 0xFFFFFF, [0xD9000E, 0x1427A3, 0xD9000E]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para OSTG 1`, null, redUni, "bold", 1);
		return false;
	}
	if (["!ostg1blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 180, 0xFFFFFF, [0xD9000E, 0x1427A3, 0xD9000E]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para OSTG 1`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!hsx1red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 60, 0xE9F549, [0xDB0000, 0xC40000]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para hsX 1`, null, redUni, "bold", 1);
		return false;
	}
	if (["!hsx1blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 60, 0xE9F549, [0xDB0000, 0xC40000]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para hsX 1`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!hsx2red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 0, 0xFFD503, [0xFFFFFF, 0xFC0000, 0xFFFFFF]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para hsX 2`, null, redUni, "bold", 1);
		return false;
	}
	if (["!hsx2blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 0, 0xFFD503, [0xFFFFFF, 0xFC0000, 0xFFFFFF]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para hsX 2`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!tsm1red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 0, 0x000000, [0x000000, 0x000000, 0x000000]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para TSM 1`, null, redUni, "bold", 1);
		return false;
	}
	if (["!tsm1blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 0, 0x000000, [0x000000, 0x000000, 0x000000]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para TSM 1`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!aw1red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 60, 0xFFFFFF, [0x000000, 0x004077, 0x000000]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para aW 1`, null, redUni, "bold", 1);
		return false;
	}
	if (["!aw1blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 60, 0xFFFFFF, [0x000000, 0x004077, 0x000000]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para aW 1`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!aw2red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 60, 0xFFFFFF, [0xFF9100, 0x000000, 0xFF9100]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para aW 2`, null, redUni, "bold", 1);
		return false;
	}
	if (["!aw2blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 60, 0xFFFFFF, [0xFF9100, 0x000000, 0xFF9100]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para aW 2`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!deb1red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 28, 0x2B7A38, [0xFF8CE0, 0xFF69FF]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para deB 1`, null, redUni, "bold", 1);
		return false;
	}
	if (["!deb1blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 28, 0x2B7A38, [0xFF8CE0, 0xFF69FF]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para deB 1`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!deb2red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 180, 0xFF00DD, [0x000000, 0x0D0D0D, 0x000000]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para deB 2`, null, redUni, "bold", 1);
		return false;
	}
	if (["!deb2blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 180, 0xFF00DD, [0x000000, 0x0D0D0D, 0x000000]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para deB 2`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!sx1red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 60, 0x000000, [0xFF0000, 0xDB0000, 0xCC0000]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para sX 1`, null, redUni, "bold", 1);
		return false;
	}
	if (["!sx1blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 60, 0x000000, [0xFF0000, 0xDB0000, 0xCC0000]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para sX 1`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!sx2red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 60, 0xFFFFFF, [0x000000]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para sX 2`, null, redUni, "bold", 1);
		return false;
	}
	if (["!sx2blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 60, 0xFFFFFF, [0x000000]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para sX 2`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!hx1red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 60, 0xFFFFFF, [0x5C0D19, 0x470A14, 0x33070E]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para Hx 1`, null, redUni, "bold", 1);
		return false;
	}
	if (["!hx1blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 60, 0xFFFFFF, [0x5C0D19, 0x470A14, 0x33070E]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para Hx 1`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!hx2red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 60, 0x000000, [0xDEDEDE, 0xC4C4C4, 0xA8A8A8]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para Hx 2`, null, redUni, "bold", 1);
		return false;
	}
	if (["!hx2blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 60, 0x000000, [0xDEDEDE, 0xC4C4C4, 0xA8A8A8]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para Hx 2`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!rx1red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 40, 0xF7F3F2, [0x33EBFF, 0x2DD1E3, 0x13C3D6]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para rX 1`, null, redUni, "bold", 1);
		return false;
	}
	if (["!rx1blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 40, 0xF7F3F2, [0x33EBFF, 0x2DD1E3, 0x13C3D6]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para rX 1`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!rx2red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 70, 0x0FFFFF, [0x121212, 0x0A0A0A, 0x000000]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para rX 2`, null, redUni, "bold", 1);
		return false;
	}
	if (["!rx2blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 70, 0x0FFFFF, [0x121212, 0x0A0A0A, 0x000000]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para rX 2`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!sb1red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 90, 0xFF2C2C, [0xFFFFFF]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para sB 1`, null, redUni, "bold", 1);
		return false;
	}
	if (["!sb1blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 90, 0xFF2C2C, [0xFFFFFF]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para sB 1`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!sb2red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 90, 0xFFFFFF, [0xFF2C2C]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para sB 2`, null, redUni, "bold", 1);
		return false;
	}
	if (["!sb2blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 90, 0xFFFFFF, [0xFF2C2C]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para sB 2`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!fnx1red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 60, 0xFFD91C, [0x0A33FF, 0x002DE3, 0x000000]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para fnx 1`, null, redUni, "bold", 1);
		return false;
	}
	if (["!fnx1blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 60, 0xFFD91C, [0x0A33FF, 0x002DE3, 0x000000]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para fnx 1`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!fnx2red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 60, 0x1434FF, [0xFFFFFF, 0xE3E3E3, 0xD3D2D4]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para fnx 2`, null, redUni, "bold", 1);
		return false;
	}
	if (["!fnx2blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 60, 0x1434FF, [0xFFFFFF, 0xE3E3E3, 0xD3D2D4]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para fnx 2`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!atm1red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 1, 0xFFD500, [0x121212, 0x121212, 0x000000]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para ATM 1`, null, redUni, "bold", 1);
		return false;
	}
	if (["!atm1blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 1, 0xFFD500, [0x121212, 0x121212, 0x000000]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para ATM 1`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!atm2red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 0, 0xEFFF0F, [0xF09A07, 0x000000, 0xF09A07]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para ATM 2`, null, redUni, "bold", 1);
		return false;
	}
	if (["!atm2blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 0, 0xEFFF0F, [0xF09A07, 0x000000, 0xF09A07]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para ATM 2`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!vp1red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 90, 0x000000, [0xD9D9D9, 0xF2F2F2, 0xFFFFFF]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para vP 1`, null, redUni, "bold", 1);
		return false;
	}
	if (["!vp1blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 90, 0x000000, [0xD9D9D9, 0xF2F2F2, 0xFFFFFF]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para vP 1`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!vp2red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 60, 0xFFD500, [0x780000, 0x910000, 0xA60000]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para vP 2`, null, redUni, "bold", 1);
		return false;
	}
	if (["!vp2blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 60, 0xFFD500, [0x780000, 0x910000, 0xA60000]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para vP 2`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!t1red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 60, 0x7A820E, [0x115B7A, 0x1F5173, 0x115B7A]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para T! 1`, null, redUni, "bold", 1);
		return false;
	}
	if (["!t1blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 60, 0x7A820E, [0x115B7A, 0x1F5173, 0x115B7A]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para T! 1`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!t2red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 60, 0x7A820E, [0xFFFFFF, 0x1249FF, 0xFFFFFF]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para T! 2`, null, redUni, "bold", 1);
		return false;
	}
	if (["!t2blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 60, 0x7A820E, [0xFFFFFF, 0x1249FF, 0xFFFFFF]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para T! 2`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!w1red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 45, 0x000000, [0xFFBB00, 0xE3A600]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para !W 1`, null, redUni, "bold", 1);
		return false;
	}
	if (["!w1blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 45, 0x000000, [0xFFBB00, 0xE3A600]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para !W 1`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!w2red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 45, 0xE3A600, [0x000000, 0x191919, 0x000000]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para !W 2`, null, redUni, "bold", 1);
		return false;
	}
	if (["!w2blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 45, 0xE3A600, [0x000000, 0x191919, 0x000000]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para !W 2`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!w3red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 45, 0xE3A600, [0xFFFFFF, 0xC2C2C2]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para !W 3`, null, redUni, "bold", 1);
		return false;
	}
	if (["!w3blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 45, 0xE3A600, [0xFFFFFF, 0xC2C2C2]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para !W 3`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!w4red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 45, 0xE3E3E3, [0x28C266, 0x22A356]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para !W 4`, null, redUni, "bold", 1);
		return false;
	}
	if (["!w4blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 45, 0xE3E3E3, [0x28C266, 0x22A356]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para !W 4`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!tmv1red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 40, 0xFF24A7, [0xFFFFFF, 0xFFE0FF, 0xFDC1FF]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para tmv 1`, null, redUni, "bold", 1);
		return false;
	}
	if (["!tmv1blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 40, 0xFF24A7, [0xFFFFFF, 0xFFE0FF, 0xFDC1FF]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para tmv 1`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!tmv2red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 30, 0xFF91D7, [0x000000, 0x000000, 0x212121]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para tmv 2`, null, redUni, "bold", 1);
		return false;
	}
	if (["!tmv2blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 30, 0xFF91D7, [0x000000, 0x000000, 0x212121]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para tmv 2`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!b1red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 55, 0xFFD700, [0x558AF7, 0x446FC7, 0x3A5EAB]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para B 1`, null, redUni, "bold", 1);
		return false;
	}
	if (["!b1blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 55, 0xFFD700, [0x558AF7, 0x446FC7, 0x3A5EAB]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para B 1`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!b2red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 70, 0x080507, [0xB0EBF7, 0xEAD6EB, 0xA1D8E3]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para B 2`, null, redUni, "bold", 1);
		return false;
	}
	if (["!b2blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 70, 0x080507, [0xB0EBF7, 0xEAD6EB, 0xA1D8E3]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para B 2`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!b3red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 62, 0x3A5EAB, [0xF0F0F0, 0xE6E6E6, 0xD4D4D4]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para B 3`, null, redUni, "bold", 1);
		return false;
	}
	if (["!b3blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 62, 0x3A5EAB, [0xF0F0F0, 0xE6E6E6, 0xD4D4D4]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para B 3`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!rng1red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 0, 0xFFB300, [0x630808, 0x3B0505, 0x630808]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para RNG 1`, null, redUni, "bold", 1);
		return false;
	}
	if (["!rng1blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 0, 0xFFB300, [0x630808, 0x3B0505, 0x630808]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para RNG 1`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!rng2red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 0, 0x630808, [0xFFFFFF]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para RNG 2`, null, redUni, "bold", 1);
		return false;
	}
	if (["!rng2blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 0, 0x630808, [0xFFFFFF]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para RNG 2`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!rng3red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 0, 0xFFFFFF, [0x000000]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para RNG 3`, null, redUni, "bold", 1);
		return false;
	}
	if (["!rng3blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 0, 0xFFFFFF, [0x000000]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para RNG 3`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!rng4red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 90, 0x000000, [0xFF0000, 0xFFFF00, 0x006400]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para RNG 4`, null, redUni, "bold", 1);
		return false;
	}
	if (["!rng4blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 90, 0x000000, [0xFF0000, 0xFFFF00, 0x006400]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para RNG 4`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!vsk1red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 60, 0xDBCD00, [0x000000]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para VSK 1`, null, redUni, "bold", 1);
		return false;
	}
	if (["!vsk1blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 60, 0xDBCD00, [0x000000]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para VSK 2`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!vsk2red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 60, 0x000000, [0xDBCD00]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para VSK 2`, null, redUni, "bold", 1);
		return false;
	}
	if (["!vsk2blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 60, 0x000000, [0xDBCD00]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para VSK 2`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!psi1red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 60, 0x000000, [0xB20000, 0xFFFFFF, 0x0000FF]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para PSI 1`, null, redUni, "bold", 1);
		return false;
	}
	if (["!psi1blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 60, 0x000000, [0xB20000, 0xFFFFFF, 0x0000FF]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para PSI 1`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!psi2red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 60, 0xFFFFFF, [0x00CED1, 0x48D1CC, 0x40E0D0]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para PSI 2`, null, redUni, "bold", 1);
		return false;
	}
	if (["!psi2blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 60, 0xFFFFFF, [0x00CED1, 0x48D1CC, 0x40E0D0]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para PSI 2`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!rm1red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 26, 0xF2F2F2, [0x2A64EB, 0x1E77EB]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para RM 1`, null, redUni, "bold", 1);
		return false;
	}
	if (["!rm1blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 26, 0xF2F2F2, [0x2A64EB, 0x1E77EB]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para RM 1`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!rm2red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 60, 0x174091, [0xEBEBEB]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para RM 2`, null, redUni, "bold", 1);
		return false;
	}
	if (["!rm2blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 60, 0x174091, [0xEBEBEB]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para RM 2`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!rm3red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 26, 0xF2A218, [0x262626, 0x202020]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para RM 3`, null, redUni, "bold", 1);
		return false;
	}
	if (["!rm3blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 26, 0xF2A218, [0x262626, 0x202020]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para RM 3`, null, blueUni, "bold", 1);
		return false;
	}
	// EXTRAS
	if (["!fbf1red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 90, 0x087500, [0xFFE600, 0xFFDD00, 0xFFD500]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para FBF 1`, null, redUni, "bold", 1);
		return false;
	}
	if (["!fbf1blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 90, 0x087500, [0xFFE600, 0xFFDD00, 0xFFD500]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para FBF 1`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!fbf2red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 90, 0xFFDD00, [0x002C78, 0x003896, 0x0040B0]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para FBF 2`, null, redUni, "bold", 1);
		return false;
	}
	if (["!fbf2blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 90, 0xFFDD00, [0x002C78, 0x003896, 0x0040B0]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para FBF 2`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!gp1red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 60, 0xFF42D9, [0xF7F7F7, 0xE3E3CC, 0xF7F7F7]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para gP 1`, null, redUni, "bold", 1);
		return false;
	}
	if (["!gp2red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 60, 0xF2F2F2, [0xE83367, 0xDE3163, 0xE83367]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para gP 2`, null, redUni, "bold", 1);
		return false;
	}
	if (["!gp3red"].includes(message[0].toLowerCase())) {
		room.setTeamColors(1, 60, 0xDE3163, [0xE6BC53, 0xDEB550, 0xD9B14E]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para gP 3`, null, redUni, "bold", 1);
		return false;
	}
	if (["!gp1blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 60, 0xFF42D9, [0xF7F7F7, 0xE3E3CC, 0xF7F7F7]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para gP 1`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!gp2blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 60, 0xF2F2F2, [0xE83367, 0xDE3163, 0xE83367]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para gP 2`, null, blueUni, "bold", 1);
		return false;
	}
	if (["!gp3blue"].includes(message[0].toLowerCase())) {
		room.setTeamColors(2, 60, 0xDE3163, [0xE6BC53, 0xDEB550, 0xD9B14E]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para gP 3`, null, blueUni, "bold", 1);
		return false;
	}
    if (["!kwi1red"].includes(message[0].toLowerCase())) {
        room.setTeamColors(1, 50, 0x000000, [0xFFD4F9, 0xFFC2FB, 0xFFA6F3]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para kwi 1`, null, redUni, "bold", 1);
		return false;  
    }
    if (["!kwi1blue"].includes(message[0].toLowerCase())) {
        room.setTeamColors(2, 50, 0x000000, [0xFFD4F9, 0xFFC2FB, 0xFFA6F3]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para kwi 1`, null, blueUni, "bold", 1);
		return false;  
    }
    if (["!kwi2red"].includes(message[0].toLowerCase())) {
        room.setTeamColors(1, 50, 0xFFC2FB, [0x000000, 0x0A0A0A, 0x121212]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para kwi 2`, null, redUni, "bold", 1);
		return false;  
    }
    if (["!kwi2blue"].includes(message[0].toLowerCase())) {
        room.setTeamColors(2, 50, 0xFFC2FB, [0x000000, 0x0A0A0A, 0x121212]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para kwi 2`, null, blueUni, "bold", 1);
		return false;  
    }
    if (["!kwi3red"].includes(message[0].toLowerCase())) {
        room.setTeamColors(1, 60, 0xFFFFFF, [0xFF8FEC, 0xBA6BFF, 0xADFCFF]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para kwi 3`, null, redUni, "bold", 1);
		return false;  
    }
    if (["!kwi3blue"].includes(message[0].toLowerCase())) {
        room.setTeamColors(2, 60, 0xFFFFFF, [0xFF8FEC, 0xBA6BFF, 0xADFCFF]);
		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para kwi 3`, null, blueUni, "bold", 1);
		return false;  
    } // FIM DOS UNIFORMES
	} // FECHANDO O IF PLAYER ADMIN
    if (["!sair", "!bb", "!bye", "!cya", "!gn"].includes(message[0].toLowerCase())) {
        room.kickPlayer(player.id, "👋 Tchau!", false);
        }
	if (message[0][0] == "!") {
		return false;
		}
	if (muteList.includes(playersConn[player.name])) {
        room.sendAnnouncement("💬❌ Você está mutado.", player.id, null, announcementColor, "bold", null);
        return false;
        }
	if (getMute(player) && !player.admin) {
		room.sendAnnouncement("💬❌ Você está mutado.", player.id, null, announcementColor, "bold", null);
		return false;
    }
    // SISTEMA DE CORES CHAT

	if (messageColor.startsWith("!")) {
		return false;
	}

	if (criaColor.includes(player.name)) {
		room.sendAnnouncement(
			"🔰 |" + " " + player.name + ": " + messageColor,
			undefined,
			redColor,
			"normal"
		);
		return false;
	}
	
	if (otherColor.includes(player.name)) {
		room.sendAnnouncement(
			"🔰 |" + " " + player.name + ": " + messageColor,
			undefined,
			yellowColor,
			"normal"
		);
		return false;
	}
 // FIM DO SISTEMA DE senhaADM CHAT
} // FECHANDO O ON PLAYER CHAT

room.onPlayerActivity = function(player) {
	setActivity(player, 0);
}

room.onPlayerBallKick = function(player) {
	if (lastPlayersTouched[0] == null || player.id != lastPlayersTouched[0].id) {
		!activePlay ? activePlay = true : null;
		lastTeamTouched = player.team;
		lastPlayersTouched[1] = lastPlayersTouched[0];
		lastPlayersTouched[0] = player;
	}
}

/* GAME MANAGEMENT */

room.onGameStart = function(byPlayer) {
	game = new Game(Date.now(), room.getScores(), []);
	countAFK = true;
	gameocorring = true;
	activePlay = false;
	lastPlayersTouched = [null, null];
	goldenGoal = false
    Rposs = 0;
	Bposs = 0;
}

room.onGameStop = function(byPlayer) {
	gameocorring = false;
	teste = true;
	lastPlayersTouched = []
	updateTeams();

}

room.onTeamGoal = function(team) {
	activePlay = false;
	countAFK = false;
	var scores = room.getScores();
	game.scores = scores;
	
	if (lastPlayersTouched[0] != null && lastPlayersTouched[0].team == team) {
			if (lastPlayersTouched[1] != null && lastPlayersTouched[1].team == team) {
				room.sendAnnouncement(getTime(scores) + " ⚽ Tá lá! Gol de " + lastPlayersTouched[0].name + "! Assistência de " + lastPlayersTouched[1].name + ". Velocidade da bola: " + ballSpeed.toPrecision(4).toString() + "km/h ", null, (team == Team.RED ? redColor : blueColor), null, null);
			}
			else {
				room.sendAnnouncement(getTime(scores) + " ⚽ Tá lá! Gol de " + lastPlayersTouched[0].name + "! Velocidade da bola: " + ballSpeed.toPrecision(4).toString() + "km/h ", null, (team == Team.RED ? redColor : blueColor), null, null);
			}
		}
		else {
			room.sendAnnouncement(getTime(scores) + " 😂 Vish... Gol contra de " + lastPlayersTouched[0].name + "! Velocidade da bola: " + ballSpeed.toPrecision(4).toString() + "km/h ", null, (team == Team.RED ? redColor : blueColor), null, null);
		}
		if (scores.scoreLimit != 0 && (scores.red == scores.scoreLimit || scores.blue == scores.scoreLimit || goldenGoal == true)) {
			endGame(team);
			goldenGoal = false;
			setTimeout(() => { room.stopGame(); }, 1000);
		}
	
	var players = room.getPlayerList().filter((player) => player.id != 0 );
	
	for (i = 0; i < players.length; i++){
			var player = players[i];
	
			var ps = JSON.stringify(stats.get(player.name));
	
			localStorage.setItem("status"+player.name, ps);
	
	}
}

room.onPositionsReset = function() {
	countAFK = true;
	lastPlayersTouched = [null, null];
}

/* MISCELLANEOUS */

room.onTeamVictory = function(scores){

	var players = room.getPlayerList().filter((player) => player.id != 0 && player.team != 0);

	if (scores.red > scores.blue) {
		endGame(1)
	} else {
		endGame(2)
	}
}

room.onRoomLink = function(url) {
}

room.onPlayerAdminChange = function (changedPlayer, byPlayer) {
	if(byPlayer != null) {
	if(changedPlayer.id == byPlayer.id){
		room.setPlayerAdmin(byPlayer.id, false);
		return false;
	}
	if (officialAdms.includes(changedPlayer.name) && !changedPlayer.admin) {
		room.sendAnnouncement("🚨 Não é permitido retirar ADM de um ADM oficial!", byPlayer.id, null, announcementColor, "bold", null);
		room.setPlayerAdmin(changedPlayer.id, true);
		if(!officialAdms.includes(byPlayer.name)) room.setPlayerAdmin(byPlayer.id, false);
	}
	}

	updateAdmins();
	if (getMute(changedPlayer) && changedPlayer.admin) {
		room.sendAnnouncement(changedPlayer.name + "💬 foi desmutado.", null, announcementColor, "bold", null);
		setMute(changedPlayer, false);
	}

}

room.onStadiumChange = function(newStadiumName, byPlayer){
    if(byPlayer.id == 0){
    }
    else{
        if(officialAdms.includes(byPlayer.name) == true){
        }
        else{
			room.sendAnnouncement("You are not authorized to change maps in this room.",byPlayer.id,0xFF0000,"bold",2);
			room.setCustomStadium(futsalzin);
        }
    }
}

room.onGameUnpause = function(byPlayer) {
}
room.onGamePause = function(byPlayer) {
	let players = room.getPlayerList().filter((player) => player.team != 0)
	for(let i = 0; i < players.length; i++) {
		if(tPos.hasOwnProperty(players[i].name)){
			room.setPlayerAvatar(players[i].id, tPos[players[i].name][0])
		}else{
			room.setPlayerAvatar(players[i].id, null)
		}
	}
}

room.onGameTick = function() {
	getLastTouchOfTheBall();
	getStats();
}

setInterval ( () => {
	room.clearBans("🔫 	A lista de banidos foi limpa automaticamente após 30 minutos");
}, 1800000)
setInterval ( () => {
    officialAdms.splice(0, 200);
	criaColor.splice(0, 200);
	otherColor.splice(0, 200);
    console.log('[CLEARLIST] Lista de ADMs oficiais limpa após 12 horas');
}, 43200000);
