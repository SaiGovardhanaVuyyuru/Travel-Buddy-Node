const { authenticateUser } = require("../../FilesStorageUtility/user");

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {*} next 
 */
function customerAuth(req,res,next)
{
    if(req.cookies.userCredentials==undefined||req.cookies.userCredentials==null)
        {   
            res.json({"success":false,"message":"Not Authorized","toast-classs":"bg-red"});
            
        }
    let userCredentials=JSON.parse(req.cookies.userCredentials);
    
    if(authenticateUser(userCredentials))
    {
        next();
    }
    else
    {   res.cookie('userCredentials',"{}",{maxAge:0});
        res.json({"success":false,"message":"Not Authorized","toast-classs":"bg-red"});
    }

}