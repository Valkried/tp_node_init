import dataImportES6 from "../import/ES6";

const typeController = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.status(200).json(dataImportES6.getTypes);
};

export const addType = (req, res) => {
    const { type } = req.body;

    console.log(req.body);

    try {
        if (type.match(/[A-Z][a-z]{3,}/).length > 0 && !dataImportES6.hasType(type)) {
            dataImportES6.addType(type);
            res.status(200).json({result: true});
        }
    } catch(e) {
        console.log(e);
    }
}

export default typeController;
