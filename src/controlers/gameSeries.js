import ES6 from "../import/ES6";

const gameSeriesControler = (req, res) => {
  res.status(200).json(ES6.getGameSeries);
};

export default gameSeriesControler;
