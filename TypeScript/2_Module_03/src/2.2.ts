{
    //


    type User1 = {
        name:string;
        age: number;
    }


    interface User2{
        name:string;
        age:number;
    }

    interface UserWithRole2 extends User2 {
        role: string;
    }

    type UserWithRole1 = User1 & {role:string};
    const user1:UserWithRole1 = {
        name: "Monir",
        age: 100,
        role: "manager"
    }














    
    //
}