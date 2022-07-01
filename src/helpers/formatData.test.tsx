import {
  formatMoney,
  formatKBRT,
  formatDate,
  formatHour,
  formatDateHour,
} from './formatData';

describe('FormatData', () => {
  const dateBiggerThan10 = new Date('2021-10-24T19:19:24.453Z').toISOString();
  const dateLowerThan10 = new Date('2022-05-01T05:07:02.453Z').toISOString();

  it('should format 7000 according to Brazilian Real currency returning R$7.000,00', () => {
    const testValue = 7000;
    const expected = 'R$7.000,00';

    const result = formatMoney(testValue, 'BRL');

    expect(result).toEqual(expected);
  });

  it('should format 7000 according to USD currency returning US$7,000.00', () => {
    const testValue = 7000;
    const expected = 'US$7,000.00';

    const result = formatMoney(testValue, 'USD');

    expect(result).toEqual(expected);
  });

  it('should format 7000 according to Euro currency returning 7,000.00€', () => {
    const testValue = 7000;
    const expected = '7,000.00€';

    const result = formatMoney(testValue, 'EUR');

    expect(result).toEqual(expected);
  });

  it('should format 7000 according to Brazilian Real currency if no currency is passed returning R$7.000,00', () => {
    const testValue = 7000;
    const expected = 'R$7.000,00';

    const result = formatMoney(testValue);

    expect(result).toEqual(expected);
  });

  it('should format 7000 according to KBRT digitl currency returning 7.000,00 KBRT', () => {
    const testValue = 7000.12312313;
    const expected = '7.000,12 KBRT';

    const result = formatKBRT(testValue);

    expect(result).toEqual(expected);
  });

  it('should always be UTC', () => {
    expect(new Date().getTimezoneOffset()).toBe(0);
  });

  it('should format a javascript Date instance returning the date as dd/mm/yyyy', () => {
    const biggerThan10Value = dateBiggerThan10;
    const biggerThan10Expected = '24/10/2021';

    const biggerThan10Result = formatDate(biggerThan10Value);
    expect(biggerThan10Result).toEqual(biggerThan10Expected);

    const lowerThan10Value = dateLowerThan10;
    const lowerThan10Expected = '01/05/2022';

    const lowerThan10Result = formatDate(lowerThan10Value);
    expect(lowerThan10Result).toEqual(lowerThan10Expected);
  });

  it('should format a javascript Date instance returning the time as hh:mm:ss', () => {
    const biggerThan10Value = dateBiggerThan10;
    const biggerThan10Expected = '19:19:24';

    const biggerThan10Result = formatHour(biggerThan10Value);
    expect(biggerThan10Result).toEqual(biggerThan10Expected);

    const lowerThan10Value = dateLowerThan10;
    const lowerThan10Expected = '05:07:02';

    const lowerThan10Result = formatHour(lowerThan10Value);
    expect(lowerThan10Result).toEqual(lowerThan10Expected);
  });

  it('should format a javascript Date instance returning the date and time as hh:mm:ss - dd/mm/yyyy', () => {
    const biggerThan10Value = dateBiggerThan10;
    const biggerThan10Expected = '19:19:24 - 24/10/2021';

    const biggerThan10Result = formatDateHour(biggerThan10Value);
    expect(biggerThan10Result).toEqual(biggerThan10Expected);

    const lowerThan10Value = dateLowerThan10;
    const lowerThan10Expected = '05:07:02 - 01/05/2022';

    const lowerThan10Result = formatDateHour(lowerThan10Value);
    expect(lowerThan10Result).toEqual(lowerThan10Expected);
  });
});
