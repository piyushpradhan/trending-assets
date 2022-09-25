export type CurrencyType = {
  imagePath: string;
  currencyName: string;
  value: string;
  change: string;
};

export interface Currency {
  currency: CurrencyType;
}
