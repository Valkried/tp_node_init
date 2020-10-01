import dataImportES6 from "../import/ES6";

const amiiboControler = (req, res) => {
  res.status(200).json(dataImportES6.getDataAmiibo);
};

export default amiiboControler;
