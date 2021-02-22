import helper from './helper';

type MyType = {
  id: string,
  type: string,
  name: string,
};

function myFunc(): MyType | null {
  if (helper()) {
    return {
      id: 'foo',
      type: 'bar',
      name: 'foobar',
    };
  }
  return null;
}

myFunc();
