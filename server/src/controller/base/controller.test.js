const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');
const cc = require('../../models/calorie-chart.model')

const controller = require('./controller')(cc);
console.log('findone' ,controller.findOne)
const service = require('./service');


jest.mock('./service.js');

describe("controller", () => {
    const mockData = [{
        "id": 1,
        "name": "Teszt",
        "foodGroup": "tej és teszt",
        "energy": 260,
        "kcal": 62,
        "protein": 3.4,
        "fat": 2.8,
        "carbohydrate": 5.3,
        "fiber": 0,
        "cholesterol": 1000
      },
      {
        "id": 2,
        "name": "Tehéntej pasztőrözött (2.8% zsírtart)",
        "foodGroup": "tej és tejtermékek",
        "energy": 260,
        "kcal": 62,
        "protein": 3.4,
        "fat": 2.8,
        "carbohydrate": 5.3,
        "fiber": 0,
        "cholesterol": 10
      },
      {
        "id": 3,
        "name": "Tehéntej pasztőrözött (1,5% zsírtart)",
        "foodGroup": "tej és tejtermékek",
        "energy": 210,
        "kcal": 50,
        "protein": 3.4,
        "fat": 1.5,
        "carbohydrate": 5.3,
        "fiber": 0,
        "cholesterol": 5
      },
      {
        "id": 4,
        "name": "Tej ultrapasztőrözött, tartós",
        "foodGroup": "tej és tejtermékek",
        "energy": 264,
        "kcal": 63,
        "protein": 3.4,
        "fat": 3,
        "carbohydrate": 5.1,
        "fiber": 0,
        "cholesterol": 0
      }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        service.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const ID = 1;

        const request = mockRequest({
            params: {
                id: ID
            }
        });

        return controller.findOne(request, response, nextFunction)
            .then( () => {
                expect(service.findOne).toBeCalledWith(ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p.id === ID)
                );                
            })
    });
});


// const { mockRequest, mockResponse } = require('jest-mock-req-res');

// const model = require('../../models/calorie-chart.model');
// const baseController = require('./controller')(model, []);
// const base_Service = require('./service')();
// jest.mock('./service');

// describe('base controller', () => {
//   let response;
//   const nextFunction = jest.fn();

//     const mockData = [{
//         "id": 1,
//         "name": "Teszt",
//         "foodGroup": "tej és teszt",
//         "energy": 260,
//         "kcal": 62,
//         "protein": 3.4,
//         "fat": 2.8,
//         "carbohydrate": 5.3,
//         "fiber": 0,
//         "cholesterol": 1000
//       },
//       {
//         "id": 2,
//         "name": "Tehéntej pasztőrözött (2.8% zsírtart)",
//         "foodGroup": "tej és tejtermékek",
//         "energy": 260,
//         "kcal": 62,
//         "protein": 3.4,
//         "fat": 2.8,
//         "carbohydrate": 5.3,
//         "fiber": 0,
//         "cholesterol": 10
//       },
//       {
//         "id": 3,
//         "name": "Tehéntej pasztőrözött (1,5% zsírtart)",
//         "foodGroup": "tej és tejtermékek",
//         "energy": 210,
//         "kcal": 50,
//         "protein": 3.4,
//         "fat": 1.5,
//         "carbohydrate": 5.3,
//         "fiber": 0,
//         "cholesterol": 5
//       },
//       {
//         "id": 4,
//         "name": "Tej ultrapasztőrözött, tartós",
//         "foodGroup": "tej és tejtermékek",
//         "energy": 264,
//         "kcal": 63,
//         "protein": 3.4,
//         "fat": 3,
//         "carbohydrate": 5.1,
//         "fiber": 0,
//         "cholesterol": 0
//       }];

//   beforeEach(() => {
//     base_Service.__setMockData(mockData);
//     response = mockResponse();
//   });

//   describe('create', () => {
//     it('should create a person', async () => {
//       const request = mockRequest({
//         body: {
//           firstName: 'Jack',
//           lastName: 'London',
//         },
//       });
//       await baseController.createOne(request, response, nextFunction);
//       expect(base_Service.create).toHaveBeenCalledWith(request.body);
//       expect(response.json).toHaveBeenCalledWith(
//         expect.objectContaining({
//           firstName: 'Jack',
//           lastName: 'London',
//         })
//       );
//     });
//   });

//   describe('findAll', () => {
//     it('should return all people', async () => {
//       await baseController.findAll(mockRequest(), response, nextFunction);
//       expect(base_Service.findAll).toHaveBeenCalled();
//       expect(response.json).toHaveBeenCalledWith(mockData);
//     });
//   });

//   describe('findOne', () => {
//     it('should return a person', async () => {
//       const request = mockRequest({
//         params: {
//           id: 1,
//         },
//       });

//       await baseController.findOne(request, response, nextFunction);

//       // expect(service.findOne).toBeCalledWith(ID);
//       //                 expect(response.json).toBeCalledWith(
//       //                     mockData.find(p => p.id === ID)
//       //                 );                

//       expect(base_Service.findOne).toHaveBeenCalledWith(1);
//       expect(response.json).toHaveBeenCalledWith(mockDatamockData.find(p => p.id === ID));
//     });
//   });

//   describe('update', () => {
//     it('should update a person', async () => {
//       const request = mockRequest({
//         params: {
//           id: 2,
//         },
//         body: {
//           _id: 2,
//           firstName: 'Jill',
//           lastName: 'Doe',
//         },
//       });

//       await baseController.updateOne(request, response, nextFunction);
//       expect(base_Service.update).toHaveBeenCalledWith(
//         request.params.id,
//         request.body
//       );
//       expect(response.json).toHaveBeenCalledWith(
//         expect.objectContaining({
//           firstName: 'Jill',
//         })
//       );
//     });
//   });

//   describe('delete', () => {
//     it('should delete a person', async () => {
//       const request = mockRequest({
//         params: {
//           id: 1,
//         },
//       });

//       await baseController.deleteOne(request, response, nextFunction);
//       expect(base_Service.delete).toHaveBeenCalledWith(1);
//       expect(response.json).toHaveBeenCalledWith(mockData[0]);
//     });
//   });  
// });