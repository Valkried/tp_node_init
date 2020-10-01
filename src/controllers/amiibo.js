import dataImportES6 from "../import/ES6";

const amiiboController = (req, res) => {
  res.status(200).json(dataImportES6.getDataAmiibo);
};

export default amiiboController;
