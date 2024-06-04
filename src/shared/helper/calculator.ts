import { COUPONS } from "../../constants/coupons";

export const getTotalRoomPrice = (params: {
  isVatPayer: boolean;
  vat: number;
  price: number;
  coffeTour: number;
  coupon: string;
}) => {
  const {coffeTour, coupon, isVatPayer, price} = params
  let vat = params.vat;
  if (!isVatPayer) {
    vat = 0;
  }
  const couponDiscount = COUPONS.find(element => element.key === coupon )
  const total = price + coffeTour;
  let totalDiscount = total
  if (couponDiscount) {
    totalDiscount = (total - (total * couponDiscount.discount) / 100)
  }
  return Math.round(totalDiscount + vat);
};
