class Personaje {
    constructor(nombre, nivel, puntosDeVida) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntosDeVida = puntosDeVida;
    }

    atacar() {
        console.log(`${this.nombre} ataca de forma básica.`);
    }

    toString() {
        return `${this.nombre} (Nivel ${this.nivel}, Vida ${this.puntosDeVida})`;
    }

    valueOf() {
        return this.nivel;
    }
}

class Guerrero extends Personaje {
    constructor(nombre, nivel, puntosDeVida, fuerza) {
        super(nombre, nivel, puntosDeVida);
        this.fuerza = fuerza;
    }

    atacar() {
        console.log(`${this.nombre} golpea con su espada (fuerza ${this.fuerza}).`);
    }

    golpeEspada() {
        console.log(`${this.nombre} usa Golpe de Espada`);
    }
}

class Mago extends Personaje {
    constructor(nombre, nivel, puntosDeVida, mana) {
        super(nombre, nivel, puntosDeVida);
        this.mana = mana;
    }

    atacar() {
        console.log(`${this.nombre} lanza un ataque mágico (maná ${this.mana}).`);
    }

    lanzarHechizo() {
        console.log(`${this.nombre} lanza un hechizo`);
    }
}

const personajes = [
    new Guerrero("Arthas", 5, 120, 30),
    new Mago("Gandalf", 10, 80, 100),
    new Guerrero("Conan", 3, 150, 25),
    new Mago("Merlín", 7, 90, 80)
];

personajes.forEach(personaje => {
    personaje.atacar();
});

personajes.sort((a, b) => a - b);

console.log("Personajes ordenados por nivel:");
personajes.forEach(personaje => {
    console.log(personaje.toString());
});
