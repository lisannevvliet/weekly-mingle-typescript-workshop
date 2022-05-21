import { expectType } from 'tsd';
import { assert, IsExact } from 'conditional-type-checks';

import Exercise02 from './index';

// 1. Advanced types
expectType<Test02.a>(Exercise02.a);
expectType<Test02.b>(Exercise02.b);
expectType<Test02.c>(Exercise02.c);
expectType<Test02.d>(Exercise02.d);
expectType<Test02.e>(Exercise02.e);
assert<IsExact<Test02.f, typeof Exercise02.f>>(true);

// 2. Type Inference
expectType<Test02.g>(Exercise02.g);
assert<IsExact<Test02.h, typeof Exercise02.h>>(true);
expectType<Test02.i>(Exercise02.i);
expectType<Test02.j>(Exercise02.j);
expectType<Test02.k>(Exercise02.k);


namespace Test02 {
  export type a = 'frontend' | 'backend' | 'mobile';
  export type b = [boolean, (param: boolean) => boolean];
  export type c = { name?: string };
  export type d = {
    name?: string;
    companies: { company?: string; }
  };
  export type e = Promise<d>;
  export type f = '' | null | undefined | 0 | false;
  export type g = { name?: string };
  export type h = {
    name?: string;
    companies: { company?: string; }[];
  };
  export type i = 'frontend' | 'backend' | 'mobile';
  export type j = [boolean, (param: boolean) => boolean];
  export type k = Promise<h>;
}
