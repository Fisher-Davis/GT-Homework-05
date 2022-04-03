var currentDate = moment().format("MMM Do YYYY")
var currentTime = moment().format("hh:mm:ss")

var thisHour = 
$("#currentDay").text(currentDate);

$(".saveBtn").on('click',function(){
    var textArea = $(this).siblings(".textarea").val()
        localStorage.setItem("9am",textArea)
})

$(window).on("load",function(){
    


})


// function evaulateTime(){
//     if(document.getElementById("#9am") = currentTime)
//        }  




 for (i = 9; i <= 17; i++) {

        if (i < thisHour) {
        $("#9am" + i).addClass("past");
        } else if (i > thisHour) {
        $("#" + i).addClass("future");
        } else {
        $("#" + i).addClass("present");
        }
   }