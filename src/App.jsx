import "./App.css";
import { useState } from "react";
import LOGO from "./assets/image/logo.svg";



function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0);
  const [totalAmountPerPerson, setTotalAmountPerPerson] = useState(0);
  const [customTip, setCustomTip] = useState(0);

  const calculateTip = (tipPercentage) => {
    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalAmount = billAmount + tipAmount;
    const totalAmountPerPersonValue = totalAmount / numberOfPeople;
    const tipAmountPerPersonValue = tipAmount / numberOfPeople;

    setTipAmountPerPerson(tipAmountPerPersonValue);
    setTotalAmountPerPerson(totalAmountPerPersonValue);
    setCustomTip(0);
  };

  const calculateCustomTip = () => {
    calculateTip(customTip);
  };

  const resetCalculator = () => {
    setBillAmount(0);
    setNumberOfPeople(1);
    setTipAmountPerPerson(0);
    setTotalAmountPerPerson(0);
    setCustomTip(0);
  };


  return (
    <>
      <nav><img src={LOGO} alt=''></img></nav>
      <main>


        <div className="calculatorContainer">
        <label>
          Bill 
          <input 
          className="inputbox" 
          type="number" 
          value={billAmount} 
          onChange={(e) => setBillAmount(parseFloat(e.target.value))}/>
        </label>

        <br />

        <label>
        Select Tip %  
        <div className="tipContainor">
        <button className="tipButton" onClick={() => calculateTip(5)}>5%</button>
        <button className="tipButton" onClick={() => calculateTip(10)}>10%</button>
        <button className="tipButton" onClick={() => calculateTip(15)}>15%</button>
        <button className="tipButton" onClick={() => calculateTip(25)}>25%</button>
        <button className="tipButton" onClick={() => calculateTip(50)}>50%</button>
        <button className="customButton" onClick={() => calculateCustomTip()}disabled={customTip === 0}>Custom</button>
        </div>
      </label>
      
      <br />

        <label>
        Number of people
        <input 
        className="inputbox" 
        type="number" 
        value={numberOfPeople} 
        onChange={(e)=> setNumberOfPeople(parseInt(e.target.value))}/>
        </label>

       </div>

        <div className="resultContainer">

        <div className="tip-amount-box" id="tip-amount-one-person">
          <div className="boxOne"><p className="tipAmount">Tip Amount</p>
          <p className="tipperson">/ person</p></div>
          <h1>{tipAmountPerPerson.toFixed(2)}</h1>
        </div>

        <div className="tip-total-box" id="tip-total">
        <div className="boxTwo">
          <p className="tipTotal">Total</p>
          <p className="tipperson">/ person</p></div>
          <h1>{totalAmountPerPerson.toFixed(2)}</h1>
        </div>

        <button className="resetButton" onClick={resetCalculator}>Reset</button>
      </div>
      </main>
    </>
  );
}

export default App;





// import {Button} from "./components/button/button";

  // const [active, setActive] = useState(null);
  // // const [amount, setAmount] = useState(0);

  // function handleButtonClick(index) {
  //   setActive(index);
  // }

            {/* <Button
              id="5%"
              onClick={() => handleButtonClick(0)}
              active={active === 0}
              setActive={(isActive) => {
                if (isActive) {
                  handleButtonClick(0);
                } else {
                  setActive(null);
                }
              }}
            >
              5%
            </Button>
            <Button
              id="10%"
              onClick={() => handleButtonClick(1)}
              active={active === 1}
              setActive={(isActive) => {
                if (isActive) {
                  handleButtonClick(1);
                } else {
                  setActive(null);
                }
              }}
            >
              10%
            </Button> */}