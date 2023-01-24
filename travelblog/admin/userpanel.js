function renderUserCard(user)
{   if(user==null)
        console.log("ERROR");
    if(user.address==undefined)
        user.address="Not Specified.";
    if(user.dob==undefined)
        user.dob="Not Specified";
    return (`<div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
    <div class="mycard card">
      <div class="card-img">
        <img src="./assets/img/pfdef.jpg" alt=""  class="card-img-top">
      </div>
    
      <p class="h5">Email: ${user.email}</p>
      <p class="h5">Name: ${user.name}</p>
      <p class="h5">DOB: ${user.dob}</p>
      <p class="h5">Address: ${user.address}</p>
    </div>
  </div><!-- End Card Item -->`

    );
}

function renderUsers()
{
    let users=getUsers();
    let rendered="";
    for(let user of users)
        rendered+=renderUserCard(user);
    document.querySelector('#service-container').innerHTML=rendered;

}
$('.selector').iconpicker(".selector");
renderUsers();