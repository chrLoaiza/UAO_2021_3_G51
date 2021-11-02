import React from "react";
import Header from "./Header";
import { mount, shallow } from "enzyme";
//Necessay to render component
import { MemoryRouter } from "react-router";

// Note how with shallow render you search for the React component tag

it("Contains 3 NavLinks via shallow", () => {
  const numLinks = shallow(<Header />).find("NavLink").length;
  expect(numLinks).toEqual(3);
});

//With mount you search the final rendered HTML since it generates the final DOM.
//We need to pull in React Router's memoryRouter for testing since header expect to have React Route'rs props passed in.
it("Contains 3 anchors via mount", () => {
  const numAnchors = mount(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  ).find("a").length;

  expect(numAnchors).toEqual(3);
});
