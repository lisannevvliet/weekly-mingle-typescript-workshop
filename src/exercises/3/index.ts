/*
 * ======================================================
 * Exercise 3
 * Creating and reusing types
 *
 * https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html#defining-types
 * At label A, we prefer 'type' over 'interface'. They are very similar, but types give us a bit more reusability.
 * They are however very similar, so you can look over the fact that they are not the same.
 *
 * TO RUN TEST
 * npm run test-3
 * ======================================================*/



/* 01. Creating a type object
 * ======================================================
 * TODO:
 * 1. Type the 'Employee' object
 * ======================================================*/

export type Employee = {};

export function exercise0301() {
  const employee: Employee = {
    name: 'Timothy',
    age: 25,
    city: 'Amsterdam',
    interests: ['React', 'Gatsby'],
  };







  /*
   * ======================================================
   * Do not touch this
   * ======================================================*/
  return { employee };
}



/* 02. Re-using types
 * ======================================================
 * TODO:
 * 1. Type the 'Company' object
 * 2. Reuse the 'Person' type within the new 'Company' type
 * ======================================================*/

export type Company = {};

export function exercise0302() {
  const company: Company = {
    name: 'Label A',
    address: 'Max Euweplein 24',
    postal_code: '1017MB',
    city: 'Amsterdam',
    employee_amount: 2,
    employees: [
      {
        name: 'Timothy',
        age: 25,
        city: 'Amsterdam',
        interests: ['React', 'Gatsby'],
      },
      {
        name: 'Marcel',
        age: 27,
        city: 'Rotterdam',
        interests: ['TypeScript', 'React Native'],
      },
    ],
  };


  /* TIP
   * ======================================================
   * Sometimes you're not sure if variable in an object is filled in, for example while using an API.
   * To combat this you can prefix the type with a '?', like so;
   * {
   *   name?: string;
   * }
   * ======================================================*/





  /*
   * ======================================================
   * Do not touch this
   * ======================================================*/
  return { company };
}
