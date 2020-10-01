import ES6 from "../import/ES6";

const amiiboSeriesControler = (req, res) => {
  res.status(200).json(ES6.getAmiiboSeries);
};

export default amiiboSeriesControler;
