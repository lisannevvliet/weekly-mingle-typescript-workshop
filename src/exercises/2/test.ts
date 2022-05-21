import { expectType } from 'tsd';

import Exercise02 from './index';

expectType<Test02.a>(Exercise02.a);
expectType<Test02.b>(Exercise02.b);
expectType<Test02.c>(Exercise02.c);
expectType<Test02.d>(Exercise02.d);

namespace Test02 {
  export type a = () => string;
  export type b = (id: string) => string;
  export type c = () => void;
  export type d = (person: { id: string, name: string }) => void;
}
