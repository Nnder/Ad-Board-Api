import User from '../Schema/User.js';

class UserController{
    async createOne(req,res){
        try {
            const {name, phone, login, passwd, email, ads} = req.body;
            let result = await User.create({name, phone, login, passwd, email, ads})
            res.status(201).json(result);
        } catch (e) {
            res.status(500).json({Message:"Error", ...e});
        }
    }

    async createMany(req,res){
        try {
            let users = req.body;
            for(let user of users){
                console.log(user);
                const {name, phone, login, passwd, email, ads} = user;
                let result = await User.create({name, phone, login, passwd, email, ads})
            }
            res.status(201).json(users);
        } catch (e) {
            res.status(500).json({Message:"Error", ...e});
        }
        
    }

    async getAll(req,res){
        try {
            let result = await User.find();
            console.log('send');
            res.json(result);
        } catch (e) {
            res.status(500).json({Message:"Error", ...e});
        }
    }

    async getOne(req,res){
        try {
            let result = await User.findById(req.params.id);
            res.json(result);
        } catch (e) {
            res.status(500).json({Message:"Error", ...e});
        }
    }

    async delete(req,res){
        console.log(req.params.id);
        try {
            let result = await User.findByIdAndDelete(req.params.id);
            res.json(result);
        } catch (e) {
            res.status(500).json({Message:"Error", ...e});
        }
    }

    async update(req,res){
        try {
            let result = await User.findByIdAndUpdate(req.params.id, req.body,{new:true});
            res.json(result);
        } catch (e) {
            res.status(500).json({Message:"Error", ...e});
        }
    }



}


export default new UserController();