const cookieParser = require('cookie-parser');
const { deleteServicesEndpoint } = require('./endpoints/services/deleteServices');
const { editServicesEndpoint } = require('./endpoints/services/editServices');
const { getServicesEndPoint, getServiceEndPoint } = require('./endpoints/services/getServices');
const { authenticateUserEndpoint } = require('./endpoints/users/Authencation');
const { editUserEndpoint } = require('./endpoints/users/EditUser');
const { getAllUsersEndPoint, getUserEndPoint } = require('./endpoints/users/GetUsers');
const { logoutEndPoint } = require('./endpoints/users/Logout');
const { createUserEndPoint } = require('./endpoints/users/SignUp');
const { initialize } = require('./FilesStorageUtility/initialize');



let app=require('express')();
initialize();

app.use(require('express').json());
app.use(cookieParser());
app.use(require('express').static('travelblog'))
//Registering Service Endpoint
app.get('/api/services/:serviceName',getServiceEndPoint);
app.get('/api/services/',getServicesEndPoint);//Get all services
app.put('/api/services',editServicesEndpoint);
app.delete('/api/services/:serviceName',deleteServicesEndpoint)



//Registering User Endpoints
app.post('/api/user',createUserEndPoint);
app.post('/api/user/authenticate',authenticateUserEndpoint);
app.put('/api/user',editUserEndpoint);
app.get('/api/users',getAllUsersEndPoint);
app.get('/api/user/:email?',getUserEndPoint);
app.get('/api/userlogout',logoutEndPoint);

app.listen(4292);