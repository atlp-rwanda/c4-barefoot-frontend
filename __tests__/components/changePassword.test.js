import React from 'react';
import { ChangePassword, Alert } from "../../src/components/views/changePassword";
import { Snackbar } from '@material-ui/core';
import { act } from 'react-dom/test-utils';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MuiAlert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import { Formik, Form, Field } from 'formik';

describe('<ChangePassword />', () => {
    let wrapper;
    const props = {
        changeUserPassword: jest.fn(),
        closeSnackbar: jest.fn(),
        current_password: "",
        new_password: "",
        passwordChanged: {
            loading: false,
            successMsg: null,
            error: null,
            snackbarOpen: false,
            success: false,
        },
    }
    const invalidProps = {
        changeUserPassword: jest.fn(),
        closeSnackbar: jest.fn(),
        passwordChanged: {
            loading: false,
            successMsg: null,
            error: null,
            snackbarOpen: false,
            success: false,
        },
    }
    it('if <ChangePassword/> matches snapshot', () => {
        wrapper = mount(<ChangePassword {...props} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('if it should render form with 8 input fields and 2 buttons', () => {
        expect(wrapper.find("Form").length).toBe(1);
        expect(wrapper.find("input").length).toBe(2);
        expect(wrapper.find("label").length).toBe(2);
        expect(wrapper.find({ children: 'Submit' }).length).toBeTruthy();
        expect(wrapper.find({ children: 'Cancel' }).length).toBeTruthy();
    });


    it('should have a Snackbar for messages', () => {
        expect(wrapper.children().find(Snackbar).length).toBe(1);
    })

    it('it should show password', () => {
        const btn = wrapper.find('#currentPassword')
        btn.hostNodes().simulate('click')
    })

    it('it should show password', () => {
        const btn = wrapper.find('#newPassword')
        btn.hostNodes().simulate('click')
    })

    it("should have MuiAlert ", () => {
        const alert = mount(<Alert  {...props} />);
        expect(alert.children().find(MuiAlert).length).toBe(1);
    });

    it('should show errors', async () => {
        const onSubmitMock = jest.fn();
        wrapper = mount(<ChangePassword {...invalidProps} onSubmit={onSubmitMock} />);
        await act(async () => {
            const btn = wrapper.find('form').simulate('submit');
            expect(btn.length).toBe(1)
        })
    });
});
