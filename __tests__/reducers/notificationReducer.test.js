import  {notificationReducer, initialState}  from '../../src/redux/reducers/notificationReducer';
import * as types from '../../src/redux/actions/notificationAction';
import { notificationPayload, singleTravelPayload } from '../../dummyData';

describe('NOTIFICATION REDUCER', ()=>{
    let expectedState;
    beforeEach(()=>{
        expectedState=initialState;
    })
    afterEach(()=>{
        expectedState = initialState;
    })
    it('SHOULD_RETURN_INITIAL_STATE',()=>{
        expect(notificationReducer(initialState, {
            type: 'blabla'
        })).toEqual(initialState);
    })

    it('SHOULD_RETURN_THE_APPROPRIATE_STATE_GIVEN_NETWORK_ERROR',()=>{
        expectedState.error='network error'
        
        expect(notificationReducer(initialState,{
            type: types.GETNOTIFICATONS_ERROR,
            payload: 'network error'
        })).toEqual(expectedState);
    })
    it('SHOULD_RETURN_THE_APPROPRIATE_STATE_GIVEN_LOADING',()=>{
        expectedState.pending= true;
        expect(notificationReducer(initialState, {
            type: types.LOADING
        })).toEqual(expectedState)
    })
    it('SHOULD_RETURN_THE_APPROPRIATE_STATE_GIVEN_NOTIFICATION_FETCH_SUCCESS',()=>{
        expectedState.notifications = notificationPayload.notifications;
        expectedState.pending= false;
        expect(notificationReducer(initialState, {
            type: types.GETNOTIFICATONS_SUCCESS, 
            payload: notificationPayload.notifications
        })).toEqual(expectedState)
    })
    it('SHOULD_RETURN_TRAVEL_REQUESTINFO',()=>{
        expectedState.travelRequest = singleTravelPayload;
        expect(notificationReducer(initialState, {
            type: types.READ_TRAVELREQUEST_INFO,
            payload: singleTravelPayload
        })).toEqual(expectedState)
    })
    
})