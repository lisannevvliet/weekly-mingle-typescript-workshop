import { setName } from './helpers';

/*
 * ======================================================
 * Exercise 3
 * Creating and reusing types
 *
 * TO RUN TEST
 * npm run test-3
 * ======================================================*/



/* 01. Creating a type object
 * ======================================================
 * TODO:
 * 1. Type the 'Person' object
 * 2. Add the type to the 'person' const
 * ======================================================*/

export type Person = {};

export function exercise0301() {
  const person = {
    name: 'TypeScript fanboy',
    age: 25,
    city: '020',
    interests: ['React', 'Styled Components', 'React Native', 'ES6'],
  };







  /*
   * ======================================================
   * Do not touch this
   * ======================================================*/
  return { person };
}



/* 02. Re-using types
 * ======================================================
 * TODO:
 * 1. Type the 'Company' object
 * 2. Reuse the 'Person' type within the new 'Company' type
 * 3. Add type to the 'company' const
 * ======================================================*/

export type Company = {};

export function exercise0302() {
  const company = {
    name: 'Label A',
    employees: [
      {
        name: 'Jorn Bostelaar',
        age: 27,
        city: '020',
        interests: ['SSR', 'React'],
      },
      {
        name: 'Ronny Rook',
        age: 25,
        city: '020',
        interests: ['Styled Components', 'React Native'],
      },
    ],
  };






  /*
   * ======================================================
   * Do not touch this
   * ======================================================*/
  return { company };
}


/* 03. Strictening types
 * ======================================================
 * TODO:
 * 1. Type the 'StrictCompany' object
 * 2. Make sure to properly type the React like setName function, the optional params and stricten up the city property
 * 3. Add type to the 'strictCompany' const
 *
 * Tip: Feel free to reuse and refactor te types used above to come up with a good system.
 * ======================================================*/

export type StrictCompany = {};

export function exercise0303() {
  const strictCompany = {
    name: 'Label A',
    employees: [
      {
        name: 'Jorn Bostelaar',
        lead: true,
        age: 27,
        city: '020',
        interests: ['SSR', 'React'],
        setName: setName(),
      },
      {
        name: 'Ronny Rook',
        innovation: true,
        age: 25,
        city: '020',
        interests: ['Styled Components', 'React Native'],
        setName: setName(),
      },
      {
        name: 'Stefan Weck',
        lead: true,
        age: 27,
        city: '010',
        interests: ['SSR', 'Gatsby'],
        setName: setName(),
      },
    ],
  };






  /*
   * ======================================================
   * Do not touch this
   * ======================================================*/
  return { strictCompany };
}
