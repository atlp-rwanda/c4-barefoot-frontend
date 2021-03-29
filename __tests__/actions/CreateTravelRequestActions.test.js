import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/redux/actions/CreateTravelRequestAction';
import * as dummy from '../../dummyData'
import moxios from 'moxios'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'
const URL = process.env.REACT_APP_BACKEND_LINK;

const middlewares = [thunk]
const mockStore = configureStore(middlewares);
let mock = new MockAdapter(axios)
describe('CREATE TRAVEL REQUEST ACTIONS', () => {
    let store;

    beforeEach(() => {
        moxios.install()
        store = mockStore({ createTravelRequest: {} })
    })
    afterEach(() => moxios.uninstall())

    it('It should retireve available locations', () => {
        mock.onGet(`${URL}/locations/`).reply(200, {
            response: {
                locations: dummy.locationsPayload
            }
        })
        store.dispatch(actions.getLocationsAction()).then((res) => {
            const action = [{
                type: 'SEARCH_LOCATIONS',
                payload: dummy.locationsPayload
            }]
            expect(store.getActions().type).toEqual(action.type)
        })
    })
    it('should dispatch the SEARCH_LOCATIONS_LOADING action', () => {
        store.clearActions();
        store.dispatch(actions.getLocationsAction())
        expect(store.getActions()).toEqual([{ "type": "SEARCH_LOCATIONS_LOADING" }]);
    })

    it('should dispatch the select current location action', () => {
        store.clearActions();
        store.dispatch(actions.searchCurrentLocationAction(dummy.currentLocation))
        expect(store.getActions()).toEqual([{ payload: dummy.currentLocation.selectedLocation, type: "CURRENT_LOCATION" }]);
    })

    it('should dispatch the select destination action', () => {
        store.clearActions();
        store.dispatch(actions.searchCurrentLocationAction(dummy.destinationLocation))
        expect(store.getActions()).toEqual([{ payload: dummy.currentLocation.selectedLocation, type: "DESTINATION_LOCATION" }, { type: 'SEARCH_ACCOMMODATIONS_LOADING' }]);
    })

    it('should dispatch handle error action', () => {
        store.clearActions();
        store.dispatch(actions.handleErrorsAction('error message'))
        expect(store.getActions()).toEqual([{ "payload": "error message", "type": "HANDLE_ERRORS" }]);
    })

    it('should dispatch close snack bar action', () => {
        store.clearActions();
        store.dispatch(actions.closeSnackbar())
        expect(store.getActions()).toEqual([{ type: "CLOSE_SNACKBAR" }]);
    })
    it('should dispatch add travel reason action', () => {
        store.clearActions();
        store.dispatch(actions.addTravelReasonAction('reason'))
        expect(store.getActions()).toEqual([{ "payload": "reason", "type": "ADD_TRAVEL_REASON" }]);
    })

    it('should dispatch add multcity action', () => {
        store.clearActions();
        store.dispatch(actions.addMultiCityAction(dummy.selectedLocaton))
        expect(store.getActions()).toEqual([{ payload: dummy.selectedLocaton, "type": "ADD_MULTI_CITY_TRAVEL_REQUEST" }]);
    })

    it('should dispatch remove multcity action', () => {
        store.clearActions();
        store.dispatch(actions.removeMultiCityAction(dummy.selectedLocaton))
        expect(store.getActions()).toEqual([{ payload: dummy.selectedLocaton, "type": "REMOVE_MULTI_CITY_TRAVEL_REQUEST" }]);
    })

    it('should dispatch open model action', () => {
        store.clearActions();
        store.dispatch(actions.openModalAction(dummy.openModalPayload))
        expect(store.getActions()).toEqual([{ payload: dummy.openModalPayload, "type": "OPEN_MODAL" }]);
    })
    it('should dispatch travel date action', () => {
        store.clearActions();
        store.dispatch(actions.checkTravelDatesAction(dummy.dates))
        expect(store.getActions()).toEqual([{ payload: { departureDate: dummy.dates.departureDate, returnDate: dummy.dates.returnDate }, "type": "TRAVEL_DATES" }]);
    })
    it('It should select accomodation', () => {
        const action = [{
            type: 'SELECT_ACCOMMODATION',
            payload: {
                accommodation: dummy.selectedAccommodationsPayload.selected,
                displaySelection: dummy.selectedAccommodationsPayload.checked,
                displaySelected: !dummy.selectedAccommodationsPayload.checked
            }
        }]
        store.dispatch(actions.selectAccommodationAction(dummy.selectedAccommodationsPayload))
        expect(store.getActions().type).toEqual(action.type)
    })

    it('It should deselect accomodation', () => {
        const action = [{
            type: 'DESELECT_ACCOMMODATION',
            payload: {
                accommodation: dummy.selectedAccommodationsPayload.selected,
                displaySelection: true,
                displaySelected: true
            }
        }]
        store.dispatch(actions.selectAccommodationAction(dummy.deselectedAccommodationsPayload))
        expect(store.getActions().type).toEqual(action.type)
    })
    it('It should remove multcity destination', () => {
        const action = [{
            type: 'REMOVE_MULTI_CITY_TRAVEL_REQUEST',
            payload: {
                accommodation: dummy.removeMultiCityPayload,
            }
        }]
        store.dispatch(actions.removeMultiCityAction(dummy.deselectedAccommodationsPayload))
        expect(store.getActions().type).toEqual(action.type)
    })

    it('It should send travel request', () => {
        mock.onPost(`${URL}/requests/request`).reply(200, {
            response: {
                locations: dummy.createTravelRequest
            }
        })
        store.dispatch(actions.getLocationsAction(dummy.createTravelRequest)).then((res) => {
            const action = [{
                type: 'SEND_TRAVEL_REQUEST',
                payload: dummy.createTravelRequest
            }]
            expect(store.getActions().type).toEqual(action.type)
        })
    })

})