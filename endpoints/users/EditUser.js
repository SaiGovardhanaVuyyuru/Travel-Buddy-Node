const { saveUser, getUser } = require("../../FilesStorageUtility/user");
/**
 * Endpoint Function for Editing User
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
function editUserEndpoint(req,res)
{
    let {email,password}=req.body;
    
    if(email==undefined||password==undefined)
    {
        res.json({'success':false,'toast-class':'bg-danger','message':"Missing Fields."});
        return ;
    }
    let user=getUser(email);
    if(user==null)
    {
        res.json({'success':false,'toast-class':'bg-danger','message':"Couldn't Find the User"});
        return;
    }
    if(user.password!=password)
    {
        res.json({'success':false,'toast-class':'bg-danger','message':"Invalid Password."});
        return;
    }
    saveUser(req.body);
    return res.json({'success':true,'toast-class':'bg-success','message':"Successfully made changes to user.","data":user});

}

exports.editUserEndpoint=editUserEndpoint;