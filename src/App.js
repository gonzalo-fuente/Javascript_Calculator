import { useState } from "react";
import Display from "./components/Display";
import Btns from "./components/Btns";

function App() {

  const [btns, setBtns] = useState([
    {
      id:'clear',
      btn:'AC',
      func: 'clear',
      className: 'btn-cl col-span-3'
    },
    {
      id:'divide',
      btn:'/',
      func: 'operator',
      className: 'btn-op'
    },
    {
      id:'seven',
      btn:'7',
      func: 'number',
      className: 'btn-num'
    },
    {
      id:'eight',
      btn:'8',
      func: 'number',
      className: 'btn-num'
    },
    {
      id:'nine',
      btn:'9',
      func: 'number',
      className: 'btn-num'
    },
    {
      id:'multiply',
      btn:'*',
      func: 'operator',
      className: 'btn-op'
    },
    {
      id:'four',
      btn:'4',
      func: 'number',
      className: 'btn-num'
    },
    {
      id:'five',
      btn:'5',
      func: 'number',
      className: 'btn-num'
    },
    {
      id:'six',
      btn:'6',
      func: 'number',
      className: 'btn-num'
    },
    {
      id:'subtract',
      btn:'-',
      func: 'operator',
      className: 'btn-op'
    },
    {
      id:'one',
      btn:'1',
      func: 'number',
      className: 'btn-num'
    },
    {
      id:'two',
      btn:'2',
      func: 'number',
      className: 'btn-num'
    },
    {
      id:'three',
      btn:'3',
      func: 'number',
      className: 'btn-num'
    },
    {
      id:'add',
      btn:'+',
      func: 'operator',
      className: 'btn-op'
    },
    {
      id:'zero',
      btn:'0',
      func: 'number',
      className: 'btn-num'
    },
    {
      id:'decimal',
      btn:'.',
      func: 'number',
      className: 'btn-num'
    },
    {
      id:'equals',
      btn:'=',
      func: 'calculate',
      className: 'btn-eq col-span-2'
    }
  ]);

  const [display, setDisplay] = useState('0');
  const [formula, setFormula] = useState('');

  return (
    <div className="App text-center">
      <Display display={ display } formula={ formula }/>
      <Btns 
        btns={ btns }
        display={ display }
        setDisplay={ setDisplay }
        formula={ formula }
        setFormula={ setFormula }
      />
      <footer className="text-right italic text-gray-600 text-sm mt-2">
        by gonz4 Web Designs
      </footer>
    </div>
  );
}

export default App;
