import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/redux/actions/notificationAction';
import { notificationPayload, singleTravelPayload} from '../../dummyData'
import moxios from 'moxios'

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

describe('FETCH_NOTIFICATION_ACTION_TEST', ()=>{
    let store;

    beforeEach(() => {
      moxios.install()
      store = mockStore({notifications: [], travelRequest: {}})
    })
    afterEach(() => moxios.uninstall())
    it('SHOULD RETRIEVE NOTIFICATIONS IF THE REQUEST IS SUCCESSFUL', ()=>{
        moxios.wait(()=>{
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: {
                    notifications: {
                        count: notificationPayload.notifications.count,
                        rows: notificationPayload.notifications.rows
                    }
                }
            })
        })

        return store.dispatch(actions.getNotifications()).then(() => {
            const expectedActions = store.getActions();
            expect(expectedActions[0].type).toEqual('LOADING')
            expect(expectedActions[1].type).toEqual('GETNOTIFICATONS_SUCCESS')
          })
    })

    it('SHOULD READ A SPECIFIC NOTIFICATION', ()=>{
        moxios.wait(()=>{
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: {
                    travelRequest: {
                        travelRequestInfo: singleTravelPayload.travelRequestInfo,
                        userInfo: singleTravelPayload.userInfo,
                        accomodationInfo: singleTravelPayload.accomodationInfo
                    }
                }
            })
        })

        return store.dispatch(actions.readTravelRequestInfo()).then(() => {
            const expectedActions = store.getActions();
            expect(expectedActions[0].type).toEqual('READ_TRAVELREQUEST_INFO')
          })
    })


   
})