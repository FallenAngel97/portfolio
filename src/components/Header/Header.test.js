import "../../testSetup";
import React from "react";
import renderer from "react-test-renderer";
import Header from "./Header";

describe('Header element', () => {
    test("Header should render properly", () => {
        const header = renderer.create(<Header lang={"ru"} />).toJSON();
        expect(header).toMatchSnapshot();
    });
});