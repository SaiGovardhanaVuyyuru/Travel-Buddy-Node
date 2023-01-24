//row gy-4 pricing-item featured mt-4

//row gy-4 pricing-item
let elements=document.querySelectorAll('.pricing-item');
console.log(elements);
function onMouseOver(e)
{   

    e.target.classList.add('featured');

}
function onMouseOut(e)
{
    e.target.classList.remove('featured');
}

elements.forEach(x=>x.onmouseenter=onMouseOver)
elements.forEach(x=>x.onmouseleave=onMouseOut);
yo
