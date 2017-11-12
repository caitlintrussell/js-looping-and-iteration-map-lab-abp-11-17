// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function(driver){
    return driver.toLowerCase()
  })

}
function nameToAttributes(drivers){
  return drivers.map(function(driver){
    let fName = fullName.split(' ')[0];
    let lName = fullName.split(' ')[2];
    return {firstName: fName, lastName: lName;}
  })
}