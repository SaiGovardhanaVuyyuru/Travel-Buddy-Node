let fs=require('fs');

function addService(service)
{
    let services=JSON.parse(fs.readFileSync('./services/services.json'));
    services[service["service-name"]]=service;
    fs.writeFileSync('./services/services.json',JSON.stringify(services));
    return true;
}

function deleteService(serviceName)
{
    let services=JSON.parse(fs.readFileSync('./services/services.json'));
    if(serviceName in services )
        {
            let newServices={}
            for(let [key,value] of Object.entries(services))
                if(key!=serviceName)
                    newServices[key]=value;
            
            fs.writeFileSync('./services/services.json',JSON.stringify(newServices));        
            return true;
        }
    else
        return false;
}

function getServices()
{

    return JSON.parse(fs.readFileSync('./services/services.json'));
}

exports.addService=addService;
exports.deleteService=deleteService;
exports.getServices=getServices;