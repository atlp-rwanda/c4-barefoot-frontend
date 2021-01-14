import React from 'react';
import {CreateTravelRequest} from '../../src/components/views/user/CreateTravelRequest';
import {CssBaseline, Grid, Snackbar} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Loader from '../../src/components/Loader';

const props = {
            CheckReturningAction : jest.fn(),
            checkTravelDatesAction: jest.fn(),
            getLocationsAction: jest.fn(),
            searchCurrentLocationAction: jest.fn(),
            selectAccommodationAction: jest.fn(),
            handleErrorsAction:jest.fn(),
            closeSnackbar: jest.fn(),
            addTravelReasonAction: jest.fn(),
            sendTravelRequestAction: jest.fn(),
            addMultiCityAction: jest.fn(),
            removeMultiCityAction: jest.fn(),
            openModalAction: jest.fn(),
}
const props2={
            searchLocations: [],
            searchLocationsLoading: false,
            currentLocation: '',
            destinationLocation: '',
            isReturning: false,
            departureDate: '',
            returnDate: '',
            searchAccommodations: [],
            searchAccommodationsLoading:false,
            selectedAccommodation:[],
            selectedLocations:[],
            displaySelection:false,
            displaySelected: false,
            snackBarMessage:{
                open: false,
                message: null,
                severity: ''
            },
            success: false,
            sendLoading:false,
            travelReason: '',
            Modal: {
                open: false,
                data:{}
            }
        }

describe('<CreateTravelRequest />', () =>{
    let wrapper;
    
    it('if it matches snapshot', () => {

        wrapper = mount(<CreateTravelRequest travelRequest={props2} {...props} /> );
        
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    

//     it('if it should render the form with 2 input fields and a login button', () =>{
//         expect(wrapper.find("form").length).toBe(1);
//         expect(wrapper.find("input").length).toBe(2);
//         expect(wrapper.find({children: 'Login'}).length).toBeTruthy();

//     });
//     it('if it should render the signup, facebook and google buttons', () =>{
//         expect(wrapper.find({children:'Facebook'}).length).toBeTruthy();
//         expect(wrapper.find({children:'Google'}).length).toBeTruthy();
//         expect(wrapper.find({children:'Signup'}).length).toBeTruthy();
//     });
//     it('should have a loader', () =>{
//         expect(wrapper.find(Loader).length).toBe(1);
//     })
//     it('should have a Snackbar for messages', () =>{
//         expect(wrapper.children().find(Snackbar).length).toBe(1);

//     })
// });
// describe("Skeletons should be available", ()=>{
//     const props = {
//         loginAction : jest.fn(),
//         closeSnackbar : jest.fn(),
//         loadSkeletons: jest.fn(),
//         login:{
//             success: false,
//             loading: false,
//             snackBarMessage: false,
//             error: '',
//             showSkeletons: true
//         }
//     }
//     it('if it should render the skeletons and grids', () =>{
//         let wrapper = shallow(<Login {...props} />);

//         expect(wrapper.children().props().children.length).toBe(3);
//         expect(wrapper.find(CssBaseline).length).toBe(1);
//         expect(wrapper.children().find(Grid).length).toBe(8);
//         expect(wrapper.find(Skeleton).length).toBe(13);

//     });
// })
// describe('small screens', () =>{
//     const props = {
//         loginAction : jest.fn(),
//         closeSnackbar : jest.fn(),
//         loadSkeletons: jest.fn(),
//         login:{
//             success: false,
//             loading: false,
//             snackBarMessage: false,
//             error: '',
//             showSkeletons: false
//         }
//     }
//     it('should change the size on small screens', () =>{
//         let wrapper = shallow(<Login {...props} />)
//         expect(wrapper.children().props().children[1].props.xs).toBe(12);
//         expect(wrapper.children().props().children[1].props.sm).toBe(8);
//         expect(wrapper.children().props().children[2].props.xs).toBe(12);
//         expect(wrapper.children().props().children[2].props.sm).toBe(4);

//     });

})