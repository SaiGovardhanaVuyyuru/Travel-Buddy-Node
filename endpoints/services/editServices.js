const { addService } = require("../../FilesStorageUtility/service");

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
function editServicesEndpoint(req,res)
{
       try
       {
        console.log("Request Body", req.body)
        if(req.body["service-name"]!=null)
            addService(req.body);
        res.json({"success":true,"message":"Changed the service."});

       }
       catch(E)
       {
            console.log("Error while editing service. editService.js");
            res.json({"success":false,"message":"An error occured while adding the service."});

       }
}

exports.editServicesEndpoint=editServicesEndpoint;