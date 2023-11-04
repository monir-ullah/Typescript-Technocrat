{
    // interface  generic

    interface Developer<T>{
        name: string;
        computer : {
            brand: string;
            model: string;
            releaseYear: number;
        }
        smartWatch: T;
    }
    


    type EmillabWeb = {
        brand: string;
        model: string;
        display: string;
    }

    const poorDeveloper: Developer<EmillabWeb> = {
        name: 'Monir',
        computer: {
            brand: "Dell",
            model: 'X-25UR',
            releaseYear: 2018
        },
        smartWatch: {
            brand: 'Emilab',
            model: 'kw66',
            display: 'OLED',
        }
    }; 
    interface RichDeveloper{
        brand: string;
        model: string;
        heartBreak: boolean;
        sleepTrack: boolean;
        
    }
    const richDeveloper: Developer<RichDeveloper> = {
        name: 'Rich Dev',
        computer: {
            brand: "HP",
            model: 'X-25UR',
            releaseYear: 2018
        },
        smartWatch: {
            brand: 'Aple',
            model: 'kw66',
            heartBreak: true,
            sleepTrack: true
           
        }
    }





    //
}