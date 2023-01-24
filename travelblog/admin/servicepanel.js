function getAllDetails()
{
    let vals=document.querySelectorAll('input');
    let serviceObj={}
    for(let x of vals)
        serviceObj[x.id]=x.value;
    return serviceObj;
  
}

function saveService(service)
{   let services={}
    if(localStorage.getItem('services')!=null)
        services=JSON.parse(localStorage.getItem('services'));
    services[service['service-name']]=service;
    ToastDisplay('Saving Service','bg-success');
    localStorage.setItem('services',JSON.stringify(services));
}




function deleteService(service)
{
    let services={};
    if(localStorage.getItem('services')!=null)
        services=JSON.parse(localStorage.getItem('services'));
    
    if(service["service-name"]  in services)
    {
        ToastDisplay('Found Service and Deleted','bg-success');
        let newServices={};
        for(let [k,v] of Object.entries(services))
            if(k!=service['service-name'])
                newServices[k]=v;
        localStorage.setItem('services',JSON.stringify(newServices));
    }
    else
        ToastDisplay('Could Not Find Service To Delete','bg-danger');

}
function listenServicName(e)
{   let services={};
    if(localStorage.getItem('services')!=null)
        services=JSON.parse(localStorage.getItem('services'));

    let serviceName=e.target.value;
    if(serviceName in services)
        {   let dataObj=services[serviceName];
            let inputs=document.querySelectorAll('input');
            for(let x of inputs)
            {
                if(x.id in dataObj)
                    x.value=dataObj[x.id];
            }
        }

}
document.querySelector('#service-name').addEventListener('keyup',listenServicName);
document.querySelector('.submit').addEventListener('click',()=>{let obj=getAllDetails();saveService(obj)});

document.querySelector('.delete').addEventListener('click',()=>{let obj=getAllDetails();deleteService(obj)});