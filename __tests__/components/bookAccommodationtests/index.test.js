import React from 'react'
import Form from '../../../src/components/bookAccommodation/form'
import renderer from 'react-test-renderer'
import Book from '../../../src/components/bookAccommodation/index'
import { locationState, accommodationState,bookAccommodationState } from '../../../dummyData'
import { shallow , mount} from "enzyme";
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';


const middlewares = [thunk]
const mockStore = configureStore(middlewares);
let store;

store = mockStore({
  fetchAccommodations:  accommodationState,
  bookAccommodations:bookAccommodationState
})

const props = {
  getAccommodations: jest.fn(),
  getAccommodationsByLocation: jest.fn()
}

describe('Book accommodation from', () => {
  
  it('Render book accommodation from', () => {
    
    const renderedComponent = renderer.create(<Provider store={store}>
        <Book {...props}/>
    </Provider>).toJSON()
    expect(renderedComponent).toMatchSnapshot();
  })

  it('Render book accommodation from', () => {
    
    const renderedComponent = renderer.create(<Provider store={store}>
        <Book {...props}/>
    </Provider>).toJSON()
    expect(renderedComponent).toMatchSnapshot();
  })
})

