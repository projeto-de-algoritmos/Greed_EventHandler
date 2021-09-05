import './App.css';
import { Calendar, momentLocalizer  } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = momentLocalizer(moment);

function App() {
  return (
    <div className="App">
      <Calendar localizer={localizer} events={[]}/>
    </div>
  );
}

export default App;
