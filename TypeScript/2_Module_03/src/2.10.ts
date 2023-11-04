{
    //mapped types


    const arrOfNumbers: number[] = [1,4,5];

    const arrOfStrings: string[] = ['1','4','5'];


    const arrayOfString: string[] = arrOfNumbers.map((number)=>number.toString());

    console.log(arrayOfString);


    type AreaNumber = {
        height: number;
        width: number;
    }


    type Height = AreaNumber['height'];

    // type AreaString = {
    //     height: string;
    //     width: string;
    // }


    


    // type AreaString = {
    //     [key in 'height' | 'width' | 'deptth']:string; 
    // }
    type AreaString = {
        [key in keyof AreaNumber]:string; 
    }


    // T =>  {height: string; width:number}
    // key => T['width']
    type AreaStrings<T> = {
        [key in keyof T]:T[key]; 
    }




    const area1 : AreaStrings<{height: string; width:number}> = {
        height: '100',
        width: 50,
    }








    //
}