import dataImportES6 from "../import/ES6";

const amiiboSeriesController = (req, res) => {
  res.status(200).json(dataImportES6.getAmiiboSeries);
};

export default amiiboSeriesController;
