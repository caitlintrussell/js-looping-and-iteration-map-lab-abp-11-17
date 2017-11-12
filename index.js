// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function(driver){
    return driver.toLowerCase()
  })

}
function nameToAttributes(drivers){
  return drivers.map(function(driver){
    return [driver.firstName]
  })
}
//
// var numbers = [1, 5, 10, 15];
// var doubles = numbers.map(function(x) {
//    return x * 2;
// });
function splitNames(fullName){
  let firstName = fullName.split(' ')[0];
  let lastName = fullName.split(' ')[2];
  return `First Name: ${firstName}, Last Name: ${lastName}`
}