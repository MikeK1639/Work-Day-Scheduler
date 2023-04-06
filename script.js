// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
var saveButton = $('.saveBtn'); 
var hour = $('#currentDay');

function displayTime() {
var rightNow = dayjs().format('MM DD, YYYY'); 
timeDisplay.text(rightNow)


}


const currentHour = new Date().getHours();
const timeBlocks = document.querySelectorAll('.timeBlock'); 

timeBlocks.forEach(timeBlock.id.split('-')[1]) => {
  const hour = parseInt(timeBlock.id.split('-')[1]);

if (hour < currentHour) {
timeBlock.classlist.add('past')

} else if (hour === currentHour) {
timeBlocks.classlist.add('present') 
} else {
timeBlock.classlist.add('future'); 
$(this).removeClass('past')
$(this).removeClass('present')

}
}

saveButton.click()


displayTime()
setInterval(displayTime,1000);

}
 
);
