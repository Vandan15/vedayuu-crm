function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
    return (false)
}
function validatePhone(phone) {
    if (/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(phone)) {
        return (true)
    }
    return (false)
}
const dateFormatter = (date) => {
    //05-Feb-2022
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    var dateJs = new Date(date);
    var result = dateJs.getDate().toString().length == 1 ? '0' + dateJs.getDate() + '-' + monthNames[dateJs.getMonth()] + '-' + dateJs.getFullYear() :
      dateJs.getDate() + '-' + monthNames[dateJs.getMonth()] + '-' + dateJs.getFullYear();
  
    return result;
  }
export { validateEmail, validatePhone, dateFormatter };