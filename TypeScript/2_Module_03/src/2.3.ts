{
    // generic type

    type GenericArray<T> = Array<T>;
    // const nollNumber: number[] = [3,6,8];
    // const nollNumber: Array<number> = [3,6,8];
    const nollNumber: GenericArray<number> = [3,6,8];

    // const mentors: string[] =["Mr. X", 'Mor.Y', 'Mr. Z'];
    // const mentors: Array<string> =["Mr. X", 'Mor.Y', 'Mr. Z'];
    const mentors: GenericArray<string> =["Mr. X", 'Mor.Y', 'Mr. Z'];



    // const boolArray: boolean[] = [true, false, true];
    const boolArray: Array <boolean> = [true, false, true];



    const user: GenericArray<{name:string; age:number}> = [
        {
            name: "Mezba",
            age: 100,
        },
        {
            name: "Jhankar Mahbub",
            age: 110
        }
    ]



    // generic tuple
    type GenericTuple<X,Y> = [X, Y];

    // const manus: [string, string] = ['Mr.x ', 'Ms. Y']
    const manus: GenericTuple<string, string> = ['Mr.x ', 'Ms. Y'];



    const UserWithID:GenericTuple<number,{name:string, email:string}>  = [1234, {name: 'Monir', email: 'abc@gmil.com'}]











    //
}