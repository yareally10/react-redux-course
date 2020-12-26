import React from "react";
import CourseForm from "./CourseForm";
import { shallow } from "enzyme";

function renderCourseForm(args) {
  const defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {},
  };

  const props = { ...defaultProps, ...args };
  return shallow(<CourseForm {...props} />);
}

it("renders form and header", () => {
  // arrange
  // assign
  const wrapper = renderCourseForm();
  // console.log(wrapper.debug());

  // assert
  expect(wrapper.find("form").length).toBe(1);
  expect(wrapper.find("h2").text()).toEqual("Add Course");
});

it('labels save button as "Save" when not saving', () => {
  // arrange
  // assign
  const wrapper = renderCourseForm();

  //assert
  expect(wrapper.find("button").text()).toBe("Save");
});

it('labels save button as "Saving..." when saving', () => {
  // arrange
  // assign
  const wrapper = renderCourseForm({ saving: true });

  // assert
  expect(wrapper.find("button").text()).toBe("Saving...");
});
