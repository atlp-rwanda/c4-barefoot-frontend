
import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { FirstStep } from '../../../src/components/bookAccommodation/firstStep';
import { locationState, accommodationState,bookAccommodationState,accommodationsPayload } from '../../../dummyData'
import { mount, shallow } from 'enzyme';

describe('Very important form', () => {
    let formData = new FormData()
    const mock = jest.fn()
    const mock2 = jest.fn()
    const props = {
        accommodation:{
      
            id: "0ce36391-2c08-3074-bddb-a4ea8cccbbc5",
            country: "Rwanda",
            city: "Kigali",
            title: "Marriot Hotel",
            description: "A serene environment for relaxation",
            photos: "https://cache.marriott.com/marriottassets/marriott/KGLMC/kglmc-exterior-0030-hor-feat.jpg",
        
        },
        selectedAccommodation:'1243534gfdggs-ggfdrdrd-t66fytftf',
        accommodations:accommodationsPayload.rows,
        count:6,
        snackBarMessage: {
            open: false,
            severity: '',
            message: null
          },
        formData:formData,
        clearBookSnackbar:jest.fn(),
        setFormData: function(){},
        nextStep: function(){},
        prevStep: function(){},
        profile_picture: 'image.jpg'
    }
    it("submits correct values", async () => {
        const wrapper = shallow(<FirstStep onSubmit={mock}  {...props} values="custom value" />)
        const component = mount(<FirstStep {...props} />) 
        const form = component.find('[form-data="form-1"]').first()
       

        const { container } = render(<FirstStep onSubmit={mock} {...props} />)
        const submit = container.querySelector('button[type="submit"]')
        const pagination =container.querySelector('#pagination')
        await waitFor(() => {
          fireEvent.click(submit)
        })
        // await waitFor(() => {
        //     fireEvent.change(pagination,{target:{value:2}})
        //   })
        expect(form.length).toBe(1)
      })
});

