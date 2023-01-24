function processSignUpResponse(data)
{
    
    ToastDisplay(data["message"],data["toast-class"])   
    if(data["success"])
        setTimeout(()=>window.location.replace('index.html'),1500);
}

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return true;
  }
    
    return false;
}

function ValidateSignUp()
{   
    let name=document.querySelector('#name').value;
    let password=document.querySelector('#password').value;
    let repassword=document.querySelector('#repassword').value;
    let email=document.querySelector('#email').value;
    if(!ValidateEmail(email))
    {
            ToastDisplay("Invalid Email","bg-danger");
            return ;
    }
    if(name.length<3)
    {
        ToastDisplay("Name should be atleast 3 characters","bg-danger");
        return ;
    }

    if(password.length<4)
    {
        ToastDisplay("Password should be atleast 4 characters","bg-danger");
        return;
    }



    if(password!=repassword)
    {
        ToastDisplay("Passwords Don't Match","bg-danger");
        return ;
    }


        try
        {   
            $.ajax({"method":'POST',contentType:'application/json','data':JSON.stringify({"name":name,"password":password,"email":email}),'url':'/api/user/',"success":(e)=>{processSignUpResponse(e)},
                    error:(e)=>{ToastDisplay("Error while signing up user","bg-danger");}
                });
            
            

        }
        catch(E)
        {   ToastDisplay("Error while signing up user","bg-danger");
            console.log(E);
        }
    
}

let signOutBtn=document.querySelector('#signUp');
signOutBtn.addEventListener('click',ValidateSignUp);