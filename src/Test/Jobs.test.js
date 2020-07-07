import React from "react";
import { render } from "@testing-library/react";
import Jobs from "../Components/Jobs/Jobs";
import {MemoryRouter} from "react-router"

it("renders without crashing", function() {
    
  render(<MemoryRouter>
  <Jobs />
  </MemoryRouter>);
  
});

it("matches snapshot with no jobs", function() {
  const { asFragment } = render(
    <MemoryRouter>
  <Jobs />
  </MemoryRouter>);
  expect(asFragment()).toMatchSnapshot();
});