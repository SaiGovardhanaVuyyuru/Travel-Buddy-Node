function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return true;
  }
    
    return false;
}

function validate()
{
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value;
    if(email.length==0||password.length==0)
        {
           ToastDisplay("Please enter the fields.","bg-danger");

            return ;
        }
    if(!ValidateEmail(email))
    {
        ToastDisplay("Please enter a valid email","bg-danger");
    }
    let user=getUser(email);
    
    if(user == null)
    {   
        ToastDisplay("Couldn't find user.","bg-danger");
        return ;
    }
    if(!Login(email,password))
        ToastDisplay("Incorrect Password Bro!!","bg-danger");
    else
    {  
        ToastDisplay(`Welcome ${user.name} Bro!!`,"bg-success");
        setTimeout(()=>window.location.replace('index.html'),1500);
    }

}
let signInBtn=document.querySelector("#signIn");
signInBtn.addEventListener('click',()=>validate());