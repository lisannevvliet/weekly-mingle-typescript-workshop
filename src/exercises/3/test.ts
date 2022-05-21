import { assert, IsExact } from 'conditional-type-checks';
import { exercise0301, exercise0302, Employee, Company } from './index';

// 1.
// Check Employee type
assert<IsExact<Employee, Test03.Exercise01.Employee>>(true);

// Check employee object type
const { employee } = exercise0301();
assert<IsExact<typeof employee, Test03.Exercise01.Employee>>(true);


// 2.
// Check Company type
assert<IsExact<Company, Test03.Exercise02.Company>>(true);

// Check company object type
const { company } = exercise0302();
assert<IsExact<typeof company, Test03.Exercise02.Company>>(true);






namespace Test03 {
  export namespace Exercise01 {
    export type Employee = {
      name: string;
      age: number;
      city: string;
      interests: string[];
    };
  }

  export namespace Exercise02 {
    export type Company = {
      name: string;
      address: string;
      postal_code: string;
      city: string;
      employee_amount: number;
      employees: Exercise01.Employee[];
    };
  }
}
