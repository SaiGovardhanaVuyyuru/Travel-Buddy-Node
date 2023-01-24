function editClick()
{
    let usernameInput=document.querySelector('#name');
    let dobInput=document.querySelector('#dob');
    let addressInput=document.querySelector('#address')

    usernameInput.disabled=!usernameInput.disabled;
    dobInput.disabled=!dobInput.disabled;
    addressInput.disabled=!addressInput.disabled;

    if(usernameInput.disabled)
        ToastDisplay('Editing is disabled','bg-danger');
    else
        ToastDisplay('Editing is enabled','bg-success');

}
document.querySelector('#edit').addEventListener('click',editClick);

function autoFill()
{


        let user=JSON.parse(localStorage.getItem('currentUser'));
        document.querySelector('.data-name').innerText=user.name;
        document.querySelector('#name').value=user.name;
        document.querySelector('#email').value=user.email;
        if(user.dob!=null)
            document.querySelector('#dob').value=user.dob;
        if(user.address!=null)
            document.querySelector('#address').value=user.address;


    

}

function Save()
{   let newChanges={};

    newChanges.name=document.querySelector('#name').value;
    newChanges.email=document.querySelector('#email').value;
    newChanges.dob=document.querySelector('#dob').value;
    newChanges.address=document.querySelector('#address').value;
    
    try{
    if(newChanges.name.length<3)
        {   ToastDisplay('Name requires a minimum 3 characters!','bg-danger');
            return ;
        }
    else
    {
        editUser(newChanges);
        ToastDisplay('Changes Updated!','bg-success');
    }
    }
    catch(E)
    {
        ToastDisplay('Oops an error occured!!','bg-danger');
        console.log(E);
    }

    setTimeout(()=>window.location.reload(),1000);


}
document.querySelector('#save').onclick=Save;
autoFill();