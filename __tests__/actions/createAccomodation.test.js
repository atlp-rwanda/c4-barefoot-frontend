import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/redux/actions/createAccAction';
import moxios from 'moxios';
import { accomodation } from '../../dummyData'

const middleware = [thunk];
const mockStore = configureStore(middleware);

describe('Create accomodation', () => {
    let store;
    const accBody= {
        country: "Dubai",
        city: "Dubai",
        state: "Al Hilal",
        streetAddress: "St 21, Dub, UAE",
        locationID: "0880b2d1-662c-4782-8aed-252fdd0644c4",
        propertyType: "Motel",
        numberOfRooms: 12,
        price: 123000,
        typeOfBed: "single",
        title: "Dubai rest view hotel",
        description: "This the best place for tourists to rest in Dubai",
        photos: "https://res.cloudinary.com/nowo-ltd/image/upload/v1616179879/barefoot%20uploads/txmzilh8lxwv4u63mvz3.jpg",

    };
    const amenities= {
        wifi: true,
        airConditioner: false,
        shampoo: false,
        ironing: false,
        tv: true,
        smokeDetector: false,
        fireExtinguisher: false,
        lockOnDoor: false,
    };

    beforeEach(() => {
        moxios.install()
        store = mockStore({ createAcc: {} })
    });

    afterEach(() => moxios.uninstall());
  

    it('Creates accomodation successfully', () => {
       

        moxios.wait(() => {
            const request = moxios.requests.at(0)
            request.respondWith({
                status: 200,
                response: {accommodation: accomodation }                   
            });
            moxios.wait(() => {
              const request = moxios.requests.at(1)
              request.respondWith({
                  status: 200,
                  response: amenities                    
              });
          });
        });

       

        


        return store.dispatch(actions.createAccomodation(accBody,amenities)).then(() => {
            const expectedActions = store.getActions();
            expect(expectedActions[0].type).toEqual('CREATE_ACC_PENDING');
            expect(expectedActions[1].type).toEqual('CREATE_ACC_SUCCESS');
        })

    });

    it('Create Accomodation is unsuccessful with response porperty', () => {

        moxios.wait(() => {
          const request = moxios.requests.at(0)
          request.reject({
           status: 500,
           response: {
            data: 'Internal server error',
           }
           })
        })
    
        return store.dispatch(actions.createAccomodation(accBody,amenities)).then(() => {
          const expectedActions = store.getActions();
          expect(expectedActions[0].type).toEqual('CREATE_ACC_PENDING')
          expect(expectedActions[1].type).toEqual('CREATE_ACC_ERROR')
        })
    })

      it('Create Accomodation is unsuccessful with message porperty', () => {

        moxios.wait(() => {
          const request = moxios.requests.at(0)
          request.reject({
           status: 400,
           message: 'network error',
           })
        })
    
        return store.dispatch(actions.createAccomodation(accBody,amenities)).then(() => {
          const expectedActions = store.getActions();
          expect(expectedActions[0].type).toEqual('CREATE_ACC_PENDING')
          expect(expectedActions[1].type).toEqual('CREATE_ACC_ERROR')
        })
      })

      it('Create accomodation is unsuccessful with requeat porperty', () => {

        moxios.wait(() => {
          const request = moxios.requests.mostRecent()
          request.reject({
           status: 403,
           request: 'Unathorised',
           })
        })
    
        return store.dispatch(actions.createAccomodation(accBody,amenities)).then(() => {
          const expectedActions = store.getActions();
          expect(expectedActions[0].type).toEqual('CREATE_ACC_PENDING')
          expect(expectedActions[1].type).toEqual('CREATE_ACC_ERROR')
        })
      })

      it('Create accomodation is unsuccessful with error porperty', () => {

        moxios.wait(() => {
          const request = moxios.requests.mostRecent()
          request.reject({
           status: 404,
           error: 'resource not found',
           })
        })
    
        return store.dispatch(actions.createAccomodation(accBody,amenities)).then(() => {
          const expectedActions = store.getActions();
          expect(expectedActions[0].type).toEqual('CREATE_ACC_PENDING')
          expect(expectedActions[1].type).toEqual('CREATE_ACC_ERROR')
        })
      })

      it('update amenities is unsuccessful with response porperty', () => {
          
            moxios.wait(() => {
                const request = moxios.requests.at(0)
                request.respondWith({
                    status: 200,
                    response: {accommodation: accomodation }                   
                });

                moxios.wait(() => {
                  const request = moxios.requests.at(1)
                  request.reject({
                    status: 500,
                    response: {
                        data: 'Internal server error',
                    }
                  })
                })
            });

           
        
            return store.dispatch(actions.createAccomodation(accBody,amenities)).then(() => {
            const expectedActions = store.getActions();
            expect(expectedActions[0].type).toEqual('CREATE_ACC_PENDING')
            expect(expectedActions[1].type).toEqual('CREATE_ACC_ERROR')
            })
        })

        it('update amenities is unsuccessful with message porperty', () => {
            moxios.wait(() => {
                const request = moxios.requests.at(0)
                request.respondWith({
                    status: 200,
                    response: {accommodation: accomodation }                   
                });

                moxios.wait(() => {
                  const request = moxios.requests.at(1)
                  request.reject({
                    status: 400,
                    message: 'network error',
                  })
                })
            });

        
            return store.dispatch(actions.createAccomodation(accBody,amenities)).then(() => {
              const expectedActions = store.getActions();
              expect(expectedActions[0].type).toEqual('CREATE_ACC_PENDING')
              expect(expectedActions[1].type).toEqual('CREATE_ACC_ERROR')
            })
          })

        it('update amenities is unsuccessful with requeat porperty', () => {
            moxios.wait(() => {
                const request = moxios.requests.at(0)
                request.respondWith({
                    status: 200,
                    response: {accommodation: accomodation }                   
                });

                moxios.wait(() => {
                  const request = moxios.requests.at(1)
                  request.reject({
                  status: 403,
                  request: 'Unathorised',
                  })
                })

            });


        
            return store.dispatch(actions.createAccomodation(accBody,amenities)).then(() => {
                const expectedActions = store.getActions();
                expect(expectedActions[0].type).toEqual('CREATE_ACC_PENDING')
                expect(expectedActions[1].type).toEqual('CREATE_ACC_ERROR')
            })
        })

        it('update amenities is unsuccessful with error porperty', () => {

            moxios.wait(() => {
                const request = moxios.requests.at(0)
                request.respondWith({
                    status: 200,
                    response: {accommodation: accomodation }                   
                });

                moxios.wait(() => {
                  const request = moxios.requests.at(1)
                  request.reject({
                   status: 404,
                   error: 'resource not found',
                   })
                })
                
            });


        
            return store.dispatch(actions.createAccomodation(accBody,amenities)).then(() => {
              const expectedActions = store.getActions();
              expect(expectedActions[0].type).toEqual('CREATE_ACC_PENDING')
              expect(expectedActions[1].type).toEqual('CREATE_ACC_ERROR')
            })
          })    


})