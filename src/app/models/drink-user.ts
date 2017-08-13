export class DrinkUser  {
  _id: string;
  user: string;
  drinkId: {
    hydro: number,
    volume: number,
    created_date: string;
    title: string;
  };
  created_date: string;
  total: number;
}
