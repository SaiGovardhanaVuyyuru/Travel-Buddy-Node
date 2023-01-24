let name=document.querySelector("#name");
let email=document.querySelector("#email");
if(getUserLoggedIn()!=null)
{   let user=getUserLoggedIn();
    name.value=user.name;
    email.value=user.email;
}