const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');
const cc = require('../../models/workout-type.model')

const controller = require('./controller');
const service = require('./service');


jest.mock('./service.js');

describe("controller", () => {
    const mockData = [{
        "id": 1,
        "type": "Saját testsúlyos edzés",
        "description": "Modern nevén Street Workout, egy nagyon előnyös, látványos (extrém tornagyakorlatok), és teljesen ingyen elérhető edzésmódszer mindenki számára.",
        "image": ""
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
