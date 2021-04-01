
import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { SecondStep } from '../../../src/components/bookAccommodation/secondStep';
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
        const wrapper = shallow(<SecondStep onSubmit={mock} {...props} values="custom value" />)
        const component = mount(<SecondStep {...props} />) 
        const form = component.find('[form-data="form-2"]').first()
       

        const { container } = render(<SecondStep  onSubmit={mock} onchange={mock2} {...props} />)
        const submit = container.querySelector('button[type="submit"]')
        const select =container.querySelector('#roles')
        await waitFor(() => {
          fireEvent.click(submit)
        })
        await waitFor(() => {
            fireEvent.change(select)
          })
        expect(form.length).toBe(1)
      })
});

