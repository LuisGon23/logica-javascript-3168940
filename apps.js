/*
let numero= Number (prompt ("Dime un numero"))
let counter= 1

while(counter <=numero) { 
    if (counter % 5 ===0) {
       console.log ("Ejecutando ciclo")
    }
    counter++
}  */

    //Ejercicio 2
    /*let num= Number (prompt ("Dame un numero"))
    let counter
    do {
        if(counter % 5===0) {
            console.log(counter)
        }   counter+++
     }
    while (counter <=num)*/

    //Ejercicio 3

    /*for(let i=1; i<= 50; i++) { 
        if( i % 2 != 0) {   
            console.log(i)
        }
    }*/

    //Cree un ciclo for que imprima la tabla de multiplicar del 7

    /*for(let i=1; i<=10; i++) {  
        if ( i % 2 !=0) {
            console.log ("7 x" +i+ "=" + (7*i))
        }
    }*/

        //Ejercicio 5
        //Cree un ciclo for que inprima 100 numeros

        for(let i=1; i<=100; i++) {   
            if ( i=== 20 && i <=30) {   
                continue
            }
            console.log(i)
        }