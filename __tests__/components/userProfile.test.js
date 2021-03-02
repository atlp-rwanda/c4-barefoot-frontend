import React from 'react';
import { UserProfile, Alert } from "../../src/components/views/userProfile";
import { Snackbar, Avatar } from '@material-ui/core';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import MuiAlert from '@material-ui/lab/Alert';
import { userProfile } from '../../dummyData';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Skeleton from '@material-ui/lab/Skeleton';

describe('<UserProfile />', () => {
    let wrapper;
    let formData = new FormData();
    const props = {
        fetchUserProfile: jest.fn(),
        updateUserProfile: jest.fn(),
        onMouseEnter: jest.fn(),
        onMouseLeave: jest.fn(),
        handleChange: jest.fn(),
        userProfile: {
            loading: false,
            user: { data: userProfile },
            error: null,
            success: false
        },
        updated: {
            loading: false,
            successMsg: null,
            error: null,
            snackbarOpen: false,
            success: false,
        },
        formData: formData,
        setFormData: function () { },
        profile_picture: 'image.png'
    }
    const loadingprops = {
        fetchUserProfile: jest.fn(),
        updateUserProfile: jest.fn(),
        onMouseEnter: jest.fn(),
        onMouseLeave: jest.fn(),
        handleReset: jest.fn(),
        userProfile: {
            loading: true,
            user: { data: userProfile },
            error: null,
            success: false
        },
        updated: {
            loading: true,
            successMsg: null,
            error: null,
            snackbarOpen: false,
            success: false,
        },
        formData: formData,
        setFormData: function () { },
        profile_picture: 'image.png'
    }
    const noDataprops = {
        fetchUserProfile: jest.fn(),
        updateUserProfile: jest.fn(),
        onMouseEnter: jest.fn(),
        onMouseLeave: jest.fn(),
        userProfile: {
            loading: true,
            user: { data: null },
            error: null,
            success: false
        },
        updated: {
            loading: true,
            successMsg: null,
            error: null,
            snackbarOpen: false,
            success: false,
        },
        formData: formData,
        setFormData: function () { },
        profile_picture: 'image.png'
    }
    const invalidDataprops = {
        fetchUserProfile: jest.fn(),
        updateUserProfile: jest.fn(),
        onMouseEnter: jest.fn(),
        onMouseLeave: jest.fn(),
        userProfile: {
            loading: true,
            user: {
                data: {
                    first_name: "",
                    last_name: "",
                    Language: ""
                }
            },
            error: null,
            success: false
        },
        updated: {
            loading: true,
            successMsg: null,
            error: null,
            snackbarOpen: false,
            success: false,
        },
        formData: formData,
        setFormData: function () { },
        profile_picture: 'image.png'
    }
    it('if <UserProfile/> matches snapshot', () => {
        wrapper = mount(<UserProfile {...props} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('if it should render a PhotoCameraIcon and profilePicture div', () => {
        expect(wrapper.find("#profilePicture").length).toBe(1);
        expect(wrapper.children().find(PhotoCameraIcon).length).toBe(1);
    });

    it('if it should render form with 8 input fields and 2 buttons', () => {
        expect(wrapper.find("Form").length).toBe(1);
        expect(wrapper.find("input").length).toBe(7);
        expect(wrapper.find("label").length).toBe(7);
        expect(wrapper.find({ children: 'Save' }).length).toBeTruthy();
        expect(wrapper.find({ children: 'Cancel' }).length).toBeTruthy();
    });

    it('should set disable to true and false by onmouseLeave and onMouseEnter respectively ', () => {
        act(() => {
            wrapper.find(TextField).at(0).simulate('mouseenter', { target: { disabled: false } });
        });
        wrapper.update();
        expect(wrapper.find(TextField).at(0).props().disabled).toBe(
            false);
        act(() => {
            wrapper.find(TextField).at(0).simulate('mouseleave', { target: { disabled: true } });
        });
        wrapper.update();
        expect(wrapper.find(TextField).at(0).props().disabled).toBe(
            true);
    });

    it('should set disable to true and false by onmouseLeave and onMouseEnter respectively ', () => {
        act(() => {
            wrapper.find(TextField).at(1).simulate('mouseenter', { target: { disabled: false } });
        });
        wrapper.update();
        expect(wrapper.find(TextField).at(1).props().disabled).toBe(false);
        act(() => {
            wrapper.find(TextField).at(1).simulate('mouseleave', { target: { disabled: true } });
        });
        wrapper.update();
        expect(wrapper.find(TextField).at(1).props().disabled).toBe(true);
    });

    it('should set disable to true and false by onmouseLeave and onMouseEnter respectively ', () => {
        act(() => {
            wrapper.find(TextField).at(3).simulate('mouseenter', { target: { disabled: false } });
        });
        wrapper.update();
        expect(wrapper.find(TextField).at(3).props().disabled).toBe(false);
        act(() => {
            wrapper.find(TextField).at(3).simulate('mouseleave', { target: { disabled: true } });
        });
        wrapper.update();
        expect(wrapper.find(TextField).at(3).props().disabled).toBe(true);
    });

    it('should set disable to true and false by onmouseLeave and onMouseEnter respectively ', () => {
        act(() => {
            wrapper.find(TextField).at(4).simulate('mouseenter', { target: { disabled: false } });
        });
        wrapper.update();
        expect(wrapper.find(TextField).at(4).props().disabled).toBe(false);
        act(() => {
            wrapper.find(TextField).at(4).simulate('mouseleave', { target: { disabled: true } });
        });
        wrapper.update();
        expect(wrapper.find(TextField).at(4).props().disabled).toBe(true);
    });

    it('should set disable to true and false by onmouseLeave and onMouseEnter respectively ', () => {
        act(() => {
            wrapper.find(TextField).at(5).simulate('mouseenter', { target: { disabled: false } });
        });
        wrapper.update();
        expect(wrapper.find(TextField).at(5).props().disabled).toBe(false);
        act(() => {
            wrapper.find(TextField).at(5).simulate('mouseleave', { target: { disabled: true } });
        });
        wrapper.update();
        expect(wrapper.find(TextField).at(5).props().disabled).toBe(true);
    });

    it('should have a Avatar', () => {
        expect(wrapper.find(Avatar).length).toBe(1);
    })

    it('should have 2 CircularProgress', () => {
        wrapper = mount(<UserProfile {...loadingprops} />);
        expect(wrapper.find(CircularProgress).length).toBe(2);
    })
    it('should have 2 skleton', () => {
        wrapper = mount(<UserProfile {...noDataprops} />);
        expect(wrapper.find(Skeleton).length).toBe(9);
    })

    it('should have a Snackbar for messages', async () => {
        wrapper = mount(<UserProfile {...props} />);
        const snack = wrapper.find(Snackbar)
        console.log(snack.debug())
        expect(snack.length).toBe(1)
    })

    it("should have MuiAlert ", () => {
        const alert = mount(<Alert />);
        alert.children().find(MuiAlert).simulate('close')
        expect(alert.children().find(MuiAlert).length).toBe(1);
    });

    it('should call onChange prop with input value', () => {
        const onChangeMock = jest.fn('axios');
        wrapper = mount(<UserProfile {...props} onChange={onChangeMock} value="custom value" />);
        act(() => {
            wrapper.find('#file').simulate('change');
        })
    });

    it('should call errors', async () => {
        const onSubmitMock = jest.fn();
        wrapper = mount(<UserProfile {...invalidDataprops} onSubmit={onSubmitMock} value="custom value" />);
        await act(async () => {
            const btn = wrapper.find('form').simulate('submit');
            expect(btn.length).toBe(1)
        })

    });

    it('should call onSubmit', async () => {
        const onSubmitMock = jest.fn();
        wrapper = mount(<UserProfile {...props} onSubmit={onSubmitMock} value="custom value" />);
        await act(async () => {
            const btn = wrapper.find('form').simulate('submit');
            expect(btn.length).toBe(1)
        })

    });
});
