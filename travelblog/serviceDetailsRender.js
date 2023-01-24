function serviceDetailsRender(services){
let serviceContainer=document.querySelector("#service-container");
function renderCard(serviceName,serviceDetailsImg,serviceDetailsTitle,serviceDetailsDescription)
{   
    let className="";
    if(window.location.hash!=`#${replaceSpaces(serviceName)}F`)
        className="d-none";
    return (`<div id="${replaceSpaces(serviceName)}" class="myservicesdivactive myservicesdiv col-lg-8 ${className}">
    <img src="${serviceDetailsImg}" alt="" class="img-fluid services-img">
    <h3>${serviceDetailsTitle}</h3>
    <p>${serviceDetailsDescription}</p>
  </div>`
    );
}
function renderNav(services)
{

    let renderedString="";
    for(let [ key,value] of Object.entries(services))
    {   let className="";
        if(window.location.hash==`#${replaceSpaces(key)}F`)
            className="active";
        renderedString+=`<a data-service-div=${replaceSpaces(key)} id="${replaceSpaces(key)}Link"  class="myservices ${className}">${key}</a>`;
    }
    return renderedString;
}
function renderCards(services)
{

let renderedString="";
 for(let [key,value] of Object.entries(services))   
 {  if(window.location.hash=='')
        window.location.replace(`#${replaceSpaces(key)}F`);
    renderedString+=renderCard(key,value["service-details-image"],value['service-details-title'],value["service-details-description"]);
 }

return renderedString;

}

serviceContainer.innerHTML+= renderCards(services);
document.querySelector('#service-details-nav-items').innerHTML=renderNav(services);

function genericFocus(e)
{
    
    document.querySelectorAll('.myservices').forEach(x=>x.classList.remove('active'));
    e.target.classList.add('active');
    document.querySelectorAll('.myservicesdiv').forEach(x=>{x.classList.add('d-none');x.classList.remove('myservicesdivactive');});
    document.querySelector(`#${replaceSpaces(e.target.getAttribute('data-service-div'))}`).classList.remove('d-none');
    setTimeout(()=>document.querySelector(`#${replaceSpaces(e.target.getAttribute('data-service-div'))}`).classList.add('myservicesdivactive'),100);
}

let navs=document.querySelector("#service-details-nav-items").querySelectorAll('a');
navs.forEach(x=>x.addEventListener('click',genericFocus));
console.log(navs);
}

$.ajax({'method':"GET","url":'/api/services',

success:function(e)
{
  serviceDetailsRender(e.data);
},
error:function(e)
{
  ToastDisplay("Error While Loading services :(",'bg-danger');
}

});