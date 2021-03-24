import { fetchAccommodationsReducer } from '../../src/redux/reducers/accommodationsReducer';
import * as types from '../../src/redux/actions/fetchAccommodations';
import { accommodationsPayload } from '../../dummyData';

describe('Fetch accommodations reducer', () => {
  const initialState={
    pending: true,
    accommodations: [],
    accommodation: {},
    nation:null,
    amenities:{},
    accommodationsByLocation:[],
    selectedAccommodation:null,
    count:null,
    error: null,
    temp:null,
    accId:null
  }

  it('Should get initial state', () => {
    expect(fetchAccommodationsReducer(undefined, {})).toEqual(initialState)
    })


  it('Should handle FETCH_ACCOMMODATIONS_SUCCESS', () => {
    expect(fetchAccommodationsReducer(undefined, {
      type: types.FETCH_ACCOMMODATIONS_SUCCESS,
      payload: accommodationsPayload
    })
    ).toEqual(
      {
        ...initialState,
        pending: false,
        accommodations: accommodationsPayload,
        error: null
      }
    )
  })

  it('Should handle FETCH_ACCOMMODATIONS_ERROR', () => {
    expect(fetchAccommodationsReducer(undefined, {
      type: types.FETCH_ACCOMMODATIONS_ERROR,
      error: 'Error getting the accommodations'
    })
    ).toEqual(
      {
        ...initialState,
        pending: false,
        accommodations: [],
        error: 'Error getting the accommodations'
      }
    )
  })
})