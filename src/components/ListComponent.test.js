import React from "react";
import { shallow, mount } from "../enzyme.conf";
import service from "../services/service";

import ListComponent from "./ListComponent";

describe("ListComponent", () => {
  it("should render items", () => {
    const items = [{ id: 1, name: "Test 1" }, { id: 2, name: "Test 2" }];
    const wrapper = shallow(<ListComponent items={items} />);

    console.log(wrapper.debug());

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find("ListItemComponent")).toHaveLength(items.length);
  });

  it("should render item with right label", () => {
    const items = [{ id: 1, name: "Test 1" }, { id: 2, name: "Test 2" }];
    const wrapper = mount(<ListComponent items={items} />);

    console.log(wrapper.debug());

    expect(
      wrapper
        .find("[data-test='listItem']")
        .at(0)
        .text()
    ).toEqual("Test 1");
  });

  it("should call service fetchSomething function when list item was clicked", () => {
    const items = [{ id: 1, name: "Test 1" }, { id: 2, name: "Test 2" }];
    const wrapper = shallow(<ListComponent items={items} />);

    jest.spyOn(service, "fetchSomething").mockImplementation(() => Promise.resolve("Done"));

    wrapper
      .find("ListItemComponent")
      .at(0)
      .simulate("click");

    expect(service.fetchSomething).toHaveBeenCalledWith(items[0].name);

    wrapper
      .find("ListItemComponent")
      .at(1)
      .simulate("click");

    expect(service.fetchSomething).toHaveBeenCalledWith(items[1].name);
  })
})
