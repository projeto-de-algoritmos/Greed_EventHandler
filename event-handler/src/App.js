import './App.css';
import { Calendar, momentLocalizer  } from 'react-big-calendar';
import { useState, useEffect } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const myEvents = [{
    id: 0,
    title: 'Long Event',
    start: new Date(2021, 8, 7, 10, 0),
    end: new Date(2021, 8, 7, 11, 0),
  },
  {
    id: 1,
    title: 'Long Event',
    start: new Date(2021, 8, 7, 10, 30),
    end: new Date(2021, 8, 7, 11, 0),
  },
  {
  id: 2,
    title: 'Chores',
    start: new Date(2021, 8, 5, 12, 0),
    end: new Date(2021, 8, 5, 13, 30),
  },
  {
  id: 3,
    title: 'Lunch with Lily',
    start: new Date(2021, 8, 7),
    end: new Date(2021, 8, 7),
  },
  {
  id: 4,
    title: 'Movie Night',
    start: new Date(2021, 8, 6, 15, 0),
    end: new Date(2021, 8, 6, 18, 0),
  },
  {
    id: 5,
      title: 'Movie Night 2',
      start: new Date(2021, 8, 6, 11, 0),
      end: new Date(2021, 8, 6, 19, 0),
    },
  {
  id: 6,
    title: 'Pair programming with Tom',
    start: new Date(2021, 8, 8),
    end: new Date(2021, 8, 8),
  },
]

// a e b são a mesma data
function compareEvent(a, b) {
  return a.end.getTime() - b.end.getTime();
}

function getDayEvents(events) {
  let actualDate = new Date(Date.now());
  let dayEvents = [];
  console.log("actualDate:");
  console.log(actualDate);
  let actualMonth = actualDate.getMonth();
  let actualDay = actualDate.getDate();
  let actualYear = actualDate.getFullYear();
  
  for (let i = 0; i < myEvents.length; i++) {
    if (myEvents[i].end.getMonth() == actualMonth && 
    myEvents[i].end.getDate() == actualDay && 
    myEvents[i].end.getFullYear() == actualYear) {
      console.log("Resultado do for:");
      console.log(myEvents[i].end.getDate());
      dayEvents.push(myEvents[i]);
    }
  }
  return dayEvents;
}

function sortEvent(events) {
  events.sort(compareEvent);
}

function solve(events) {

  sortEvent(events);
  
  const ans = [events[0]];
  let last = events[0].end.getTime();
  console.log("Dentro da solve:")
  console.log(`${ans}, ${last}`);

  // console.log(`events = \n:${JSON.stringify(events, null, 2)}`);


  for(let i = 1; i < events.length; i++) {
    // console.log(`last = ${last}, events[i] = ${JSON.stringify(events[i])}`);
    if(events[i].start.getTime() < last) {
      continue;
    }
    ans.push(events[i]);
    last = events[i].end.getTime();
  }

  return ans;

}

function App() {
  const localizer = momentLocalizer(moment);

  const [addEventPopUp, setAddEventPopUp] = useState(false);

  const addEvent = (startDate: Date, endDate: Date, title: String) => {
    const newEvent = {id: myEvents.length-1, title: title, start: startDate, end: endDate}
    myEvents.push(newEvent);
    console.log(myEvents.length);
  }
  console.log(myEvents[0]);
  const openPopUp = () => {
    if (!addEventPopUp) {
      setAddEventPopUp(true);
    } else {
      setAddEventPopUp(false);
    }
  }

  useEffect(() => {
    let dayEvents = getDayEvents(myEvents);
    console.log("flag:");
    console.log(dayEvents);
    let solvedEvents = solve(dayEvents);
    console.log("eventos organizados");
    console.log(solvedEvents);
  }, []);

  return (
    <>
    <div className="addButton" onClick={() => openPopUp()}>
      +
    </div>
    { addEventPopUp ? (
      <div className="addEventPopUp">
      <body>
        <label className='lbl1'>Event name</label><br/>
        <input className='inp1' type='text'></input><br/>
        <label className='lbl2'>Start Date</label><br/>
        <input className='inp2' type='datetime-local'></input><br/>
        <label className='lbl3'>End Date</label><br/>
        <input className='inp3' type='datetime-local'></input><br/>
        <button className='btn1'>Add event</button>
      </body>
      
    </div>
    ) : (
      null
    )}
    <div className="App" onClick={()=>setAddEventPopUp(true)}>
      <Calendar localizer={localizer} events={myEvents} showMultiDayTimes step={30}/>
      {console.log(myEvents[0])}
    </div>
    
    </>
  );
}

export default App;
