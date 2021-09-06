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

  console.log(`events = \n:${JSON.stringify(events, null, 2)}`);


  for(let i = 1; i < events.length; i++) {
    console.log(`last = ${last}, events[i] = ${JSON.stringify(events[i])}`);
    if(events[i].ei < last) {
      continue;
    }
    ans.push(events[i]);
    last = events[i].ee;
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
    new Event(1, 4, '1'),
    new Event(3, 4, '2'),
    new Event(4, 7, '3'),
    new Event(2, 4, '4'),
    new Event(4, 5, '5'),
    new Event(5, 6, '6'),
    new Event(7, 8, '7'),
    new Event(2, 5, '8')
  ];
  
  const ans = solve(events);

  console.log(`ans = \n:${JSON.stringify(ans, null, 2)}`);

});
