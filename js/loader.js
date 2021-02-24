
// ? Define que es declarado como funcion anonima, es decir,
// ? Será ejecutado al hacer instancia del archivo, sin embargo 
// ? No podrá se invocado porterior mente.

define(['ko'], ko => {
    console.log('Está entrando al define(?')

    // ? Se registra el componente 'test-component'
    // ? El template se encuentra aislado dentro del directorio
    // ? 'Modulos'. El viewModel es declarado en este mismo archivo
    // ? La idea es que pueda ser cargado por require como el view
    // ? Sin embargo se enceuntra aun en proceso ese paso.

    ko.components.register('test-component', {
        // template: '<h1>Hola, este es un componente dinamico basico</h1>'
        template: { require: 'text!../modules/test/test.html' },
        viewModel: function(params) {
            console.log('Está entrando al viewModel estático')
            console.log('Params(? ', params)

            let self = this;

            // ? Estas son las funciones que se ejecutan meduante el bindeo
            // ? Directamente en la definición del componente (en el view)
            self.onClick1 = () => {
                console.log('Está entrando al onclick 1');

                // ? Es la accion definida en este mismo archivo y que
                // ? Es pasada como parametro al componente en cuestion
                // ? Por el momento se encuentra definida en este mimo archivo
                // ? Sin embargo se espera que sea modulada al dividir el viewModel
                // ? De esta definición del componente.
                params.action();
            }

            self.onClick2 = () => {
                console.log('Está entrando al onclick 2');
                params.action();
            }

        }
    });

    ko.applyBindings(new mainViewModel());

});

function mainViewModel() {
    let self = this;
    self.onTest = () => {
        console.log('Está entrando al onTest desde el main loader :d');
    }
}