import React from "react";
import Header from "../../src/components/AuthorizedUserNavBar";
import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("<AuthorizedUserNavBar />", () => {
  let wrapper;
  it("should be rendered without errors", () => {
    wrapper = shallow(<Header />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
