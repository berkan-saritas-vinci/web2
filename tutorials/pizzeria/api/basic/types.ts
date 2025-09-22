interface Pizza {
  id: number;
  title: string;
  content: string;
}

interface PizzaToUpdate {
  title?: string;
  content?: string;
}

interface Film {
id: number;
title: string;
director: string;
duration: number;
budget?:number;
description?: string;
imageUrl?: string;
}

interface Drink {
  id: number;
  title: string;
  image: string;
  volume: number;
  price: number;
}





type NewPizza = Omit<Pizza, "id">;
type NewDrink = Omit<Drink, "id">;

export type { Pizza, NewPizza, PizzaToUpdate, Drink, NewDrink, Film };

