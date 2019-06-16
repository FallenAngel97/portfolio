import "../../testSetup";
import React from "react";
import renderer from "react-test-renderer";
import Contact from "./Contact";

describe('Contact element', () => {
    test("Contact should render properly", () => {
        const contact = renderer.create(<Contact />).toJSON();
        expect(contact).toMatchSnapshot();
    });
});