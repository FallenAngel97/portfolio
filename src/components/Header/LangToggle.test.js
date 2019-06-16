import "../../testSetup";
import React from "react";
import renderer from "react-test-renderer";
import LangToggle from "./LangToggle";

describe('LangToggle element', () => {
    test("LangToggle should render properly", () => {
        const langToogle = renderer.create(<LangToggle  />).toJSON();
        expect(langToogle).toMatchSnapshot();
    });
});