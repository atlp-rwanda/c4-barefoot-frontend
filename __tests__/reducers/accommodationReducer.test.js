import { fetchAccommodationsReducer } from '../../src/redux/reducers/accommodationsReducer';
import * as types from '../../src/redux/actions/fetchAccommodations';
import * as typ from '../../src/redux/actions/getWeather';
import * as ty from '../../src/redux/actions/fetchAccommodationByLocation';
import { accommodationsPayload,accommodationAminitiesPayload,fetchAccommodationByLocationPayload } from '../../dummyData';

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

  it('Should handle FETCH_AMENITIES_SUCCESS', () => {
    expect(fetchAccommodationsReducer(undefined, {
      type: types.FETCH_AMENITIES_SUCCESS,
      payload: accommodationAminitiesPayload
    })
    ).toEqual(
      {
        ...initialState,
        pending: false,
        amenities: accommodationAminitiesPayload.amenities,
        accommodation: accommodationAminitiesPayload.singleAccommodation
      }
    )
  })

  it('Should handle FETCH_WEATHER_SUCCESS', () => {
    expect(fetchAccommodationsReducer(undefined, {
      type: typ.FETCH_WEATHER_SUCCESS,
      payload: 23
    })
    ).toEqual(
      {
        ...initialState,
        pending: false,
        temp: 23
      }
    )
  })

  it('Should handle FETCH_ACCOMMODATIONS_BY_LOCATION', () => {
    expect(fetchAccommodationsReducer(undefined, {
      type: ty.FETCH_ACCOMMODATIONS_BY_LOCATION,
      payload: fetchAccommodationByLocationPayload,
      id:122333,
      nation:'Rwanda'
    })
    ).toEqual(
      {
        ...initialState,
        pending: false,
        accommodationsByLocation: fetchAccommodationByLocationPayload.rows,
        count:fetchAccommodationByLocationPayload.count,
        nation:'Rwanda',
        accId:122333,
      }
    )
  })

  it('Should handle FETCH_ACCOMMODATIONS_BY_LOCATION_ERROR', () => {
    expect(fetchAccommodationsReducer(undefined, {
      type: ty.FETCH_ACCOMMODATIONS_BY_LOCATION_ERROR,
      error:'failed'
    })
    ).toEqual(
      {
        ...initialState,
        pending: false,
        error: 'failed'
      }
    )
  })

  it('Should handle SELECT_ACCOMMODATION', () => {
    expect(fetchAccommodationsReducer(undefined, {
      type: ty.SELECT_ACCOMMODATION,
      payload:'3222'
    })
    ).toEqual(
      {
        ...initialState,
        selectedAccommodation: '3222'
      }
    )
  })

  it('Should handle FETCH_ACCOMMODATION_SUCCESS', () => {
    expect(fetchAccommodationsReducer(undefined, {
      type: ty.FETCH_ACCOMMODATION_SUCCESS,
      payload:'3222'
    })
    ).toEqual(
      {
        ...initialState,
        pending: true,
        accommodation:{}
      }
    )
  })
})