import { shallow } from "enzyme";
import * as React from "react";
import { App } from "../src/app";

it("can render without an error", () => {
  const app = shallow(<App />);
  const container = <div id="app" />;

  expect(app.contains(container)).toBe(true);
});
