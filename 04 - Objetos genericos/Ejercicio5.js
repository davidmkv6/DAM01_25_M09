const usuarios = [
    {
      nombre: "Juan",
      edad: 25,
      email: "juan@email.com",
      saludar() {
        console.log(`Hola, soy ${this.nombre}`);
      }
    },
    {
      nombre: "Maria",
      edad: 30,
      email: "maria@email.com",
      saludar() {
        console.log(`Hola, soy ${this.nombre}`);
      }
    },
    {
      nombre: "Carlos",
      edad: 22,
      email: "carlos@email.com",
      saludar() {
        console.log(`Hola, soy ${this.nombre}`);
      }
    }
  ];
  
  usuarios.push({
    nombre: "Ana",
    edad: 28,
    email: "ana@email.com",
    saludar() {
      console.log(`Hola, soy ${this.nombre}`);
    }
  });
  
  function mostrarUsuarios() {
    usuarios.forEach(usuario => {
      console.log(
        `Nombre: ${usuario.nombre}, Edad: ${usuario.edad}, Email: ${usuario.email}`
      );
    });
  }
  
  mostrarUsuarios();
  
  usuarios.forEach(usuario => {
    usuario.saludar();
  });
  