export const getTotalRoomPrice = (params: {
  isVatPayer: boolean;
  vat: number;
  price: number;
}) => {
  let vat = params.vat;
  if (!params.isVatPayer) {
    vat = 0;
  }
  return params.price + vat;
};
