import accounting from 'accounting-js';

const moneyFormat = (currency?: string) => {
  if (currency === 'BRL') return ['R$', '%s%v', '.', ','];
  if (currency === 'USD') return ['US$', '%s%v', ',', '.'];
  if (currency === 'EUR') return ['€', '%v%s', ',', '.'];
  return ['R$', '%s%v', '.', ','];
};

export const formatMoney = (value: number, currency?: string) => {
  const [currencySymbol, currencyFormat, currencyThousand, currencyDecimal] =
    moneyFormat(currency);

  const money = accounting.formatMoney(value, {
    symbol: currencySymbol,
    format: currencyFormat,
    precision: 2,
    thousand: currencyThousand,
    decimal: currencyDecimal,
  });

  return money;
};

export const formatKBRT = (value: number) => {
  const KBRT = accounting.formatNumber(value, {
    thousand: '.',
    decimal: ',',
  });

  return `${KBRT} KBRT`;
};

export const formatDate = (date: string) => {
  const dateInstance = new Date(date);
  const day = dateInstance.getDate();
  const month = dateInstance.getMonth() + 1;
  const formattedDate = `${day < 10 ? `0${day}` : day}/${
    month < 10 ? `0${month}` : month
  }/${dateInstance.getFullYear()}`;

  return formattedDate;
};

export const formatHour = (date: string) => {
  const dateInstance = new Date(date);

  const hours = dateInstance.getHours();
  const minutes = dateInstance.getMinutes();
  const seconds = dateInstance.getSeconds();
  const formattedHour = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;

  return formattedHour;
};

export const formatDateHour = (date: string) => {
  const formattedDate = formatDate(date);
  const formattedHour = formatHour(date);

  return `${formattedHour} - ${formattedDate}`;
};
