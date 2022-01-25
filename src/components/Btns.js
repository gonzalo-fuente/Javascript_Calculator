import { useEffect, useState } from "react";
import Btn from "./Btn";

const Btns = ({ btns, display, setDisplay, formula, setFormula }) => {

  const [figure, setFigure] = useState('');
  const [hasTwoOperators, setHasTwoOperators] = useState(false);

  useEffect(() => {
    
    if (!formula.includes('=')) {
      if (/[\/\-\+*]/.test(display)) {
        setFormula(formula + figure + display);
      }
    } else { //Formula includes '='
      if (/[\/\-\+*]/.test(display)) {
        if (/[0-9]/.test(display)) {
          setFormula(formula + display);
        } else {
          setFormula(figure + display);
        }
      } else {
        setFormula(formula + display);
        setFigure(display);
        if (display === figure) {
          setFormula('');
        }
      }
    }

    /* If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign) */
    if (/[\/\-\+*]/.test(figure) && !formula.includes('=')) {
      if (figure.includes('-')) {
        setFormula(formula + figure);
        setHasTwoOperators(true);
      } else {
        if (hasTwoOperators) {
          setFormula(formula.slice(0, -2) + figure);
          setHasTwoOperators(false);
        } else {
          setFormula(formula.slice(0, -1) + figure);
        }
      }
    }

  }, [display]);

  const selectFunction = (func, btn) => {
    switch (func) {
      case 'number':
        setNumber(btn);
        break;
      case 'operator':
        setOperator(btn);
        break;
      case 'clear':
        clear();
        break;
      case 'calculate':
        calculate();
        break;
    }
  }

  const setNumber = (number) => {
    
    if (display === 'Digit OVF')
      return;

    /* Limit to 10 numbers */
    if (display.length >= 10)
      return;

    /* If I pressed a number after a calculation*/
    if (formula.includes('=')) {
      if (number === '.') {
        setDisplay('0' + number);
        setFigure('0' + number);
      } else {
        setDisplay(number);
        setFigure(number);
      }
      return;
    }
    
    if(display === '0' || /[\/\-\+*]/.test(display)) {
      if (number === '0') {
        return;
      } else if (number === '.') {
        setDisplay('0' + number);
        setFigure('0' + number);
      } else {
        setDisplay(number);
        setFigure(number);
      }
    } else {
      if (display.includes('.') && number === '.')
        return;
      else {
        setDisplay(display + number);
        setFigure(display + number);
      }
    }
    
    /* Clears and set the display with the pressed number after enters an operator */ 
    if (/[\/\-\+*]/.test(display) && !number === '.') {
      setDisplay(number);
      setFigure(number);
    }
  }

  const setOperator = (operator) => {
    if (display === 'Digit OVF')
      return;

    if (display === '0')
      return;
    
    if (/[\/\-\+*]/.test(display)) {
      setDisplay(operator);
      setFigure(operator);
    } else {
      setDisplay(operator);
    }
  }

  const clear = () => {
    setDisplay('0');
    setFigure('');
    setFormula('');
  }

  const calculate = () => {
    if (!formula.includes('=')) {
      const result = eval(formula + display);
      if (result > 9999999999) {
        setDisplay('Digit OVF')
      } else {
      setDisplay(result);
      setFormula(formula + figure + '=');
      }
    }
    
  }

  return ( 
    <div className="grid grid-cols-4 gap-2 w-fit">
      { btns.map( (btn) => {
          return (
            <Btn 
              key={ btn.id }
              btn={ btn }
              selectFunction= { selectFunction }
            />
          )})
      }
    </div>
  )
}
 
export default Btns;