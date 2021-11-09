console.log('Hello from minimumDate.js!')
document.addEventListener("DOMContentLoaded", function() {
    console.log('Hello from minimumDate.js!')
    const dtToday = new Date();

    let month = dtToday.getMonth() + 1; // jan=0; feb=1 .......
    let day = dtToday.getDate();
    let year = dtToday.getFullYear() - 18;
    if (month < 10)
        month = '0' + month.toString();
    if (day < 10)
        day = '0' + day.toString();
    let minDate = year + '-' + month + '-' + day;
    let maxDate = year + '-' + month + '-' + day;

    document.querySelector('#dob').max = maxDate;
})