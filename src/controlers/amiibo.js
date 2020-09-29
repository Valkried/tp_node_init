import ES6 from "../import/ES6";

const amiiboControler = (req, res) => {
  res.status(200).json(ES6.getDataAmiibo());
};

export default amiiboControler;
