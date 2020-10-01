import dataImportES6 from "../import/ES6";

const charactersController = (req, res) => {
  res.status(200).json(dataImportES6.getCharacters);
};

export default charactersController;
