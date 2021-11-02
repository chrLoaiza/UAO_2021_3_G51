import courseReducer from "./courseReducer";
import * as actions from "../actions/courseActions";

it("Should add course when passed CREATE:COURSE:SUCCESS", () => {
  //Arrange
  const initialState = [
    {
      title: "A",
    },
    { title: "B" },
  ];

  const newCourse = {
    title: "C",
  };

  const action = actions.createCourseSuccess(newCourse);

  //act
  const newState = courseReducer(initialState, action);

  expect(newState.length).toEqual(3);
  expect(newState[0].title).toEqual("A");
  expect(newState[1].title).toEqual("B");
  expect(newState[2].title).toEqual("C");
});
