import dataImportES6 from "../import/ES6";

const amiiboSeriesControler = (req, res) => {
  res.status(200).json(dataImportES6.getAmiiboSeries);
};

export default amiiboSeriesControler;
