{

    //conditional type

    type a1 = null;
    type b2 = undefined;


    type x = a1 extends null ? true : false ; // conditional type

    type y = a1 extends null ? true : b2 extends  undefined ?  undefined: any; // conditional type




    type Sheikh = {
        bike: string;
        car: string;
        ship: string
    }




    // car ase kina / bike ase kina / shiip kina / tractor ase kina. 
    type CheckVahicle<T> = T extends 'bike' | "car" | 'ship' ? true : false;
    type CheckVahicles<T> = T extends keyof Sheikh ? true : false;




    type HasBike = CheckVahicle<'bike'>;

}