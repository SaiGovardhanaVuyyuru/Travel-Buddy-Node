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
