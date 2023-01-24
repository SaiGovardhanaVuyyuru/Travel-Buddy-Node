function AfterGettingUser(user){
    user=user.data;
    let signInButton=document.body.querySelector("#signIn");
    let signOutButton=document.body.querySelector("#signOut");
    
    if(user!=null)
        {
            signInButton.classList.add('d-none');
            console.log(user.name);
            if(user.role=='admin')
            {   
                signOutButton.querySelector('ul').innerHTML='<li><a href="userpanel.html">Users Panel</a></li><li><a href="servicepanel.html">Service Panel</a></li>'+signOutButton.querySelector('ul').innerHTML;
            }
            signOutButton.querySelector('span').innerText=user.name;
            signOutButton.querySelector('span').style.fontWeight="bolder";
            signOutButton.querySelector('span').style.color="white";
            signOutButton.classList.remove('d-none');
        }
        let dropDownUser=document.body.querySelector('#signOut').querySelectorAll('a');
        let signOut=dropDownUser[dropDownUser.length-1];
        signOut.onclick=logout
}

function renderNavBar()
{
 
    $.ajax({"method":'GET','url':'/api/user/',"success":(e)=>{AfterGettingUser(e)},
    error:(e)=>{ToastDisplay("Error couldn't fetch  users details","bg-danger");}
    });






}
function logout()
{   
    $.ajax({"method":'GET','url':'/api/userlogout',"success":(data)=>
    {
        ToastDisplay(data.message,data["toast-class"]);
        if(data["success"])
            {
                setTimeout(()=>window.location.reload(),1500);
            }
    },
    error:(e)=>{ToastDisplay("Error couldn't fetch  users details","bg-danger");}
    });

}
renderNavBar();
