import { CreateTravelRequestReducer } from '../../src/redux/reducers/CreateTravelRequestReducer';
import * as types from '../../src/redux/actions/CreateTravelRequestAction';
import * as dummy from '../../dummyData'

describe('CREATE TRAVEL REQUEST REDUCER', () => {
    const initState = {
        availableLocations: [],
        searchLocationsLoading: false,
        availableAccommodations: [],
        searchAccommodationsLoading: false,
        currentLocation: '',
        destinationLocation: '',
        departureDate: '',
        returnDate: '',
        selectedAccommodation: '',
        travelReason: '',
        selectedLocations: [],
        displaySelection: false,
        displaySelected: false,
        snackBarMessage: {
            open: false,
            message: null,
            severity: ''
        },
        success: false,
        sendLoading: false,

        Modal: {
            open: false,
            data: {}
        }
    }
    it('Should return initial state', () => {
        expect(CreateTravelRequestReducer(undefined, {})).toEqual(
            initState
        )
    })

    it('Should handle SEARCH_LOCATIONS', () => {
        expect(CreateTravelRequestReducer(undefined, {
            type: types.SEARCH_LOCATIONS,
            payload: dummy.locationPayload.rows
        })
        ).toEqual({
            ...initState,
            availableLocations: dummy.locationPayload.rows,
        })
    })

    it('Should handle SEARCH_LOCATIONS_LOADING', () => {
        expect(CreateTravelRequestReducer(undefined, {
            type: types.SEARCH_LOCATIONS_LOADING,
        })
        ).toEqual({
            ...initState,
            searchLocationsLoading: true,
        })
    })

    it('Should handle CURRENT_LOCATION', () => {
        expect(CreateTravelRequestReducer(undefined, {
            type: types.CURRENT_LOCATION,
            payload: dummy.currentLocation.selectedLocation
        })
        ).toEqual({
            ...initState,
            currentLocation: dummy.currentLocation.selectedLocation
        })
    })
    it('Should handle TRAVEL_DATES', () => {
        expect(CreateTravelRequestReducer(undefined, {
            type: types.TRAVEL_DATES,
            payload: dummy.dates
        })
        ).toEqual({
            ...initState,
            departureDate: dummy.dates.departureDate,
            returnDate: dummy.dates.returnDate,
        })
    })
    it('Should handle DESTINATION_LOCATION', () => {
        expect(CreateTravelRequestReducer(undefined, {
            type: types.DESTINATION_LOCATION,
            payload: dummy.destinationLocation.selectedLocation
        })
        ).toEqual({
            ...initState,
            destinationLocation: dummy.destinationLocation.selectedLocation
        })
    })
    it('Should handle SEARCH_ACCOMMODATIONS', () => {
        expect(CreateTravelRequestReducer(undefined, {
            type: types.SEARCH_ACCOMMODATIONS,
            payload: dummy.accommodationsPayload
        })
        ).toEqual({
            ...initState,
            availableAccommodations: dummy.accommodationsPayload,
            searchAccommodationsLoading: false,
            displaySelection: true
        })
    })
    it('Should handle SEARCH_ACCOMMODATIONS_LOADING', () => {
        expect(CreateTravelRequestReducer(undefined, {
            type: types.SEARCH_ACCOMMODATIONS_LOADING,
        })
        ).toEqual({
            ...initState,
            searchAccommodationsLoading: true,
            displaySelection: true
        })
    })
    it('Should handle ADD_MULTI_CITY_TRAVEL_REQUEST', () => {
        expect(CreateTravelRequestReducer(undefined, {
            type: types.ADD_MULTI_CITY_TRAVEL_REQUEST,
            payload: dummy.selectedLocaton
        })
        ).toEqual({
            ...initState,
            selectedLocations: [...initState.selectedLocations, dummy.selectedLocaton],
            availableAccommodations: [],
            selectedAccommodation: '',
            currentLocation: dummy.selectedLocaton.destination,
            destinationLocation: '',
            departureDate: dummy.selectedLocaton.returnDate,
            returnDate: ''
        })
    })
    // it('Should handle REMOVE_MULTI_CITY_TRAVEL_REQUEST', () => {
    //     expect(CreateTravelRequestReducer(undefined, {
    //         type: types.ADD_MULTI_CITY_TRAVEL_REQUEST,
    //         payload: dummy.selectedLocaton
    //     })
    //     ).toEqual({
    //         ...initState,
    //         selectedLocations: [dummy.selectedLocaton]
    //     })
    // })
    it('Should handle SELECT_ACCOMMODATION', () => {
        expect(CreateTravelRequestReducer(undefined, {
            type: types.SELECT_ACCOMMODATION,
            payload: {
                accommodation: dummy.selectedAccommodationsPayload.selected,
                displaySelection: dummy.selectedAccommodationsPayload.checked,
                displaySelected: !dummy.selectedAccommodationsPayload.checked
            }
        })
        ).toEqual({
            ...initState,
            selectedAccommodation: dummy.selectedAccommodationsPayload.selected,
            displaySelection: true,
            displaySelected: false
        })
    })
    it('Should handle DESELECT_ACCOMMODATION', () => {
        expect(CreateTravelRequestReducer(undefined, {
            type: types.DESELECT_ACCOMMODATION,
        })
        ).toEqual({
            ...initState,
            selectedAccommodation: '',
            displaySelection: true,
            displaySelected: true
        })
    })

    it('Should handle HANDLE_ERRORS', () => {
        expect(CreateTravelRequestReducer(undefined, {
            type: types.HANDLE_ERRORS,
            payload: 'error mesage'
        })
        ).toEqual({
            ...initState,
            snackBarMessage: {
                open: true,
                severity: 'error',
                message: 'error mesage'
            }
        })
    })

    it('Should handle CLOSE_SNACKBAR', () => {
        expect(CreateTravelRequestReducer(undefined, {
            type: types.CLOSE_SNACKBAR,
        })
        ).toEqual({
            ...initState,
            snackBarMessage: {
                open: false,
                severity: '',
                message: null
            },
        })
    })
    it('Should handle OPEN_MODAL', () => {
        expect(CreateTravelRequestReducer(undefined, {
            type: types.OPEN_MODAL,
            payload: dummy.openModalPayload
        })
        ).toEqual({
            ...initState,
            Modal: {
                open: dummy.openModalPayload.open,
                data: dummy.openModalPayload.data
            },
        })
    })
    it('Should handle ADD_TRAVEL_REASON', () => {
        expect(CreateTravelRequestReducer(undefined, {
            type: types.ADD_TRAVEL_REASON,
            payload: 'reason'
        })
        ).toEqual({
            ...initState,
            travelReason: 'reason'
        })
    })
    it('Should handle SEND_TRAVEL_REQUEST_LOADING', () => {
        expect(CreateTravelRequestReducer(undefined, {
            type: types.SEND_TRAVEL_REQUEST_LOADING,
        })
        ).toEqual({
            ...initState,
            sendLoading: true
        })
    })
    it('Should handle SEND_TRAVEL_REQUEST', () => {
        expect(CreateTravelRequestReducer(undefined, {
            type: types.SEND_TRAVEL_REQUEST,
            payload: true
        })
        ).toEqual({
            ...initState,
            success: true,
            sendLoading: false,
            displaySelection: false,
            displaySelected: false,
            currentLocation: [],
            destinationLocation: [],
            departureDate: '',
            returnDate: '',
            selectedAccommodation: [],
            travelReason: '',
            snackBarMessage: {
                open: true,
                message: 'The travel request is successfully sent!',
                severity: 'success'
            },
            selectedLocations: [],
        })
    })
    it('Should handle CANCEL_TRAVEL_REQUEST', () => {
        expect(CreateTravelRequestReducer(undefined, {
            type: types.CANCEL_TRAVEL_REQUEST,
        })
        ).toEqual({
            ...initState,
            currentLocation: '',
            destinationLocation: '',
            isReturning: false,
            departureDate: '',
            returnDate: '',
            availableAccommodations: [],
            selectedAccommodation: [],
            selectedLocations: [],
            displaySelection: false,
            displaySelected: false,
            travelReason: '',
        })
    })

})