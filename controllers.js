import Person from "./dao.js"

class Controllers {
    async add(req, res) {
        try {
            const { name, surname, phone,order,problem ,descr} = req.body;
            const post = await Person.create({  name, surname, phone,order,problem ,descr});
            console.log(req.body);
            res.json(post);
        } catch (e) {
            res.status(500).json(e);
        }

    }
    async getAll(req, res) {
        try {
            const post = await Person.find();
            return res.json(post);
        } catch {
            res.status(500).json(e);
        }
    }
}

export default new Controllers();