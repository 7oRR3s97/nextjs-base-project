import range from 'lodash/range';

export const CPFValidator = (data: string) => {
  const cpf = data.replace(/\.|-/g, '');

  if (
    cpf.length !== 11 ||
    cpf === '00000000000' ||
    cpf === '11111111111' ||
    cpf === '22222222222' ||
    cpf === '33333333333' ||
    cpf === '44444444444' ||
    cpf === '55555555555' ||
    cpf === '66666666666' ||
    cpf === '77777777777' ||
    cpf === '88888888888' ||
    cpf === '99999999999'
  )
    return false;

  // Validate first digit
  const firstDigitSum = range(0, 9).reduce((sum, item) => {
    sum += parseInt(cpf.charAt(item), 10) * (10 - item);
    return sum;
  }, 0);

  const firstDigitRemainder = 11 - (firstDigitSum % 11);
  const firstDigit = [10, 11].includes(firstDigitRemainder)
    ? 0
    : firstDigitRemainder;
  if (firstDigit !== parseInt(cpf.charAt(9), 10)) return false;

  // Validate second digit
  const secondDigitSum = range(0, 10).reduce((sum, item) => {
    sum += parseInt(cpf.charAt(item), 10) * (11 - item);
    return sum;
  }, 0);

  const secondDigitRemainder = 11 - (secondDigitSum % 11);
  const secondDigit = [10, 11].includes(secondDigitRemainder)
    ? 0
    : secondDigitRemainder;
  if (secondDigit !== parseInt(cpf.charAt(10), 10)) return false;

  return true;
};

export const CNPJValidator = (data: string) => {
  const cnpj = data.replace(/\.|\/|-/g, '');
  const size = cnpj.length - 2;
  const digits = cnpj.substring(size);
  const firstNumbers = cnpj.substring(0, size);

  if (
    cnpj.length !== 14 ||
    cnpj === '00000000000000' ||
    cnpj === '11111111111111' ||
    cnpj === '22222222222222' ||
    cnpj === '33333333333333' ||
    cnpj === '44444444444444' ||
    cnpj === '55555555555555' ||
    cnpj === '66666666666666' ||
    cnpj === '77777777777777' ||
    cnpj === '88888888888888' ||
    cnpj === '99999999999999'
  )
    return false;

  // Valida DVs
  const { sum: firstSum } = range(size, 0, -1).reduce(
    ({ sum, position }, item) => {
      sum += parseInt(firstNumbers.charAt(size - item), 10) * position;
      position -= 1;
      if (position < 2) position = 9;
      return { sum, position };
    },
    { sum: 0, position: size - 7 }
  );

  const firstResult = firstSum % 11 < 2 ? 0 : 11 - (firstSum % 11);
  if (firstResult !== parseInt(digits.charAt(0), 10)) return false;

  const currentSize = size + 1;
  const currentNumbers = cnpj.substring(0, currentSize);

  const { sum: secondSum } = range(currentSize, 0, -1).reduce(
    ({ sum, position }, item) => {
      sum += parseInt(currentNumbers.charAt(currentSize - item), 10) * position;
      position -= 1;
      if (position < 2) position = 9;
      return { sum, position };
    },
    { sum: 0, position: currentSize - 7 }
  );

  const secondResult = secondSum % 11 < 2 ? 0 : 11 - (secondSum % 11);
  if (secondResult !== parseInt(digits.charAt(1), 10)) return false;

  return true;
};

export const NIFValidator = (documentData: string) => {
  if (
    documentData.length < 9 ||
    (documentData.substring(0, 1) !== '1' && // pessoa singular
      documentData.substring(0, 1) !== '2' && // pessoa singular
      documentData.substring(0, 1) !== '3' && // pessoa singular
      documentData.substring(0, 2) !== '45' && // pessoa singular não residente
      documentData.substring(0, 1) !== '5' && // pessoa colectiva
      documentData.substring(0, 1) !== '6' && // administração pública
      documentData.substring(0, 2) !== '70' && // herança indivisa
      documentData.substring(0, 2) !== '71' && // pessoa colectiva não residente
      documentData.substring(0, 2) !== '72' && // fundos de investimento
      documentData.substring(0, 2) !== '77' && // atribuição oficiosa
      documentData.substring(0, 2) !== '79' && // regime excepcional
      documentData.substring(0, 1) !== '8' && // empresário em nome individual (extinto)
      documentData.substring(0, 2) !== '90' && // condominios e sociedades irregulares
      documentData.substring(0, 2) !== '91' && // condominios e sociedades irregulares
      documentData.substring(0, 2) !== '98' && // não residentes
      documentData.substring(0, 2) !== '99') // sociedades civis
  )
    return false;

  const nifWithoutLastDigit = documentData.slice(0, documentData.length - 1);

  const remainder =
    range(9, 1, -1).reduce((sum, item) => {
      sum += parseInt(documentData.charAt(9 - item), 10) * item;
      return sum;
    }, 0) % 11;

  if ([0, 1].includes(remainder))
    return (documentData === `${nifWithoutLastDigit}0`)!!;
  return (documentData === `${nifWithoutLastDigit}${11 - remainder}`)!!;
};

export const documentValidator = (
  documentData: string,
  documentType: string,
  country: string
) => {
  if (country.toLowerCase() === 'portugal') return NIFValidator(documentData);
  if (country.toLowerCase() === 'brasil') {
    if (documentType.toLowerCase() === 'cpf') return CPFValidator(documentData);
    if (documentType.toLowerCase() === 'cnpj')
      return CNPJValidator(documentData);
    return false;
  }
  return false;
};
