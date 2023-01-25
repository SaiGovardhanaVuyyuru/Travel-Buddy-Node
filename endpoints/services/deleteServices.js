const { deleteService } = require("../../FilesStorageUtility/service");

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
function deleteServicesEndpoint(req,res)
{
       try
       {
        console.log("Request Body", req.body)
        if(req.params.serviceName!=null)
        {
            let isDeleted=deleteService(req.params.serviceName);
            if(isDeleted)
                res.json({"success":true,"message":"Deleted.","toast-class":"bg-success"});
            else
                res.json({"success":false,"message":"Not Deleted.","toast-class":"bg-danger"});
        }
       }
       catch(E)
       {
            console.log("Error while deleting service. editService.js");
            res.json({"success":false,"message":"An error occured while deleting the service.","toast-class":"bg-danger"});

       }
}

exports.deleteServicesEndpoint=deleteServicesEndpoint;