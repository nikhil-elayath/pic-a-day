export default  formatDate = (userEntryDate, requiredFormat) => {
    var monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    var userEntryDateObject = new Date(userEntryDate); //converts the string into date object
    var monthInString = userEntryDateObject.getMonth(); //get the value of month
    var dateInString = userEntryDateObject.getDate() - 1; //get the value of date
    console.log(monthNames[monthInString]);
    if (requiredFormat == 'month') {
      return monthNames[monthInString];
    } else {
      return dateInString;
    }
  };