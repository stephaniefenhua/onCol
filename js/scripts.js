/*!
* Start Bootstrap - Freelancer v7.0.3 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


var submitBtn = $('.submit-btn');
var container = $('.card-container');

submitBtn.on("click", appendList); 

function appendList(){
  
  var name = $('.name').val();
  var email = $('.email').val();
  var starting = $('.starting-building').val();
  var ending = $('.ending-building').val();
  var time = $('.time').val();

  if(name === "") {
    name = "User";
  }
  if(email === "") {
    email = "name@email.com";
  }
  if(starting === "") {
    starting = "Building 1";
  }
  if(ending === "") {
    ending = "Building 2";
  }
  if(time === "") {
    time = "7 PM";
  }

  //takes values from radio options in start and end building quesitons
  // var starting = document.getElementByld("starting").val();
  // var ending = document.getElementByld("ending").val();
  container.append(`
  <div class="profile">
    <p class="profile-name">${name}</p>
    <p class="profile-email">${email}</p>
    <p class="profile-path inline">Path: </p>
    <p class="profile-starting inline">${starting} to ${ending}</p>
    <p class="profile-time"><br>Starting at ${time}</p>
  </div>
  `);

//clears name and email from input boxes
  var nameInput = $(".name");
  nameInput.val("");
  var emailInput = $(".email");
  emailInput.val("");
  var startingInput = $(".starting-building");
  startingInput.val("");
  var endingInput = $(".ending-building");
  endingInput.val("");
  var timeInput = $(".time");
  timeInput.val("");

  event.preventDefault(); 
};

function Profile(name, email) {
  this.name = name;
  this.email = email;
}