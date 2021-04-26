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
    var dateInString = userEntryDateObject.getDate() ; //get the value of date
    if (requiredFormat == 'month') {
      return monthNames[monthInString];
    } else {
      return dateInString;
    }
  };