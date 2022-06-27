const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');
const cc = require('../../models/user.model')

const controller = require('./controller');
const service = require('./service');


jest.mock('./service.js');

describe("controller", () => {
    const mockData = [{
        "id": 1,
        "firstName": "Magyar",
        "lastName": "Máté",
        "email": "magyar.m@gmail.com",
        "active": true,
        "password": "pw",
        "role": 3
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
