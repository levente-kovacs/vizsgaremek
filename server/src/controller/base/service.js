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
            console.log('service model: ', model)
            return model.findByIdAndRemove(id)
        },
    };
};


// module.exports = (model, populateList = []) => {
//     return {
//       create: (entityData) => {
//         delete entityData._id;
//         const entity = new model(entityData);
//         return entity.save();
//       },
  
//       findAll: () => {
//         return model.find().sort({"_id":1}).populate([...populateList]).select("-__v");
//       }, 
  
//       findOne: (id) => model.findById(id).populate([...populateList]).select("-__v"),
  
//       update: (id, updateData) =>
//         model.findByIdAndUpdate(id, updateData, { new: true }),
  
//       delete: (id) => {
//         return model.findByIdAndRemove(id);
//       },
//     };
//   };