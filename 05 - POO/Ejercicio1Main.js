const t1 = new TarjetaCredito(
    "1234 5678 9012 3456",
    "Ana Lopez",
    3000,
    1234
);

const t2 = new TarjetaCredito(
    "9876 5432 1098 7654",
    "Carlos Perez",
    1500,
    4321
);

const t3 = new TarjetaCredito(
    "1111 2222 3333 4444",
    "Maria Ruiz",
    5000,
    9999
);

t1.activar();
t1.pagar(200);
t1.cambiarPin(1234, 5678);

t2.pagar(100);
t3.activar();
t3.anular();
