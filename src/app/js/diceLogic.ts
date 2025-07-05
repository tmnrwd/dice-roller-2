

export function rollDie(sides: number): number {
    let result = Math.floor(Math.random() * sides);
    result++;
    
    return result;
}

export function rollDice(quantity:number,sides:number,modifier:number=0): number{
    let result = 0;
    for (let i = 0; i < quantity; i++) {
        result += rollDie(sides);
    } 
    result += modifier;
    console.log("you rolled " + result);
    return result;
}