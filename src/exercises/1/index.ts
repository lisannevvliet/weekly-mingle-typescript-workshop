/*
 * ======================================================
 * Exercise 1
 * Adding types to variables
 *
 * https://www.typescriptlang.org/docs/handbook/basic-types.html#table-of-contents
 *
 * TO RUN TEST
 * npm run test-1
 * ======================================================*/



function test01() {

  /* 01. Basic types
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

  // undefined
  let d;

  // null
  let e;

  // Array of strings (Use the [] syntax)
  // https://www.typescriptlang.org/docs/handbook/basic-types.html#array
  let f;

  // Object with properties 'id' and 'name' and value of type string
  let g;

  // string OR number
  let h;

  // Array of string OR number
  let i;


  /* TIP
   * ======================================================
   * When we started out with TypeScript at Label A we had a rule in place. If a TypeScript error
   * took you longer than 10 minutes, add the 'any' type. As you would think this tells TypeScript
   * your variable can be anything, thus it won't give you an error. You can do this yourself when
   * starting out to make the transition go over smoothly.
   * ======================================================*/




  /*
   * ======================================================
   * Do not touch this
   * ======================================================*/
  // @ts-ignore
  return { a, b, c, d, e, f, g, h, i };
}

export default test01();
