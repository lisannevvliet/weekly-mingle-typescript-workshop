/*
 * ======================================================
 * Exercise 1
 * Adding types to variables
 *
 * https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
 *
 * TO RUN TEST
 * npm run test-1
 * ======================================================*/



function test01() {

  /*
   * ======================================================
   * TODO:
   * 1. Type all the variables with the the correct type (stated above the variables).
   * ======================================================*/

  // number
  let a;

  // string
  let b;

  // boolean
  let c;

  // Array of string
  let d;

  // Object with properties 'id' and 'name' and value of type string
  let e;

  // string OR number
  let f;


  /* TIP
   * ======================================================
   * When we started out with TypeScript at Label A we had a rule in place. If a TypeScript error
   * took you longer than 10 minutes, add the 'any' type. This type tells TypeScript your variable
   * can be anything, thus it won't give you an error.
   * ======================================================*/




  /*
   * ======================================================
   * Do not touch this
   * ======================================================*/
  // @ts-ignore
  return { a, b, c, d, e, f };
}

export default test01();
