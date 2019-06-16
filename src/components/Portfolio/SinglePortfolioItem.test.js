import "../../testSetup";
import React from "react";
import renderer from "react-test-renderer";
import SinglePortfolioItem from "./SinglePortfolioItem";

const portf = {
    title: {
        rendered: "text"
    },
    content: {rendered: "<h2></h2>"}
}

describe('SinglePortfolioItem element', () => {
    test("SinglePortfolioItem should render properly", () => {
        const portfolioItem = renderer.create(<SinglePortfolioItem portf={portf}/>).toJSON();
        expect(portfolioItem).toMatchSnapshot();
    });
});