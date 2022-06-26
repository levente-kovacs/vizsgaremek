module.exports = (model) => {
    return {
        findAll: () => model.find({}),
        findOne: (id) => model.findById(id),
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
            console.log('service model: ', model)
            return model.findByIdAndRemove(id)
        },
    };
};
