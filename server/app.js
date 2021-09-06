const { constants } = require('buffer');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

class Event {
  constructor(ei, ee, name) {
    this.ei = ei;
    this.ee = ee;
    this.name = name;
  }
}

function compareEvent(a, b) {
  return a.ee - b.ee;
}

function sortEvent(events) {
  events.sort(compareEvent);
}

function solve(events) {

  sortEvent(events);
  
  const ans = [events[0]];
  let last = events[0].ee;

  for(let i = 1; i < events.lenght; i++) {
    if(ord.ei < last) continue;
    ans.push(ord[i]);
    last = ord[i].ee;
  }

  return ans;

}

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);

  const events = [
    new Event(13, 15, '1'),
    new Event(12, 15, '2'),
    new Event(14, 20, '3'),
    new Event(11, 17, '4'),
    new Event(11, 20, '5'),
  ];
  
  console.log("MEU ARRAY");
  console.log(events);
  
  var ans = [];
  ans = solve(events);
  console.log("RESPOSTA");
  console.log(ans);

});
