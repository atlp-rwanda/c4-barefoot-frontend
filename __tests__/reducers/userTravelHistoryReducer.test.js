import { fetchTripHistory } from '../../src/redux/reducers/userTravelHistoryReducer';
import * as types from '../../src/redux/actions/userTravelHistoryAction';
import { tripsPayload } from '../../dummyData';

describe('Fetch travel history reducer', () => {

  it('Should get initial state', () => {
    expect(fetchTripHistory(undefined, {})).toEqual(
      {
        pending: true,
        trips: [],
        error: null,
        acc: {}
      }
    )
    })


  it('Should handle FETCH_TRIP_HISTORY_SUCCESS', () => {
    expect(fetchTripHistory(undefined, {
      type: types.FETCH_TRIP_HISTORY_SUCCESS,
      payload: tripsPayload
    })
    ).toEqual(
      {
        pending: false,
        trips: tripsPayload,
        error: null,
        acc:{}

      }
    )
  })

  it('Should handle FETCH_TRIP_HISTORY_ERROR', () => {
    expect(fetchTripHistory(undefined, {
      type: types.FETCH_TRIP_HISTORY_ERROR,
      error: 'No trips was made'
    })
    ).toEqual(
      {
        pending: false,
        trips: [],
        acc: {},
        error: 'No trips was made'
      }
    )
  })
})