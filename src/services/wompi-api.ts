import { CONSTANTS } from '../constants/constants';

export class WompiApi {
  private readonly publicKey = CONSTANTS.WOMPI.PUBLIC_KEY;
  private readonly signature = CONSTANTS.WOMPI.SIGNATURE;
  private readonly currency = 'COP';
  private readonly apiUrl = `https://checkout.wompi.co/p/?public-key=${this.publicKey}&currency=${this.currency}`;

  async checkout(reference: string, amountInCents: string): Promise<void> {
    const cadenaConcatenada = `${reference}${amountInCents}COP${this.signature}`;
    const encondedText = new TextEncoder().encode(cadenaConcatenada);
    const hashBuffer = await crypto.subtle.digest('SHA-256', encondedText);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
    const integrity = `&signature:integrity=${hashHex}`;
    const referenceParam = `&reference=${reference}`;
    const amountInCentsParam = `&amount-in-cents=${amountInCents}`;
    window.open(
      this.apiUrl + integrity + referenceParam + amountInCentsParam,
      '_blank',
    );
  }
}
