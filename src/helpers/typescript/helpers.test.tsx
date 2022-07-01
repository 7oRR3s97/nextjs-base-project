import { objectKeys, getDynamicValueFromObject } from './helpers';

interface TestInterface {
  name: string;
  age: number;
  document: {
    type: string;
    number: number;
  };
}

describe('TypescriptHelpers', () => {
  const testObject: TestInterface = {
    name: 'John',
    age: 30,
    document: {
      type: 'CPF',
      number: 123456789,
    },
  };

  it('should return the object keys using objectKeys function', () => {
    const expected = ['name', 'age', 'document'];

    const result = objectKeys(testObject);

    expect(result).toStrictEqual(expected);
  });

  it('should return the value of a object key given a existing key using getDynamicValueFromObject function', () => {
    const name = getDynamicValueFromObject(testObject, 'name');
    expect(name).toBe('John');

    const age = getDynamicValueFromObject(testObject, 'age');
    expect(age).toBe(30);

    const document = getDynamicValueFromObject(testObject, 'document');
    expect(document).toStrictEqual({
      type: 'CPF',
      number: 123456789,
    });

    const documentType = getDynamicValueFromObject(testObject.document, 'type');
    expect(documentType).toBe('CPF');

    const documentNumber = getDynamicValueFromObject(
      testObject.document,
      'number'
    );
    expect(documentNumber).toBe(123456789);
  });

  it('should return undefined as the value of a object key given a key that does not exist using getDynamicValueFromObject function', () => {
    const caramel = getDynamicValueFromObject(testObject, 'caramel');
    expect(caramel).toBe(undefined);

    const documentCity = getDynamicValueFromObject(testObject.document, 'city');
    expect(documentCity).toBe(undefined);
  });
});
