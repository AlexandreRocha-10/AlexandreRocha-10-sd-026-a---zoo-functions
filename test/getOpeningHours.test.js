const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('caso não receba parâmetro, é necessário retornar o objeto com os dias e horas de funcionamento', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(actual).toEqual(expected);
  });

  it('caso receba como parâmetro a segunda às 09:00, é necessário retornar que o Zoo está fechado', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toEqual(expected);
  });

  it('caso receba como parâmetro a terça às 09:00, é necessário retornar que o Zoo está em funcionamento', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = 'The zoo is open';
    expect(actual).toEqual(expected);
  });

  it('caso receba como parâmetro a quarta às 21:00, é necessário retornar que o Zoo está fechado', () => {
    const actual = getOpeningHours('Wednesday', '09:00-PM');
    const expected = 'The zoo is closed';
    expect(actual).toEqual(expected);
  });

  it('caso receba o primeiro parâmetro diferente do padrão, é necessário retornar que o parametro deve ser válido', () => {
    const expected = 'The day must be valid. Example: Monday';
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow(expected);
  });

  it('caso receba o segundo parâmetro com erro de abreviação, é necessário retornar que o parametro deve ser válido', () => {
    const expected = 'The abbreviation must be \'AM\' or \'PM\'';
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow(expected);
  });

  it('caso receba o segundo parâmetro com erro na hora, é necessário retornar que o parametro deve ser válido', () => {
    const expected = 'The hour should represent a number';
    expect(() => getOpeningHours('Friday', 'C09:00-AM')).toThrow(expected);
  });

  it('caso receba o segundo parâmetro com erro nos minutos, é necessário retornar que o parametro deve ser válido', () => {
    const expected = 'The minutes should represent a number';
    expect(() => getOpeningHours('Friday', '09:c00-AM')).toThrow(expected);
  });

  it('caso receba hora fora do intervalo de 0 a 12, é necessário retornar que o parametro deve ser válido', () => {
    const expected = 'The hour must be between 0 and 12';
    expect(() => getOpeningHours('Friday', '24:00-AM')).toThrow(expected);
  });

  it('caso receba minutos fora do intervalo de 0 a 59, é necessário retornar que o parametro deve ser válido', () => {
    const expected = 'The minutes must be between 0 and 59';
    expect(() => getOpeningHours('Friday', '09:60-AM')).toThrow(expected);
  });
});
