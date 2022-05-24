/* The purpose of this project is to create a work day scheduler
for an employee with a busy schedule where they can add important eveants to a daily
planner and manage their time effectively.*/

// User opens the daily planner to create a schedule and the current day is displayed at the top of the calendar.
// User is presented with time blocks for that day in standard business hours.
// User views color-coded time-blocks to that day, indicating whether it is in the past, present, or the future.
// User clicks on the time block and can enter an event.
// User clicks on the save button for that timeblock, the text is save in local storage.
// User refreshes the page and the saved event persists.

$(document).ready(function () {
    // Allows the page to be manipulated safely.
    // Set the format for the date that will display at the top of the work day schedule.
    // Uses moment() to get the date for a particular day.
    $("#today").text(moment().format("dddd, MMM Do YYYY "))

    // Event listener for the save button.
    $(".saveBtn").on("click", function () {

        /* Retrieves the nearest values of the description class and the id attribute 
        when the button saveBtn class is clicked.*/

        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // The .siblings() method gets the siblings of the set of elements that match.
        // The .parent() method gets the parent of the matching element with the id attribute.

        // The text entered by the user will be saved to local storage.

        localStorage.setItem(time, text);
    })

    function dailyEvents() {

        // Uses moment().hours() method to get the hours from the current time.

        var currentTime = moment().hours();

        // Timeblocks loop

        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1])
            // parseInt method parses a value as a string and returns the first integer.
            /* split() method divides a string into an ordered list of substrings,
            puts these substrings into an array, and returns the array. The
            division is done by searching for a pattern & the first parameter in that pattern comes first in this method's call.*/

            // These conditions check the time and add the classes to designate the timeblocks as being in the past, present, or the future.

            if (blockTime > currentTime) {
                $(this).addClass("future");
            } else if (blockTime === currentTime) {
                $(this).addClass("present");
            } else {
                $(this).addClass("past");
            }
        })
    }

    // The the value will be retrieved from local storage depending on the id that the value is associated with.

    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));


    dailyEvents();

})