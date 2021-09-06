import './App.css';
import { Calendar, momentLocalizer  } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = momentLocalizer(moment);

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
  return (
    <>
    <div className="addButton">
      Hi
    </div>
    <div className="App">
      <Calendar localizer={localizer} events={myEvents} showMultiDayTimes step={30}/>
    </div>
    </>
  );
}

export default App;
