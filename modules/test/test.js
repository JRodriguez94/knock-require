
// ? Este objeto Define es ajecutado al ser "Requerido" al momento de 
// ? Registrar el componente. Se le pasa dependencia "ko" definido en main.js
// ? así mismo se pasa como parametro para poder ser utilizado dentro del mimo.
// * Los metodos agregados al objeto self del presente scope, son invocados 
// * Dentro del data-bind del componente (en el template)
// * Puedes pasar parametros como una función normal para trabjaar con los datos.

define(['ko'], ko => {
    var testViewModel = function(params) {


            console.log('Está entrando testViewModel')
            // console.log('Params(? ', params)

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
                params.action('Hola desde el onClick1');
            }

            self.onClick2 = () => {
                console.log('Está entrando al onclick 2');
                params.action('Hola desde el onClick2');
            }

    }
    return testViewModel;
})