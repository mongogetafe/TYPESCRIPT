// Tipos para datos primitivos

//Sintaxis

// let variable: tipo

// String

let mensaje: string;

mensaje = 'Hola Mundo!';

// mensaje = 12; 

// Number

let resultado: number;
resultado = 9.5;

// Boolean

let mayorEdad: boolean;
mayorEdad = true;

// Arrays variable: elemento[] ó variable: Array<elemento>

let frutas: string[]; 
let coches: Array<string>;

frutas = ['pera','naranja','manzana'];

// Tipo any

let id: any = 2876; // Rompe inferencia de tipo en la inicialización permitiendo CUALQUIER tipo

id = '09876';

// Tipado de funciones (incorpora el tipo void)

function suma(a: number, b: number, mensaje?: string): string {
    return  mensaje ?  mensaje + a + b : 'El resultado es ' + a + b;
} 

suma(12, 2);

function setMensaje(mensaje: string): void {
    console.log(mensaje);
}

// Tipos genéricos para funciones (se define el tipo en la invocación de la función)

function devResultado<T> (a: T): T {
    return a;
}

let b = devResultado<string> ('Pass');
let c = devResultado<number> (12);

// let d = devResultado<boolean> (10); devolvería error

// Tipos de unión type identificador = tipo1 | tipo2 ...

type _id = string | number;

let ref: _id = 12;
ref = '12';

// Tipos de unión complejos

type razaPerro = 'Pastor Alemán' | 'Pastor Belga' | 'Mastín';

let razaToby: razaPerro = 'Mastín';

// Clases

class Jugador {
    public nombre: string;
    public apellidos: string;
    private goles: number;

    constructor(nombre: string, apellidos: string) {
        this.nombre = nombre;
        this.apellidos = apellidos;
    }

    setGoles(goles: number): void {
        this.goles = goles;
    } 

}

let jugador1 = new Jugador('Lionel','Messi');

let jugadores: Array<Jugador>;

let jugador2 = {nombre: 'Cristiano'};

jugadores = [jugador1]; // Si añadimos jugador2 devuelve error porque no es de la clase Jugador