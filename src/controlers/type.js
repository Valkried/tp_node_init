import ES6 from "../import/ES6";

const typeControler = (req, res) => {
  res.status(200).json(ES6.getTypes);
};

export default typeControler;
