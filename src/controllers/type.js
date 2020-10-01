import dataImportES6 from "../import/ES6";

const typeController = (req, res) => {
  res.status(200).json(dataImportES6.getTypes);
};

export default typeController;
