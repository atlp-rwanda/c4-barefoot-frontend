import {fetchTripHistory} from '../../src/redux/reducers/userTravelHistoryReducer';
import * as types from '../../src/redux/actions/userTravelHistoryAction';
import { allTravelPayload, accommodationsPayload, locationsPayload} from '../../dummyData'

describe('Fetch trip Reducer', ()=> {
  
  it('Should return initial state', () => {
    expect(fetchTripHistory(undefined, {})).toEqual(
      {
        pending: false,
        trips: [],
        error: null,
        acc: {},
        locations: {},
      }
    )
  })

  it('Should handle FETCH_TRIP_HISTORY_SUCCESS', () => {
    expect(fetchTripHistory(undefined, {
      type: types.FETCH_TRIP_HISTORY_SUCCESS,
      payload:  allTravelPayload
    })
    ).toEqual({
      pending: false,
      trips:  allTravelPayload,
      acc:{},
      locations:{},
      error: null
    })
  })

//   it('Should handle FETCH_TRIP_HISTORY', () => {
//     expect(fetchTripHistory(undefined, {
//       type: types.FETCH_TRIP_HISTORY,
//       error: 'trips not found'
//     })
//     ).toEqual({
//       pending: false,
//       trips: [],
//       error: 'trips not found'
//     })
//   })
  it('Should handle GET_SINGLE_ACC', () => {
    expect(fetchTripHistory(undefined, {
      type: types.GET_SINGLE_ACC,
      payload:  accommodationsPayload
    })
    ).toEqual({
      pending: false,
      acc:  accommodationsPayload,
      error: null,
      trips:[],
      locations:{}
    })
  })
  it('Should handle GET_LOCATIONS_TRAVELLED', () => {
    expect(fetchTripHistory(undefined, {
      type: types.GET_LOCATIONS_TRAVELLED,
      payload:  locationsPayload
    })
    ).toEqual({
      pending: false,
      locations:  locationsPayload,
      error: null,
      trips:[],
      acc:{}
    })
  })

})