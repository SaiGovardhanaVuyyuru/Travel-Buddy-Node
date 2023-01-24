let fs=require('fs');

/**
 *Initialize  files to create folders.
 */
function initialize()
{
    if(!fs.existsSync('./users/'))
    {   fs.mkdirSync('./users');
        fs.writeFileSync('./users/users.json',"{}");
        console.log("Created User Folder And JSON");
    }
    if(!fs.existsSync('./users/users.json'))
    {
        fs.writeFileSync('./users/users.json',"{}");
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