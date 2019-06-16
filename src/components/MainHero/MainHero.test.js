import "../../testSetup";
import React from "react";
import MainHero from "./MainHero";
import renderer from "react-test-renderer";

describe('MainHero element', () => {
    test("MainHero should render properly", () => {
        const mainHero = renderer.create(<MainHero />).toJSON();
        expect(mainHero).toMatchSnapshot();
    });
});