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

function autoFill(user)
{


        
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
        $.ajax({"method":'PUT',contentType:'application/json','url':'/api/user/',data:JSON.stringify(newChanges),"success":(e)=>{

            ToastDisplay(e["message"],e["toast-class"]);
            setTimeout(()=>window.location.reload(),1000);
        },
        error:(e)=>{ToastDisplay("Error couldn't fetch  users details","bg-danger");}
        });

        
        
    }
    }
    catch(E)
    {
        ToastDisplay('Oops an error occured!!','bg-danger');
        console.log(E);
    }

    


}
document.querySelector('#save').onclick=Save;
$.ajax({"method":'GET','url':'/api/user/',"success":(e)=>{autoFill(e.data);},
error:(e)=>{ToastDisplay("Error couldn't fetch  users details","bg-danger");}
});
