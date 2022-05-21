import { assert, IsExact } from 'conditional-type-checks';
import { exercise0301, exercise0302, exercise0303, Person, Company, StrictCompany } from './index';

// 1.
// Check Person type
assert<IsExact<Person, Test03.Exercise01.Person>>(true);

// Check person object type
const { person } = exercise0301();
assert<IsExact<typeof person, Test03.Exercise01.Person>>(true);


// 2.
// Check Company type
assert<IsExact<Company, Test03.Exercise02.Company>>(true);

// Check company object type
const { company } = exercise0302();
assert<IsExact<typeof company, Test03.Exercise02.Company>>(true);



// 3.
// Check StrictCompany type
assert<IsExact<StrictCompany, Test03.Exercise03.StrictCompany>>(true);

// Check company object type
const { strictCompany } = exercise0303();
assert<IsExact<typeof strictCompany, Test03.Exercise03.StrictCompany>>(true);






namespace Test03 {
  export namespace Exercise01 {
    export type Person = {
      name: string;
      age: number;
      city: string;
      interests: string[];
    };
  }

  export namespace Exercise02 {
    export type Company = {
      name: string;
      employees: Exercise01.Person[];
    };
  }

  export namespace Exercise03 {
    export type StrictCompany = {
      name: string;
      employees: (Omit<Exercise01.Person, 'city'> & {
        city: '010' | '020';
        setName: [string, (name: string) => string];
        lead?: boolean;
        innovation?: boolean;
      })[];
    };
  }
}
