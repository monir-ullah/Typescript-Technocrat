{
    //  asyncronous Typescript


    // promise



    type Something = string;
    const createpromise = (): Promise<Something>=>{
        return new Promise<Something>((resovle, reject)=>{
            {
                const data: string = 'Promise';
    
    
                if(data){
                    resovle(data);
                }else{
                    reject('failed to load data');
                }
            }
        })
    }


    // calling create promise function

    const showData =async () => {
        const data = await createpromise();
        console.log(data);

        return data;
    }


    showData();


    //
    const getTodo =async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log({data});

        return data;
    }
    getTodo();
















}