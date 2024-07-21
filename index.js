// Write your solution in this file!
let employee = {
    name: 'John Doe',
    streetAddress: '123 Main St'
  };
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  console.log("Initial employee object:", employee);
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee; // Return the entire updated employee object
  }
  
// Non-destructive update
let updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'name', 'Jane Doe');
console.log("After non-destructive update:", updatedEmployee);

// Destructive update
destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '456 Oak St');
console.log("After destructive update:", employee);

// Non-destructive deletion
let employeeWithoutAddress = deleteFromEmployeeByKey(employee, 'streetAddress');
console.log("After non-destructive deletion:", employeeWithoutAddress);

// Destructive deletion
destructivelyDeleteFromEmployeeByKey(employee, 'name');
console.log("After destructive deletion:", employee);
