'use client';
import {rollDice } from "./js/diceLogic";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const defaultDiceButtonSizes = [4, 6, 8, 10, 12, 20, 100];
const defaultDiceButtonQuantityLimit = 10;
const defaultDiceButtonQuantities = new Array<number>();
for (let i = 1; i <= defaultDiceButtonQuantityLimit; i++) {
   defaultDiceButtonQuantities.push(i);
}

const defaultDiceValues = [
  {"modifier": 2, "name": "potion of healing", "quantity":2, "size": 4},
  {"modifier": -10, "name": "fireball", "quantity":8, "size": 6}
]

function defaultDice(){
  return defaultDiceValues.map( die => 
    MyButton( die.quantity+"d"+die.size, die.name, die.modifier, die.quantity, die.size)
  )
}

function dieButtonEventHandler( quantity: number, sides: number):any {
    rollDice(sides, quantity);
}

function MyButton( key:string , label:string, modifier: number, quantity:number, sides:number) {
  let displayModifier = "";
  if (modifier > 0){
    displayModifier += "+" + modifier;
  } else if (modifier < 0){
    displayModifier += modifier;
  }
  return (
    <Button className="button-size button-spacing" variant="secondary" key={key} onClick={()=>dieButtonEventHandler(quantity, sides)}>{label} {quantity}d{sides}{displayModifier}</Button>
  );
}

export default function Home() {
  return (
          <div className="my-column-container">
              {defaultDice()}
          </div>            
  );
}
