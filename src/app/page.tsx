'use client';
import {rollDice } from "./js/diceLogic";
import MySelect from "./components/MySelect";
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';

const defaultDiceValues = [
  {"key": 0, "modifier": 2, "name": "potion of healing", "quantity":2, "size": 4},
  {"key": 1, "modifier": 0, "name": "fireball", "quantity":8, "size": 6},
  {"key": 2, "modifier": 5, "name": "my attack roll", "quantity":1, "size": 20}
]

function defaultDice(){
  return defaultDiceValues.map( die => 
    DiceButton( die.key, die.name, die.modifier, die.quantity, die.size)
  )
}

function dieButtonEventHandler( quantity: number, sides: number):any {
    rollDice(sides, quantity);
}

function DiceButton( key:number , label:string, modifier: number, quantity:number, sides:number) {
  let displayModifier = "";
  if (modifier > 0){
    displayModifier += "+" + modifier;
  } else if (modifier < 0){
    displayModifier += modifier;
  }
  return (
    <Button className="button-size button-spacing" variant="secondary" key={key} onClick={()=>dieButtonEventHandler(quantity, sides)}>
        {label}
        <br></br>
        {quantity}d{sides}{displayModifier}
    </Button>
  );
}



function addDiceWidget(){
    return (
      <div>
        {MySelect()}
        <Button className="button-size button-spacing" variant="secondary" key={1111} onClick={()=>dieButtonEventHandler(1, 2)}>
          Add Die
        </Button>
      </div>
    
  );
}

export default function Home() {
  return (
        <div>
          <div className="my-column-container">
            <div className="my-column">
              {defaultDice()}
            </div>
          </div>            
          <div className="my-column-container">
              {addDiceWidget()}
            </div>
        </div>
  );
}
