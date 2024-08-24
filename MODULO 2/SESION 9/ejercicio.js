const clientes = [
    { nombre: "Cliente1", id: "123", password: "pass1", saldo: 1000 },
    { nombre: "Cliente2", id: "456", password: "pass2", saldo: 2000 },
    { nombre: "Cliente3", id: "789", password: "pass3", saldo: 3000 }
];

let clienteActual = null;

function login() {
    const id = document.getElementById('id').value;
    const password = document.getElementById('password').value;
    clienteActual = clientes.find(cliente => cliente.id === id && cliente.password === password);
    if (clienteActual) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('menu').style.display = 'block';
    } else {
        document.getElementById('loginError').innerText = 'Identificador o contraseña incorrectos.';
    }
}

function verSaldo() {
    alert(`Su saldo actual es: ${clienteActual.saldo}`);
}

function realizarGiro() {
    const monto = parseFloat(prompt('Ingrese el monto a girar:'));
    if (monto > clienteActual.saldo) {
        alert('No puede girar un monto mayor al saldo actual.');
    } else {
        clienteActual.saldo -= monto;
        alert(`Giro realizado. Su nuevo saldo es: ${clienteActual.saldo}`);
    }
}

function realizarDeposito() {
    const monto = parseFloat(prompt('Ingrese el monto a depositar:'));
    clienteActual.saldo += monto;
    alert(`Depósito realizado. Su nuevo saldo es: ${clienteActual.saldo}`);
}

function salir() {
    clienteActual = null;
    document.getElementById('login').style.display = 'block';
    document.getElementById('menu').style.display = 'none';
}