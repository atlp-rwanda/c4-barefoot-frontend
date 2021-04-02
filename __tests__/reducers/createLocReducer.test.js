import createLocReducer from '../../src/redux/reducers/createLocReducer';
import { location } from '../../dummyData';
import { CREATE_LOC_ERROR, CREATE_LOC_PENDING, CREATE_LOC_SUCCESS } from '../../src/redux/actions/createLocAction';

describe('Create location reducer', () => {

  it('Should get initial state', () => {
    expect(createLocReducer(undefined, {})).toEqual(
      {
        pending: false,
        location: null,
        error: null
      }
    )
    })

  it('Should handle CREATE_LOC_PENDING', () => {
    expect(createLocReducer(undefined, {
      type: CREATE_LOC_PENDING
    })
    ).toEqual(
      {
        pending: true,
        location: null,
        error: null
      }
    )
  })

  it('Should handle CREATE_LOC_SUCCESS', () => {
    expect(createLocReducer(undefined, {
      type: CREATE_LOC_SUCCESS,
      payload: location
    })
    ).toEqual(
      {
        pending: false,
        location: location,
        error: null
      }
    )
  })

  it('Should handle CREATE_LOC_ERROR', () => {
      const error= {
          status: 500,
          message: 'Internal server Error',
      }
    expect(createLocReducer(undefined, {
      type: CREATE_LOC_ERROR,
      error
    })
    ).toEqual(
      {
        pending: false,
        location: null,
        error
      }
    )
  })
})