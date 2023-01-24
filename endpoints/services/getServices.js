const { getServices } = require("../../FilesStorageUtility/service");

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
function getServicesEndPoint(req,res)
{
    res.json({success:'true',data:getServices()});

}

function getServiceEndPoint(req,res)
{    
    
    let services=getServices();
    res.json(services[req.params["serviceName"]]);
}

exports.getServicesEndPoint=getServicesEndPoint;
exports.getServiceEndPoint=getServiceEndPoint;