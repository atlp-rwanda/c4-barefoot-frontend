import {fetchLocationsReducer} from '../../src/redux/reducers/locationsReducer';
import * as types from '../../src/redux/actions/fetchLocationsAction';
import {locationsPayload,locations} from '../../dummyData'

describe('Fetch Locations Reducer', ()=> {
  
  it('Should return initial state', () => {
    expect(fetchLocationsReducer(undefined, {})).toEqual(
      {
        pending: false,
        locations:[],
        error: null
      }
    )
  })

  it('Should handle FETCH_LOCATIONS_SUCCESS', () => {
    expect(fetchLocationsReducer(undefined, {
      type: types.FETCH_LOCATIONS_SUCCESS,
      payload: locations
    })
    ).toEqual({
      pending: false,
      locations: locations,
      error: null
    })
  })

  it('Should handle FETCH_LOCATIONS_PENDING', () => {
    expect(fetchLocationsReducer(undefined, {
      type: types.FETCH_LOCATIONS_PENDING
    })
    ).toEqual({
      pending: true,
      locations:[],
      error: null
    })
  })

  it('Should handle FETCH_LOCATIONS_ERROR', () => {
    expect(fetchLocationsReducer(undefined, {
      type: types.FETCH_LOCATIONS_ERROR,
      error: 'Locations not found'
    })
    ).toEqual({
      pending: false,
      locations:[],
      error: 'Locations not found'
    })
  })
})