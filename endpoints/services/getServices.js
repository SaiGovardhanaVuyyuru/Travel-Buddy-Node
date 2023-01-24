const { getServices } = require("../../FilesStorageUtility/service");

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
function getServicesEndPoint(req,res)
{
    res.json(getServices());

}

function getServiceEndPoint(req,res)
{    
    console.log("HERE");
    let services=getServices();
    res.json(services[req.params["serviceName"]]);
}

exports.getServicesEndPoint=getServicesEndPoint;
exports.getServiceEndPoint=getServiceEndPoint;