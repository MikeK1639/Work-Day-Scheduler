// This is the function to wrap the JS to apply to the DOM
$(function () {
var saveButton = $('.saveBtn'); 
// Save button function

function displayTime() {
var rightNow = dayjs().format('MM DD, YYYY hh:mm:ss'); 
$('#currentDay').text(rightNow) 
console.log(rightNow);

// This is the function that runs the clock and date for the header


}


$(".time-block").each(function(){
  console.log("Hello");
  const hour = parseInt( $(this).attr("id").split('-')[1]);
  var currentHour = dayjs().hour()
  if (hour < currentHour) {
  $(this).addClass('future')
  
  } else if (hour === currentHour) {
    $(this).addClass('present') 
  } else {
    $(this).addClass('future'); 
  
  
  }
  })

// This is the if then statement for the time-blocks to change with the past,present, and future time cycles.
 


 


saveButton.click()



setInterval(displayTime,1000);

}
 
);
