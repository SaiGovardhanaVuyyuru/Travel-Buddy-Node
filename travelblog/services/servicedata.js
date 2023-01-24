let staticServices={
    "Transport Help":
    {
        "service-description":"Reach your destinations with ease. Choose from various modes Of transport that satisfy your needs.",
        "service-icon":"fa-cab",   
        "service-img":"./assets/img/bus.jpg",
        "service-details-image":"./assets/img/cab.jpg",
        "service-details-title":"Transport made available for you 24/7.",
        "service-details-description":"Choose the transport of your choice. Our partners are the best in their region.Not need to worry about saftey.There are no hidden costs. Your satisfaction is our number one priority.Book a cab with a driver, have a license? then you can rent a car for the day. Need to go across cities fast then we got you covered.We can give you airplane tickets at the lowest price. Want to travel with other visitors, then you can choose our tour buses running across cities daily."
    },
    "Hotels Help":
    {   
        "service-description":"Choose from a variety of hotels for accomidations that best suits your requirements.",
        "service-icon":"fa-hotel",
        "service-img":"./assets/img/hotels.jpg",
        "service-details-image":"./assets/img/resort.jpg",
        "service-details-title":"Hotels for your accomidation",
        "service-details-description":"We have a suite of hotels ranging from 3-stars, 5-stars and resorts.And the funny thing is that the hotels that do decide to be more creative, those who allow new approaches, win. One important thing to state right here is that creative doesn’t mean it has to be expensive. Even better: it might turn out cheaper than your normal way of advertising.It's never been more important to differentiate yourself from the rest. Of course, first and foremost you should do this through your provided services. The quality of the hospitality you offer should be your top priority. But communication should come next and that's where authenticity and creativity come into play. If you're able to communicate your unique features, your specific experience, in a different way then your guests are way more likely to remember you, to write reviews about you and to book with you in the first place."
    },
    "Tours Help":
    {   "service-description":"We take care of your transport, accomidation, sight seeing. Make you journey and vacation easier.",
        "service-icon":"fa-map-location-dot",
        "service-img":"./assets/img/tour.jpg",
        "service-details-image":"./assets/img/tour-guide.jpg",
        "service-details-title":"Tours across the country.",
        "service-details-description":"Visit the places with the local tour guides making your vacation much more easier. Tours include transport, accomidation and sigh-seeing. Tours can be adjusted according to your needs. Opt for better options which meets your requirements."
    }


};
if(localStorage.getItem("services")==null)
{
    localStorage.setItem("services",JSON.stringify(staticServices));
    console.log("SAVED services");
}
else
    console.log("ALREADY THERE");