import { assert, IsExact } from 'conditional-type-checks';

import Exercise02 from './index';

assert<IsExact<Parameters<typeof Exercise02.a>, Parameters<Test02.a>>>(true);
assert<IsExact<ReturnType<typeof Exercise02.a>, ReturnType<Test02.a>>>(true);

assert<IsExact<Parameters<typeof Exercise02.b>, Parameters<Test02.b>>>(true);
assert<IsExact<ReturnType<typeof Exercise02.b>, ReturnType<Test02.b>>>(true);

assert<IsExact<Parameters<typeof Exercise02.c>, Parameters<Test02.c>>>(true);
assert<IsExact<ReturnType<typeof Exercise02.c>, ReturnType<Test02.c>>>(true);

assert<IsExact<Parameters<typeof Exercise02.d>, Parameters<Test02.d>>>(true);
assert<IsExact<ReturnType<typeof Exercise02.d>, ReturnType<Test02.d>>>(true);

namespace Test02 {
  export type a = () => string;
  export type b = (id: string) => string;
  export type c = () => void;
  export type d = (person: { id: string, name: string }) => void;
}
