/*
 * ======================================================
 * Exercise 2
 * Typing functions
 *
 * https://www.typescriptlang.org/docs/handbook/functions.html#typing-the-function
 * You can ignore the fact that this page has been deprecated.
 *
 * TO RUN TEST
 * npm run test-2
 * ======================================================*/



function test02() {

  /*
   * ======================================================
   * TODO:
   * 1. Add the correct types to the following variables (stated above the variables).
   * 2. Don't write the functions themselves, but only cover the typing
   * ======================================================*/

  // Function without parameters that returns a string
  let a = (): string => { return "a" };

  // Function that takes a string parameter, and returns a string
  let b = (a: string): string => { return a };

  // Function without parameters that returns nothing (void)
  let c = (): void => { };

  // Function that takes a person parameter (object with id: string and name: string), and returns nothing
  let d = (person: { id: string, name: string }): void => { };




  /*
   * ======================================================
   * Do not touch this
   * ======================================================*/
  // @ts-ignore
  return { a, b, c, d };
}

export default test02();
