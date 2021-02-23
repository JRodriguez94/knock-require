require.config({
    paths: {
        ko: '/js/libs/knockout',
        jquery: '/js/libs/jquery',
        text: '/js/libs/text',
        loader: '/js/loader',
        test: '/modules/test'
    },
    baseUrl: '/'
});


require(['ko', 'loader'], function(ko){
    console.log('Entra al primer require con ko: ', ko);
});