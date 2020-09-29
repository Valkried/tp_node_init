import ES6 from "../import/ES6";

const typeControler = (req, res) => {
  res.status(200).send(ES6.getTypeSet());
};

export default typeControler;
