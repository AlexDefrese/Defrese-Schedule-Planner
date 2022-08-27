var currentTime = moment().format('MMMM Do YYYY');
var currentHour = moment().format('HH');
// var hour = moment().hours();

// text hour varibles

// displays time
$("#currentDay").html(currentTime);


function backgroundColor () {
 $(".form-control").each(function () {
   var schTime = parseInt($(this).attr("id"));
   var hour =  parseInt(currentHour);

   if (hour > schTime) {
    $(this).addClass("past");
   }else if (hour < schTime) {
    $(this).addClass("future");
   }else {
    $(this).addClass("present");
   }

 });
}

backgroundColor ();

$("#saveBtn").on("click",
    function () {
        localStorage.setItem('form-control', form-control);
    }
);
console.log(localStorage);