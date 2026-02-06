class FiguraGeometrica {
    constructor(nombre) {
        this.nombre = nombre;
    }

    calcularArea() {
        throw new Error("El método calcularArea() debe ser implementado por la subclase");
    }
}

class Rectangulo extends FiguraGeometrica {
    constructor(base, altura) {
        super("Rectángulo");
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return this.base * this.altura;
    }
}

class Triangulo extends FiguraGeometrica {
    constructor(base, altura) {
        super("Triángulo");
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return (this.base * this.altura) / 2;
    }
}

class Circulo extends FiguraGeometrica {
    constructor(radio) {
        super("Círculo");
        this.radio = radio;
    }

    calcularArea() {
        return Math.PI * this.radio * this.radio;
    }
}

const rectangulo = new Rectangulo(5, 3);
const triangulo = new Triangulo(4, 6);
const circulo = new Circulo(2);

console.log(rectangulo.nombre, rectangulo.calcularArea());
console.log(triangulo.nombre, triangulo.calcularArea());
console.log(circulo.nombre, circulo.calcularArea());
