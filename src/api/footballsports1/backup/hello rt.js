module.exports = {
    routes :[{
        method : 'GET',
        path : '/custom',
        handler : 'hello.customAction',
        config:{
            auth : false,
        }
    }]
} 