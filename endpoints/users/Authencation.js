const { getUser } = require("../../FilesStorageUtility/user");

/**
 * Endpoint Function for authentication
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
function authenticateUserEndpoint(req,res)
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
    res.cookie("userCredentials",JSON.stringify({email:email,name:user.name,password:password}),{maxAge:900000});
    return res.json({'success':true,'toast-class':'bg-success','message':`Successfully Logged in ${user.name}`,"data":user});

}

exports.authenticateUserEndpoint=authenticateUserEndpoint;