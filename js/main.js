/*********************************************************************
 ***
 *Original Author: Derek Little                                    *
 *Date Created: 9/11/2022                                       *
 *Version: 0.1                                                *
 *Date Last Modified: 9/28/2022                             *
 *Modified by: Derek Little                                          *
 *Modification log: 
 V0.0~ Added everything, still working on getting things working correctly.
 V0.1~ Revised all JS code.
        added js code specifically for the FAQ page.
 V0.2~ Added JS to the bottom for the Slideshow, won't work though.                                  *
 ***
 ******************************************************************** */

const $ = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
  $("#join_list").addEventListener("click", () => {
    // get values user entered in textboxes
    const email1 = $("#email_1").value;
    const email2 = $("#email_2").value;
    const firstName = $("#first_name").value;

    // create an error message and set it to an empty string
    let errorMessage = "";

    // check user entries - add text to error message if invalid
    if (email1 == "") {
      errorMessage += "Oops! First email is required.\n";
    }

    if (email2 == "") {
      errorMessage += "Oops! Second email is required.\n";
    }

    if (email1 != email2) {
      errorMessage += "Oops! Both emails must match.\n";
    }

    if (firstName == "") {
      errorMessage += "Oops! First name is required.\n";
    }

    // submit the form if error message is an empty string
    if (errorMessage == "") {
      $("#email_form").submit();
    } else {
      alert(errorMessage);
    }
  });

  $("#clear_form").addEventListener("click", () => {
    $("#email_1").value = "";
    $("#email_2").value = "";
    $("#first_name").value = "";

    $("#email_1").focus();
  });

  $("#email_1").focus();
});
//---------------------------------JS for FAQ page----------------------------------------------
const q = document.querySelectorAll(".q");
const n = document.querySelectorAll(".n");
const arr = document.querySelectorAll(".arrow");

//select all 'q' elements
for (let i = 0; i < q.length; i++) {
  //Add click event to all 'q' elements
  q[i].addEventListener("click", () => {
    /*Open the n 'element' with the same 'i' as the clicked 'q' element*/
    n[i].classList.toggle("n-opened");
    /*Rotate the arr 'element' with the same 'i' as the clicked 'q' element*/
    arr[i].classList.toggle("arrow-rotated");
  });
}
//---------------------------------JS for Slideshow----------------------------------------------
$(document).ready(() => {
  let nextSlide = $(".slides img:first-child");

  // start slide show
  setInterval(() => {
    $("#caption").hide(1000);
    $(".slide").slideUp(2000, () => {
      if (nextSlide.next().length == 0) {
        nextSlide = $(".slides img:first-child");
      } else {
        nextSlide = nextSlide.next();
      }
      const nextSlideSource = nextSlide.attr("src");
      const nextCaption = nextSlide.attr("alt");
      $(".slide").attr("src", nextSlideSource).slideDown(2000);
      $(".caption").text(nextCaption).show(1000);
    }); // end fadeOut()
  }, 5000); // end setInterval()
});
