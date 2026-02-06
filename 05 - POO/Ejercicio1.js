class TarjetaCredito {
    constructor(numero, titular, limite, pin) {
        this._numero = numero;
        this._titular = titular;
        this._limite = limite;
        this._saldo = 0;
        this._activa = false;
        this._pin = pin;
    }


    activar() {
        this._activa = true;
        console.log("Tarjeta activada");
    }

    anular() {
        this._activa = false;
        console.log("Tarjeta anulada");
    }

    pagar(cantidad) {
        if (!this._activa) {
            console.log("La tarjeta no está activa");
            return;
        }

        if (this._saldo + cantidad > this._limite) {
            console.log("Límite de crédito superado");
        } else {
            this._saldo += cantidad;
            console.log(`Pago realizado: ${cantidad} €`);
        }
    }

    cambiarPin(pinActual, nuevoPin) {
        if (this._pin === pinActual) {
            this._pin = nuevoPin;
            console.log("PIN cambiado correctamente");
        } else {
            console.log("PIN incorrecto");
        }
    }

    getSaldo() {
        return this._saldo;
    }
}