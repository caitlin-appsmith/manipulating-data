import { companiesData } from "./companies-data";
import { salesData } from "./sales-data";

const extraRecord = {
  title: "JS in FM Training",
  type: "Binge Mode",
  cohort: "2",
  startDate: "2022-04-12",
};

const before = document.getElementById("before");
// before.innerHTML = "Hello";
before.innerHTML = JSON.stringify(companiesData, null, 2);
//TODO: Extract an element from the array.
// const manipulatedData = companiesData[12];
//TODO: Add elements to beginning and end of array.
// const manipulatedData = companiesData.pop(); //removes the last element
//const manipulatedData = companiesData.shift(); // removes first element
// const manipulatedData = companiesData.unshift(extraRecord); //adds extra record to start of array and returns length
// const manipulatedData = companiesData.push(extraRecord); //adds extra record to end of array and returns length
//TODO: Remove Elements from end of array.
//TODO: Create a new array from old data.
// const manipulatedData = companiesData.map(function(e){ 
//   console.log(e)
//   const obj = {name: e.fieldData.CompanyName, state: e.fieldData.State, suburb: e.fieldData.City, postcode: e.fieldData.Zip};
//   return obj;
//TODO: Filter for a certain state.
// const manipulatedData = companiesData.filter(function(e) {
//   return e.fieldData.State === "TX"; /// three equals is exact match
// });
//TODO: Find the first element with a certain name.
// const manipulatedData = companiesData.find(function(e) {
//   return e.fieldData.State === "TX";
// });
//TODO: Find units sold>300
// const manipulatedData = salesData.filter(function(sale){
//   return sale.fieldData.UnitsSold >= 300})
//TODO: Create a new array with just elements of a certain state.
//TODO: Create buttons for each record.
//functions are here
// const manipulatedData = companiesData.find(function(e) {
//   return e.fieldData.State === "TX";
// });

const filterForState = function (record) {
  return record.fieldData.State === "CA";
};

// const ConstructNewArray = function (e) {
//   const obj = {
//     company: e.fieldData.CompanyName,
//     state: e.fieldData.State,
//     city: e.fieldData.City,
//   };
//   return obj;
// };
//   const manipulatedData = companiesData
//   .filter(filterForState)
//   .map(ConstructNewArray);


// { 

//   // return e.fieldData.CompanyName
// };
const after = document.getElementById("after");


companiesData.filter(filterForState).forEach (function(e){
const button = document.createElement("button");
button.type = "button";
button.id = "one";
button.innerHTML = e.fieldData.CompanyName;
button.className = "col-11    m-2 btn btn-secondary";

after.appendChild(button);})
const manipulatedData = []
// after.innerHTML = JSON.stringify(manipulatedData, null, 2);
before.innerHTML = JSON.stringify(companiesData, null, 2); //reload before