import dataImportES6 from "../import/ES6";

const gameSeriesControler = (req, res) => {
  res.status(200).json(dataImportES6.getGameSeries);
};

export default gameSeriesControler;
