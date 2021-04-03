import createAccReducer from '../../src/redux/reducers/createAccReducer';
import { accomodation } from '../../dummyData';
import { CREATE_ACC_ERROR, CREATE_ACC_PENDING, CREATE_ACC_SUCCESS } from '../../src/redux/actions/createAccAction';

describe('Create accomodation reducer', () => {

  it('Should get initial state', () => {
    expect(createAccReducer(undefined, {})).toEqual(
      {
        pending: false,
        accomodation: null,
        error: null
      }
    )
    })

  it('Should handle CREATE_ACC_PENDING', () => {
    expect(createAccReducer(undefined, {
      type: CREATE_ACC_PENDING
    })
    ).toEqual(
      {
        pending: true,
        accomodation: null,
        error: null
      }
    )
  })

  it('Should handle CREATE_ACC_SUCCESS', () => {
    expect(createAccReducer(undefined, {
      type: CREATE_ACC_SUCCESS,
      payload: accomodation
    })
    ).toEqual(
      {
        pending: false,
        accomodation: accomodation,
        error: null
      }
    )
  })

  it('Should handle CREATE_ACC_ERROR', () => {
      const error= {
          status: 500,
          message: 'Internal server Error',
      }
    expect(createAccReducer(undefined, {
      type: CREATE_ACC_ERROR,
      error
    })
    ).toEqual(
      {
        pending: false,
        accomodation: null,
        error
      }
    )
  })
})