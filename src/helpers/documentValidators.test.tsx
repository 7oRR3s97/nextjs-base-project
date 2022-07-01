import {
  CPFValidator,
  CNPJValidator,
  NIFValidator,
  documentValidator,
} from './documentValidators';

describe('DocumentValidators', () => {
  it('should return true for valid CPF and false for invalid CPF', () => {
    const validCPFs = [
      '571.340.090-50',
      '343.318.530-12',
      '307.776.280-31',
      '838.117.150-46',
      '903.483.680-03',
      '323.716.000-83',
      '913.531.070-78',
      '476.200.150-35',
    ];
    const invalidCPFs = [
      '123.123.123-12',
      '343.318.530-22',
      '343.318.530-13',
      '903.483.690-03',
      '323.717.000-83',
      '913.931.070-78',
      '476.200.110-35',
      '892.822.590-75',
    ];

    validCPFs.forEach((validCPF) => {
      expect(CPFValidator(validCPF)).toEqual(true);
    });

    invalidCPFs.forEach((invalidCPF) => {
      expect(CPFValidator(invalidCPF)).toEqual(false);
    });
  });

  it('should return true for valid CNPJ and false for invalid CNPJ', () => {
    const validCNPJs = [
      '13.136.719/0001-04',
      '98.159.830/0001-60',
      '63.994.241/0001-13',
      '35.804.301/0001-52',
      '90.123.927/0001-01',
      '56.659.017/0001-00',
      '24.526.384/0001-49',
      '20.925.626/0001-16',
    ];
    const invalidCNPJs = [
      '13.136.719/0001-44',
      '98.159.830/0001-70',
      '63.994.241/0001-14',
      '35.854.301/0001-52',
      '90.127.927/0001-01',
      '56.650.017/0001-00',
      '22.526.384/0001-49',
      '20.925.636/0001-16',
    ];

    validCNPJs.forEach((validCNPJ) => {
      expect(CNPJValidator(validCNPJ)).toEqual(true);
    });

    invalidCNPJs.forEach((invalidCNPJ) => {
      expect(CNPJValidator(invalidCNPJ)).toEqual(false);
    });
  });

  it('should return true for valid NIF and false for invalid NIF', () => {
    const validNIFs = [
      '265777895',
      '274471760',
      '231596537',
      '364765291',
      '547203390',
      '167263617',
      '660445670',
      '828301786',
    ];
    const invalidNIFs = [
      '265777894',
      '975777894',
      '2657778',
      '979182573',
      '364765292',
      '647203390',
      '168263617',
      '828302786',
    ];

    validNIFs.forEach((validNIF) => {
      expect(NIFValidator(validNIF)).toEqual(true);
    });

    invalidNIFs.forEach((invalidNIF) => {
      expect(NIFValidator(invalidNIF)).toEqual(false);
    });
  });

  it('should return true for valid NIF and false if NIF is incomplete or is invalid if country equals Portugal, else returns false', () => {
    const validNIF = '265777895';
    const invalidNIF = '265777894';

    expect(documentValidator(validNIF, 'nif', 'portugal')).toEqual(true);
    expect(documentValidator(invalidNIF, 'nif', 'portugal')).toEqual(false);
    expect(documentValidator(validNIF, 'nif', 'brasil')).toEqual(false);
    expect(documentValidator(invalidNIF, 'nif', 'brasil')).toEqual(false);
  });

  it('should return true for valid CPF and false for invalid CPF if country equals Brasil and document equals cpf, else return false', () => {
    const validCPF = '343.318.530-12';
    const invalidCPF = '123.123.123-12';

    expect(documentValidator(validCPF, 'cpf', 'brasil')).toEqual(true);
    expect(documentValidator(invalidCPF, 'cpf', 'brasil')).toEqual(false);
    expect(documentValidator(validCPF, 'cnpj', 'brasil')).toEqual(false);
    expect(documentValidator(invalidCPF, 'cnpj', 'brasil')).toEqual(false);
    expect(documentValidator(validCPF, 'cpf', 'portugal')).toEqual(false);
    expect(documentValidator(invalidCPF, 'cpf', 'portugal')).toEqual(false);
  });

  it('should return true for valid CNPJ and false for invalid CNPJ if country equals Brasil and document equals cnpj, else return false', () => {
    const validCNPJ = '35.425.642/0001-17';
    const invalidCNPJ = '35.425.642/0001-16';

    expect(documentValidator(validCNPJ, 'cnpj', 'brasil')).toEqual(true);
    expect(documentValidator(invalidCNPJ, 'cnpj', 'brasil')).toEqual(false);
    expect(documentValidator(validCNPJ, 'cpf', 'brasil')).toEqual(false);
    expect(documentValidator(invalidCNPJ, 'cpf', 'brasil')).toEqual(false);
    expect(documentValidator(validCNPJ, 'cnpj', 'portugal')).toEqual(false);
    expect(documentValidator(invalidCNPJ, 'cnpj', 'portugal')).toEqual(false);
  });

  it('should return false if country is not Brasil or Portugal', () => {
    const validCPF = '343.318.530-12';
    const invalidCPF = '123.123.123-12';
    const validCNPJ = '35.425.642/0001-17';
    const invalidCNPJ = '35.425.642/0001-16';
    const validNIF = '265777895';
    const invalidNIF = '265777894';

    expect(documentValidator(validCPF, 'cpf', 'argentina')).toEqual(false);
    expect(documentValidator(invalidCPF, 'cpf', 'argentina')).toEqual(false);
    expect(documentValidator(validCNPJ, 'cnpj', 'argentina')).toEqual(false);
    expect(documentValidator(invalidCNPJ, 'cnpj', 'argentina')).toEqual(false);
    expect(documentValidator(validNIF, 'nif', 'argentina')).toEqual(false);
    expect(documentValidator(invalidNIF, 'nif', 'argentina')).toEqual(false);
  });
});
