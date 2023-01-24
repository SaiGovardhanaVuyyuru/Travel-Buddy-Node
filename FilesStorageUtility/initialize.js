let fs=require('fs');

/**
 *Initialize  files to create folders.
 */
function initialize()
{
    if(!fs.existsSync('./users/'))
    {   fs.mkdirSync('./users');
    fs.writeFileSync('./users/users.json',`{"admin@admin.com":{"email":"admin@admin.com","name":"Admin","password":"1234","role":"admin"}}`);
        console.log("Created User Folder And JSON");
    }
    if(!fs.existsSync('./users/users.json'))
    {
        fs.writeFileSync('./users/users.json',`{"admin@admin.com":{"email":"admin@admin.com","name":"Admin","password":"1234","role":"admin"}}`);
        console.log("Created Users.json");
    }

    if(!fs.existsSync('./services/'))
    {   fs.mkdirSync('./services');
        fs.writeFileSync('./services/services.json',"{}");
        console.log("Created Service Folder And JSON");
    }
    if(!fs.existsSync('./services/services.json'))
    {
        fs.writeFileSync('./services/services.json',"{}");
        console.log("Created Service.json");
    }

}
exports.initialize=initialize;