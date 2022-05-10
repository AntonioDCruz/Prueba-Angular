import { Coin } from "./coin";
import { Portfolio } from "./portfolio";

export interface LinePortfolioCoin {
  id:          number;
  portfolioId: number;
  coinId:      number;
  amount:      number;
  coin:        Coin;
  portfolio:   Portfolio;
}
