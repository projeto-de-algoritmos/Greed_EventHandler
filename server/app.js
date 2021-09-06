const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

var events = []

class Event {
  constructor(ei, ee, name) {
    this.ei = ei;
    this.ee = ee;
    this.name = name;
  }
}

function addEvent(ei, ee, name) {
  
  const ev = new Event(ei, ee, name);
  var eventsToBeOrdered = events.push(ev);
  return eventsToBeOrdered;

}

function removeEvent(name, pos) {

  var item = events.indexOf(name);
  var removedItens = events.splice(item, pos);
  return removedItens;

}

function solve() {
  
}



const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);

  addEvent(13, 15, 'Ir pro marlon');
  addEvent(13, 15, 'Ir pro marlo');
  addEvent(13, 15, 'Ir pro marl');
  addEvent(13, 16, 'Code');
  removeEvent('Code', 1);

  
  console.log(events[0]);
  console.log(events[1]);
});
