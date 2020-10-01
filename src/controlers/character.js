import ES6 from "../import/ES6";

const charactersControler = (req, res) => {
  res.status(200).json(ES6.getCharacters);
};

export default charactersControler;
