import { Router } from "express";
import { Film } from "../types";

const films: Film[] = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    duration: 148,
    budget: 160,
    description: "Un voleur s'infiltre dans les rêves.",
    imageUrl: "https://image.tmdb.org/t/p/original/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg"
  },
  {
    id: 2,
    title: "Le Seigneur des Anneaux : La Communauté de l'Anneau",
    director: "Peter Jackson",
    duration: 178,
    budget: 93,
    description: "Un hobbit doit détruire un anneau maléfique.",
    imageUrl: "https://image.tmdb.org/t/p/original/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg"
  },
  {
    id: 3,
    title: "Interstellar",
    director: "Christopher Nolan",
    duration: 169,
    budget: 165,
    description: "Des astronautes voyagent à travers un trou de ver.",
    imageUrl: "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
  }
];

const router = Router();

router.get("/", (_req, res) => {
  return res.json(films);
});

export default router;