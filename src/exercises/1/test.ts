import { expectType } from 'tsd';

import Exercise01 from './index';

expectType<Test01.a>(Exercise01.a);
expectType<Test01.b>(Exercise01.b);
expectType<Test01.c>(Exercise01.c);
expectType<Test01.d>(Exercise01.d);
expectType<Test01.e>(Exercise01.e);
expectType<Test01.f>(Exercise01.f);
expectType<Test01.g>(Exercise01.g);
expectType<Test01.h>(Exercise01.h);
expectType<Test01.i>(Exercise01.i);

namespace Test01 {
  export type a = number;
  export type b = string;
  export type c = boolean;
  export type d = undefined;
  export type e = null;
  export type f = string[];
  export type g = { id: string; name: string };
  export type h = string | number;
  export type i = (string | number)[];
}
