let name=document.querySelector("#name");
let email=document.querySelector("#email");

$.ajax({"method":'GET','url':'/api/user/',"success":(e)=>{
    if(e.data!=null)
    {
        name.value=e["data"].name;
        email.value=e["data"].email;
    }
},
error:(e)=>{ToastDisplay("Error couldn't fetch  users details","bg-danger");}
});