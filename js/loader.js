
// ? Este define es ejecutado al ser requerido en el archivo Main.js
// ? Es declarado como una función anonima, de forma en que será
// ? Ejecutado al hacer instancia dle archico (ser requerido) sin embargo..
// | No puede ser invocado de forma posterior a la carga

define(['ko'], ko => {
    console.log('Está entrando al define del LOADER')

    // ? Se registran los omponentes 'test-component' y 'test-component'
    // ? Se logró aislar el template y el viewModel del loader principal
    // ? De forma que se cargan como un modulo AMD como tal al ser requeridos.

    ko.components.register('test-component', {

        template: { require: 'text!../modules/test/test.html' },
        viewModel: { require: '../modules/test/test' }

    });

    ko.components.register('test-component', {

        template: { require: 'text!../modules/fd-button/fd-button.html' },
        viewModel: { require: '../modules/fd-button/fd-button' }

    });

    // ? Despues de registrar los componentes, se aplica el bindeo 
    // ? Para que los componentes puedans ser cargados al ser requeridos
    // ? en la vista (index.html en este caso)
    // ? Se le esta pasando como parametro la instancia de la funcion mainViewModel
    // ? Esto con el proposito de que los metodos registrados en dicha funcion
    // ? Puedan ser accedidos desde cualquier componente registrado en este mismo scope

    ko.applyBindings(new mainViewModel());

});

// ? Funccion en donde se peuden declarar metodos y propiedades
// ? Los cuales pueden ser accedidos por cualuqier modulo registrado
// ? Dentro de este mismo scope. En este caso 'test-component' y 'test-component'

function mainViewModel(saludo) {
    let self = this;
    self.onTest = saludo => {

        console.log('Parametro que llega al mainViewModel: ', saludo)

    }
}