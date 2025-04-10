let employee = {
    name: "Marion Maghanga",
    streetAddress: "11 Broadway"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    let newEmployee= {...employee};
    newEmployee[key] = value;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    let employee3 = {...employee};
    delete employee3[key];
    return employee3;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}


newEmployee= updateEmployeeWithKeyAndValue(employee,"name", "Philomena Maghanga", );
console.log("New employe name: " + newEmployee.name);

let employee2 = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Westlands");
console.log("New employee address: " + employee2.streetAddress);
console.log(employee);

employee3 = deleteFromEmployeeByKey(employee, "streetAddress")
console.log(employee3);

let employee4 = destructivelyDeleteFromEmployeeByKey(employee, "streetAddress")
console.log(employee);

