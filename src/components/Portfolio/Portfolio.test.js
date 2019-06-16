import "../../testSetup";
import React from "react";
import Portfolio from "./Portfolio";
import renderer from "react-test-renderer";

describe('Portfolio element', () => {
    test("Portfolio should render properly", () => {
        const portfolio = renderer.create(<Portfolio />).toJSON();
        expect(portfolio).toMatchSnapshot();
    });
});