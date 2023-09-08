export class wompiApi {
  private readonly publicKey = 'pub_prod_sw4WViA2DS6DNLJ7YAuBV07t9W8IE1La';
  private readonly signature =
    'prod_integrity_N3f7Ip8zCqDbdvsWFnkZMD77rRHlLOdc';
  private readonly currency = 'COP';
  private readonly apiUrl = `https://checkout.wompi.co/p/?public-key=${this.publicKey}&signature:integrity=${this.signature}&currency=${this.currency}`;

  checkout(reference: string, amountInCents: string): void {
    const referenceParam = `&reference=${reference}`;
    const amountInCentsParam = `&amount-in-cents=${amountInCents}`;
    window.open(this.apiUrl + referenceParam + amountInCentsParam);
  }
}
