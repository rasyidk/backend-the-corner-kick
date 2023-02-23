module.exports = {
    routes: [{
        method : 'GET',
        path: '/footballsports11/me',
        handler : 'footballsports1.me',
        config : {
            policies : [],
        }
    },
    
    // {
    //     method : 'DELETE',
    //     path: '/footballsports11/me/:id',
    //     handler : 'footballsports1.delete',
    //     config : {
    //         policies : [],
    //     }
    // },{
    //     method : 'PUT',
    //     path: '/footballsports11/me/:id',
    //     handler : 'footballsports1.update',
    //     config : {
    //         policies : [],
    //     }
    // }
]
}