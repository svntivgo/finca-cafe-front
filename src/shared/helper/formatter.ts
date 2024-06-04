export const hotelFiveDate = (date: Date): number => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formattedMonth = month < 10 ? `0${month}` : `${month}`;
  const formattedDay = day < 10 ? `0${day}` : `${day}`;
  const dateFormat = `${year}${formattedMonth}${formattedDay}`;
  return parseInt(dateFormat);
};

export const formatHotelFiveQuery = (date: Date): string => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formattedMonth = month < 10 ? `0${month}` : `${month}`;
  const formattedDay = day < 10 ? `0${day}` : `${day}`;
  return `${year}-${formattedMonth}-${formattedDay}`;
};

export const formatMoney = (amount: number) => {
  if (isNaN(amount)) {
    return 'Invalid amount';
  }

  const roundedAmount = amount.toFixed(2);

  return `$${roundedAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}