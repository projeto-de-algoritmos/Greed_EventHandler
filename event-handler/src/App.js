import './App.css';
import { Calendar, momentLocalizer  } from 'react-big-calendar';
import { useState } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const myEvents = [{
    id: 0,
    title: 'Long Event',
    start: new Date(2021, 8, 7, 9, 10),
    end: new Date(2021, 8, 7, 11, 45),
  },
  {
  id: 1,
    title: 'Chores',
    start: new Date(2021, 8, 5, 12, 0),
    end: new Date(2021, 8, 5, 13, 30),
  },
  {
  id: 2,
    title: 'Lunch with Lily',
    start: new Date(2021, 8, 7),
    end: new Date(2021, 8, 7),
  },
  {
  id: 3,
    title: 'Movie Night',
    start: new Date(2021, 8, 6, 15, 0),
    end: new Date(2021, 8, 6, 18, 0),
  },
  {
  id: 4,
    title: 'Pair programming with Tom',
    start: new Date(2021, 8, 8),
    end: new Date(2021, 8, 8),
  },
]

function App() {
  const localizer = momentLocalizer(moment);

  const [addEventPopUp, setAddEventPopUp] = useState(false);

  const addEvent = (startDate: Date, endDate: Date, title: String) => {
    const newEvent = {id: myEvents.length-1, title: title, start: startDate, end: endDate}
    myEvents.push(newEvent);
    console.log(myEvents.length);
  }

  const openPopUp = () => {
    if (!addEventPopUp) {
      setAddEventPopUp(true);
    } else {
      setAddEventPopUp(false);
    }
  }


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
    <div className="App" onClick={()=>setAddEventPopUp(false)}>
      <Calendar localizer={localizer} events={myEvents} showMultiDayTimes step={30}/>
    </div>
    </>
  );
}

export default App;
