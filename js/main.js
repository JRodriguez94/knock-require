// ? Configuracion para la libreria de Require

// ? Punto de entrada para localizar las dependencias de require
// ? Se definen las rutas en el objeto paths de config.
// ? Si no es definida la propuedad baseUrl, el path base
// ? Será relativo a la rura de este archivo
require.config({
    paths: {
        ko: 'libs/knockout',
        jquery: 'libs/jquery',
        text: 'libs/text',
        // loader: '/js/loader',
    },
    // baseUrl: ''
});

// ? Require para mandar a llamar el archivo loader
// ? Se le pasa como parametros las dependencias de las que
// ? hará uso. Nota: Parece que la dependencia del archivo 
// ? 'loader.js' no es necesaria dentro de paths, pero si no
// ? se pasa como parametro, no se puede acceder al archivo y
// ? por lo tanto no sigue el flujo de ejecución
require(['ko',  'loader'], (ko) => {
    console.log('Entra al require de MAIN: ');
});