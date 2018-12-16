export class User{
    
    constructor(input){
        Object.assign(this, input);
    }

    id: number;
    first_name: string;
    last_name: string;
    birth_year: number;
}