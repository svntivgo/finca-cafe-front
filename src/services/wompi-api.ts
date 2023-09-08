import { CONSTANTS } from '../constants/constants';

export class WompiApi {
  private readonly publicKey = CONSTANTS.WOMPI.PUBLIC_KEY;
  private readonly signature = CONSTANTS.WOMPI.SIGNATURE;
  private readonly currency = 'COP';
  private readonly apiUrl = `https://checkout.wompi.co/p/?public-key=${this.publicKey}&signature:integrity=${this.signature}&currency=${this.currency}`;

  checkout(reference: string, amountInCents: string): void {
    const referenceParam = `&reference=${reference}`;
    const amountInCentsParam = `&amount-in-cents=${amountInCents}`;
    window.open(this.apiUrl + referenceParam + amountInCentsParam, '_blank');
  }
}
