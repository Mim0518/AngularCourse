
const skills:string[] = ['bash', 'counter', 'heal'];

interface Character{
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}
const furio:Character = {
    name: 'Furio',
    hp: 100,
    skills: ['bash', 'counter']
};

furio.hometown = 'Si'

console.log(furio);

export{};