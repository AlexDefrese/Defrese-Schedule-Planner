var currentTime = moment().format('MMMM Do YYYY');
var currentHour = moment().format('HH');
// var hour = moment().hours();

// text hour varibles

// displays time
$("#currentDay").html(currentTime);

// changes background depending on past/present/future compared to current time
function backgroundColor () {
 $(".form-inline").each(function () {
   var schTime = ($(this).attr("id"));
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

// save button saves form submission on click

$(".saveBtn").on("click",
    function (event) {
        var value = $(this).siblings('.form-control').val();
        var key = $(this).parent().parent().attr('id');
        console.log(key);
        localStorage.setItem(key, value);
    }
);

// set local storage for each hour
$('#9').children('.col-sm-10').children('.form-control').val(localStorage.getItem('9'));

$('#10').children('.col-sm-10').children('.form-control').val(localStorage.getItem('10'));

$('#11').children('.col-sm-10').children('.form-control').val(localStorage.getItem('11'));

$('#12').children('.col-sm-10').children('.form-control').val(localStorage.getItem('12'));

$('#13').children('.col-sm-10').children('.form-control').val(localStorage.getItem('13'));

$('#14').children('.col-sm-10').children('.form-control').val(localStorage.getItem('14'));

$('#15').children('.col-sm-10').children('.form-control').val(localStorage.getItem('15'));

$('#16').children('.col-sm-10').children('.form-control').val(localStorage.getItem('16'));

$('#17').children('.col-sm-10').children('.form-control').val(localStorage.getItem('17'));

