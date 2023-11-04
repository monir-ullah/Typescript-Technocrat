{
    // constraints
    


    const addCourseToStudent =<T extends {id: number; name:string; email: string}>(student: T ) => {
        const course = "Next Level web development";

        return {
            ...student,
            course
        }
    }



    const student1 = addCourseToStudent({id:222,  name: "MR x", email: 'x@gmail.com', devType: 'NLWD', hasWatch: 'Apple Watch'});
    const student2 = addCourseToStudent({id: 333, name: "MR x", email: 'x@gmail.com', devType: 'NLWD'});
    const student3 = addCourseToStudent({emi: 'emi', id: 233, name: 'Mr Emi', email: 'emi@gmailc.com'});











    // 
}