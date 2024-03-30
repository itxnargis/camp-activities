document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector('form');
    var campActivitiesInquiry = document.getElementById('camp-activities-inquiry');

    form.addEventListener('submit', function (event) {
            campActivitiesInquiry.innerHTML = "<p class='centered-message submitted-message'>Thank you for submitting the form.</p>";
            event.preventDefault();
    });
});
