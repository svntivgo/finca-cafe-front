export class WompiApi {
  private readonly currency = 'COP';
  private readonly apiUrl = `https://checkout.wompi.co/p/?currency=${this.currency}`;

  checkout(
    publicKey: string,
    reference: string,
    amountInCents: string,
    signatureIntegrity: string,
  ): void {
    const publiKeyParam = `&public-key=${publicKey}`;
    const integrity = `&signature:integrity=${signatureIntegrity}`;
    const referenceParam = `&reference=${reference}`;
    const amountInCentsParam = `&amount-in-cents=${amountInCents}`;
    const redirectUrl = `&redirect-url=https://fincadelcafe.com/`;
    window.location.href =
      this.apiUrl +
      publiKeyParam +
      integrity +
      referenceParam +
      amountInCentsParam +
      redirectUrl;
  }
}
