/* The purpose of this project is to create a work day scheduler
for an employee with a busy schedule where they can add important eveants to a daily
planner and manage their time effectively.*/

// User opens the daily planner to create a schedule and the current day is displayed at the top of the calendar.
// User is presented with time blocks for that day in standard business hours.
// User views color-coded time-blocks to that day, indicating whether it is in the past, present, or the future.
// User clicks on the time block and can enter an event.
// User clicks on the save button for that timeblock, the text is save in local storage.
// User refreshes the page and the saved event persists.


// set the format for the date that will display at the top of the work day schedule.
var currentDay =
$("#currentDay").text(moment().format('dddd, MMM Do YYYY'));

$(document).ready(function(){
// Allows the page to be manipulated safely.
// Event listener for the save button.
$(".saveBtn").on("click", function(){
    //Retrieves the nearest values of the description.
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    //.siblings() gets the siblings of the set of elements that match.
    //.parent() gets the parent of the matching element.

    // The text will be saved to local storage.
    localStorage.setItem(time, text);
})
});

function daySchedule() {

}
