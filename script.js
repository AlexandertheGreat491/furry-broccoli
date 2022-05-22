/* The purpose of this project is to create a work day scheduler
for an employee with a busy schedule where they can add important eveants to a daily
planner and manage their time effectively.*/

// User opens the daily planner to create a schedule and the current day is displayed at the top of the calendar.
// User is presented with time blocks for that day in standard business hours.
// User views color-coded time-blocks to that day, indicating whether it is in the past, present, or the future.
// User clicks on the time block and can enter an event.
// User clicks on the save button for that timeblock, the text is save in local storage.
// User refreshes the page and the saved event persists.

var saveBtn = $(".saveBtn");

// set the format for the date that will display at the top of the work day schedule.

$("#currentDay").text(moment().format('YYYY MM DD'));
// timeblocks are color coded to indicated past, present, or future.
function colorBlock () {
    var hour = moment().hours();
    // moment().hour() method gets the current time.
// .each(function) will execute and iterate over the .time-block element.
    $(".time-block").each(function(){
    var currHour = parseInt($(this).attr("id"));
// selects the attribute that will be acted upon by this function & conditional statements.
    if (currHour > hour) {
$(this).addClass("future");
    } else if (currHour === hour) {
        $(this).addClass("present");
    } else {
        $(this).addClass("past");
    }
    })
};

// Event listener for when user clicks on the "Save" button.

saveBtn.on("click", function(){
    var time = $(this).siblings(".hour").text();
    var dailyEvent = $(this).siblings(".dailyEvent").val();

    // Event will be saved in local storage.
    localStorage.setItem(time, dailyEvent);
});

// After the page is refreshed the saved events persist.

function schedulerUsage() {
    $(".hour").each(function(){
        var currHour = $(this).text();
        var currDailyEvent = localStorage.getItem(currHour);
    
        if(currDailyEvent !== null) {
            $(this).siblings(".dailyEvent").val(currDailyEvent);
        }
    });
    
}