'use strict';


/**
 * Executes an opeation with two operands and an operator
 * Executes an opeation with two operands and an operator
 *
 * operand1 Integer First operand
 * operator String Operator to execute
 * operand2 Integer Second Operand
 * returns String
 **/
exports.calculateoperation = function(operand1,operator,operand2) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "3";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Stores a number in the memory
 * Stores a number in the memory
 *
 * value Integer Value to store
 * returns Boolean
 **/
exports.storeData = function(value) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = true;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

