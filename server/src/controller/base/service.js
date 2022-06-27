module.exports = (model, populateList = []) => {
    return {
        // findAll: () => model.find({}).populate(...populateList),
        findAll: (params = {}) => {
            if (Object.keys(params).length) {
                Object.keys(params).map( key => {
                    params[key] = { 
                        $regex: '.*' + params[key] + '.*', 
                        $options: 'i' 
                    };
                });
                return model.find(params).populate(...populateList);
            }
            return model.find(params).populate(...populateList);
        },
        findOne: (id) => model.findById(id).populate(...populateList),
        updateOne: async (id, body) => {
            const newEntity = new model(body);
            const error = newEntity.validateSync();
            if (!error) {
                return model.findByIdAndUpdate(id, body, {new: true});
            }
            throw new Error(error);
        },
        createOne: async (body) => {
            const newEntity = new model(body);
            const error = newEntity.validateSync();
            if (!error) {
                return newEntity.save(body);
            }
            throw new Error(error);
        },
        deleteOne: (id) =>{
            return model.findByIdAndRemove(id)
        },
    };
};
