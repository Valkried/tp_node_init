import dataImportES6 from "../import/ES6";

const typeControler = (req, res) => {
  res.status(200).json(dataImportES6.getTypes);
};

export default typeControler;
