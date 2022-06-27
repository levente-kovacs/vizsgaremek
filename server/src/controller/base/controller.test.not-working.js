const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');
const cc = require('../../models/calorie-chart.model')

const controller = require('./controller')(cc);
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
                expect(service(cc).findOne).toBeCalledWith(ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p.id === ID)
                );                
            })
    });
});
