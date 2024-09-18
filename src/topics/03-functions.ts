

function addNumbers(a:number, b:number) {
    return a + b;
}

const addNumbersArrow = (a:number, b:number):string => {return `${a + b}`;};

function multiply(firstNum:number, secondNum?:number, base:number = 2) {
    return firstNum * base;
}


//const result:number = addNumbers(1, 2);
//const result2:string = addNumbersArrow(2, 2);
//const multiplyResult = multiply(5);
//console.log({result, result2, multiplyResult});

interface Character {
    name: string;
    hp: number;
    showHp:() => void;
}

const healCharacter = (character:Character, healingAmmount:number) => {
    character.hp += healingAmmount;
}

const furio: Character = {
    name: 'Furio',
    hp: 50,
    showHp(){
        console.log(`HP: ${this.hp}`);
    }
}

healCharacter(furio, 10);
healCharacter(furio, 60);

furio.showHp();


export {};