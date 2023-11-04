{
    // generic constraint with keyOf operator

    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }


    type Owner = 'bike' | 'car' | 'ship'  // manually


    type Owner2 = keyof Vehicle


    const person1 : Owner2 =  'bike';


    // const user = {
    //     name: 'Mr. Monir',
    //     age: 26,
    //     address: 'ctg'
    // }

    // user['name']

    function getPropertyValue<x,y extends keyof x>(obj: x, key:y){
        return obj[key];
    }
    const user = {
        name: 'Mr. Monir',
        age: 26,
        address: 'ctg'
    }



    const car = {
        model: 'Toyota 100',
        year: 2000
    }
    const result2 = getPropertyValue(car, 'year');
    const result1 = getPropertyValue(user, 'name');























    //
}