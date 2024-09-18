interface Address {
    street:string;
    country:string;
    city:string;
}
interface SuperHero {
    name: string;
    age: number;
    address: Address;
    showAddress():string;
}

const superheroe:SuperHero = {
    name: 'Spiderman',
    age: 30,
    address:{
        street:'Main St.',
        country:'USA',
        city:'NYC',
    },
    showAddress(): string {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}

const address = superheroe.showAddress();
console.log(address);

export {};