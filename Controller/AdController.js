import Ad from "../Schema/Ad.js";

class AdController{
    async createOne(req,res){
        try {
            const {user_id, date, description, title, category, city, address, status, rating, photos} = req.body;
            let result = await Ad.create({user_id, date, description, title, category, city, address, status, rating, photos})
            res.status(201).json(result);
        } catch (e) {
            res.status(500).json({Message:"Error", ...e});
        }
    }

    async createMany(req,res){
        try {
            let ads = req.body;
            for(let ad of ads){
                console.log(ads);
                const {user_id, date, description, title, category, city, address, status, rating, photos} = ad;
                let result = await Ad.create({user_id, date, description, title, category, city, address, status, rating, photos})
            }
            res.status(201).json(ads);
        } catch (e) {
            res.status(500).json({Message:"Error", ...e});
        }

    }

    async getAll(req,res){
        try {
            let result = await Ad.find();
            res.json(result);
        } catch (e) {
            res.status(500).json({Message:"Error", ...e});
        }
    }

    async getOne(req,res){
        try {
            let result = await Ad.findById(req.params.id);
            res.json(result);
        } catch (e) {
            res.status(500).json({Message:"Error", ...e});
        }
    }

    async delete(req,res){
        console.log(req.params.id)
        try {
            let result = await Ad.findByIdAndDelete(req.params.id);
            res.json(result);
        } catch (e) {
            res.status(500).json({Message:"Error", ...e});
        }
    }

    async update(req,res){
        try {
            let result = await Ad.findByIdAndUpdate(req.params.id,req.body,{new:true});
            res.json(result);
        } catch (e) {
            res.status(500).json({Message:"Error", ...e});
        }
    }
}

export default new AdController();