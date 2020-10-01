import { Router } from "express";
import amiiboControler from "./controlers/amiibo";
import amiiboSeriesControler from "./controlers/amiiboSeries";
import charactersControler from "./controlers/character";
import gameSeriesControler from "./controlers/gameSeries";
import typeControler from "./controlers/type";

const createRoutes = () => {
  const routes = Router();
  routes.get("/api/amiibo", amiiboControler);
  routes.get("/api/type", typeControler);
  routes.get("/api/gameseries", gameSeriesControler);
  routes.get("/api/character", charactersControler);
  routes.get("/api/amiiboseries", amiiboSeriesControler);

  return routes;
};

export default createRoutes;
