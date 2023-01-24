const { getUsers, getUser,authenticateUser } = require("../../FilesStorageUtility/user");

/**
 * Function reurn users.json
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
function getAllUsersEndPoint(req,res)
{   
    
    res.json({success:true,data:getUsers()});
}   

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
function getUserEndpoint(req,res)
{
    let email=req.params.email;

    //No cookie exit
    if(req.cookies.userCredentials == undefined)
    {
        res.redirect('/index.html');
        return;
    
    }
    
    if(email==undefined)
        email=JSON.parse(req.cookies.userCredentials)["email"];
    //Cookie and param dont match
    if(JSON.parse(req.cookies.userCredentials)["email"]!=email)
        {
            res.redirect('/index.html');
            return ;
        }

    //Check if cookie correct
    if(authenticateUser(JSON.parse(req.cookies.userCredentials)))
    {
        res.json({"success":true,"message":"Success Got the Profile","toast-class":"bg-success",data:getUser(email)});
        return;
    }
    else
    {

    }

}
exports.getAllUsersEndPoint=getAllUsersEndPoint
exports.getUserEndPoint=getUserEndpoint;