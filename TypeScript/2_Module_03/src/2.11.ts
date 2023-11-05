{
    //
    //Pick 


    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo:string;
    }

    // type name = Person['name'];

    type NameAge = Pick<Person, 'name' | 'age'>;


    // Omit
    type ContactInto = Omit<Person, 'name' | 'age'> // name and age ei khane type teke bad deya. 

    // Required Property

    type PersonRequired = Required<Person>;

    // Partial

    type PersonPartial = Partial<Person>;


    // Read Only

    type personReadOnly = Readonly<Person>
    const person1: personReadOnly = {
        name: "MR. M",
        age: 20,
        contactNo: '017'
    }



    // person1.name = "Mr. Y"; // can not assess because it is read only propety


    // Record 

    type MyObj = Record<string,string>

   const obj1: MyObj = {
        a: 'a',
        b: 'b',
        c: 'c',
        d: 'd'
   }


   const EmptyObj: Record<string,unknown> = {}



























    //
}