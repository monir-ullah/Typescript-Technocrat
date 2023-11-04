{
    // Function with generics

    const createArray = (param: string): string[] => {
        return [param];
    }


    const createArrayWithGeneric =<T>(param: T): T[] => {
        return [param];
    }




    const res1= createArray('Bangladesh');

    const resGeneric= createArrayWithGeneric<string>('Banladesh');
    const resGenericBool= createArrayWithGeneric<boolean>(true);

    type User = {id:number; name: string};
    const resGenericObject= createArrayWithGeneric<User>({
        id: 222,
        name: "Mr Monir"
    });



    const createArrayWithTuple = <T,Q>(param1: T, param2: Q): [T,Q] => {
        return [param1, param2];
    }
   
    const resTupple =  createArrayWithTuple<string, number>('Bangladesh', 222);





    const addCourseToStudent =<T>(student: T ) => {
        const course = "Next Level web development";

        return {
            ...student,
            course
        }
    }



    const student1 = addCourseToStudent({name: "MR x", email: 'x@gmail.com', devType: 'NLWD', hasWatch: 'Apple Watch'});








    
    // 
}