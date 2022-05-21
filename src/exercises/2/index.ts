/*
 * ======================================================
 * Exercise 2
 * Advanced types
 *
 * https://www.typescriptlang.org/docs/handbook/basic-types.html#table-of-contents
 *
 * TO RUN TEST
 * npm run test-2
 * ======================================================*/



function test02() {

  /* 01. Advanced types
   * ======================================================
   * TODO:
   * 1. Add the correct types to the following variables.
   * ======================================================*/

  // string. Either frontend, backend or mobile
  let a;

  // Type the return type of a React.useState that sets a boolean.
  // Type it by using a tuple.
  // https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple
  let b;

  // Object with property 'name' and an optional value of type string
  let c;

  // Object with an optional 'name' property, and a 'companies' array of objects with an optional 'company' property.
  let d;

  // A promise that return the type mentioned in d
  let e;

  // Last time we talked about falsy variables
  // Replace the type with one that covers all the falsy options
  let f: true;




  /* 02. Type Inference (automatic type assigning)
   * ======================================================
   * TODO:
   * - Try to type the variables while only using type inference.
   * - Find out how type inference won't cover all use cases.
   * ======================================================*/
  const randomNumber = Math.random();

  // Object with property 'name' and an optional value of type string
  let g;

  // Object with an optional 'name' property, and a 'companies' array of objects with an optional 'company' property.
  let h;

  // string. Either frontend, backend or mobile
  let i;

  // the return type of a React.useState that sets a boolean, using a tuple
  let j;

  // a promise that returns the type of exercise h
  let k;

  /*
   * ======================================================
   * Do not touch this
   * ======================================================*/
  // @ts-ignore
  return { a, b, c, d, e, f, g, h, i, j, k };
}

export default test02();
