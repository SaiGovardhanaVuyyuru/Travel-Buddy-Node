function processSignInRespone(data)
{
    ToastDisplay(data["message"],data["toast-class"]);
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
    
    $.ajax({"method":'POST',contentType:'application/json','data':JSON.stringify({"password":password,"email":email}),'url':'/api/user/authenticate',"success":(e)=>{processSignInRespone(e)},
    error:(e)=>{ToastDisplay("Error while logging in user","bg-danger");}
    });


}
let signInBtn=document.querySelector("#signIn");
signInBtn.addEventListener('click',()=>validate());