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

function dice(){
  return defaultDiceButtonQuantities.map( quantity =>
    <div className="my-column" key={quantity}>
      {diceOfSize(quantity)}
    </div>
  )
}

function diceOfSize(quantity:number){
  return defaultDiceButtonSizes.map(
    buttonSize => MyButton( quantity+"d"+buttonSize,quantity, buttonSize)
  );
}

function dieButtonEventHandler( quantity: number, sides: number):any {
    rollDice(sides, quantity);
}

function MyButton( key:string , quantity:number, sides:number) {
  return (
    <Button className="button-spacing" variant="secondary" key={key} onClick={()=>dieButtonEventHandler(quantity, sides)}>{quantity}d{sides}</Button>
  );
}

export default function Home() {
  return (
          <div className="my-column-container">
              {dice()}
          </div>            
  );
}
