var s = '[description:"aoeu" uuid:"123sth"]';

var re = /\s*([^[:]+):\"([^"]+)"/g;
var m;
while (m = re.exec(s)) {
  console.log(m[1], m[2]);
}