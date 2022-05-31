import { expectType } from 'tsd';

import Exercise01 from './index';

expectType<Test01.a>(Exercise01.a);
expectType<Test01.b>(Exercise01.b);
expectType<Test01.c>(Exercise01.c);
expectType<Test01.d>(Exercise01.d);
expectType<Test01.e>(Exercise01.e);
expectType<Test01.f>(Exercise01.f);

namespace Test01 {
  export type a = number;
  export type b = string;
  export type c = boolean;
  export type d = string[];
  export type e = { id: string; name: string };
  export type f = string | number;
}
