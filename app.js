document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector('form');
    var campActivitiesInquiry = document.getElementById('camp-activities-inquiry');

    form.addEventListener('submit', function (event) {
        var activitySelect = document.getElementById('activity-select');
        var activityValue = activitySelect.value;

        if (activityValue === "") {
            alert("Please choose an activity.");
            event.preventDefault();
        } else {
            // Display a gratitude message
            campActivitiesInquiry.innerHTML = "<p class='centered-message submitted-message'>Congratulations! Thank you for submitting the form.</p>";
            event.preventDefault();
        }
    });
});
