


// ? Este objeto Define es ajecutado al ser "Requerido" al momento de 
// ? Registrar el componente. Se le pasa dependencia "ko" definido en main.js
// ? así mismo se pasa como parametro para poder ser utilizado dentro del mimo.
// * Los metodos agregados al objeto self del presente scope, son invocados 
// * Dentro del data-bind del componente (en el template)
// * Puedes pasar parametros como una función normal para trabjaar con los datos.

define(['ko'], ko => {
    var fdButtonModel = function(params) {

        console.log('Está entrando fdButtonModel')

        let self = this;

        self.clickButton = () => {

            console.log('Value desde clickButton: ', params.value)
            params.action('Hola desde el clickButton');

        }
    }
    return fdButtonModel;
})