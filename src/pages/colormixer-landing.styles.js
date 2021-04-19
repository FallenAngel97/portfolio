import { Link } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import backgroundLanding from '../../static/color_mixer/background-landing.png';
import backgroundMobileLanding from '../../static/color_mixer/background-mobile.jpg';

export const LandingBody = createGlobalStyle`
    body {
        background: #1b031a;
        background-image: url("${backgroundLanding}");
        background-position: top center;
    }

    @media screen and (max-width: 480px) {
        body {
            background-image: url("${backgroundMobileLanding}");
            background-size: auto auto;
            background-repeat: no-repeat;
        }
    }
`;

export const DescriptionText = styled.p`
    color: #fff;
    font-size: 36px;
    max-width: 456px;
    position: relative;
    margin-left: 35px;
    padding: 25px;

    &:after, &:before {
        content: '';
        position: absolute;
        height: 40px;
        width: 40px;
    }

    &:after {
        top: 0;
        left: 0;
        border-top: 1px solid #fff;
        border-left: 1px solid #fff;
    }

    &:before {
        border-bottom: 1px solid #fff;
        border-right: 1px solid #fff;
        bottom: 0;
        right: 0;
    }
    @media screen and (max-width: 480px) {
        & {
            margin-top: 516px;
            font-size: 16px;
            margin-left: 0;
            margin-top: 412px;
            font-size: 16px;
            &:before, &:after {
                height: 20px;
                width: 20px;
            }

            &:before {
                bottom: 10px;
                right: 10px;
            }

            &:after {
                top: 10px;
                left: 10px;
            }
        }
    }
`

export const Wrapper = styled.main`
    max-width: 1024px;
    position: relative;
    margin: 0 auto;
`

export const PolicyButton = styled(Link)`
    background: linear-gradient(to top, #cc31de, #9822db);
    border-radius: 5px;
    padding: 8px;
    box-shadow: 0 0 0 0 rgba(#cc31de, .2);
    color: #fff;
    text-shadow: 1px 1px 2px rgba(#000, .2);
    text-decoration: none;
    transition: .2s ease-in-out all;
    font-family: 'Franklin Gothic Demi';
    font-size: 16px;
    position: relative;

    &:after {
        content: '';
        background: #fff;
        height: 1px;
        position: absolute;
        left: 50%;
        width: 0;
        opacity: 0;
        bottom: 6px;
        transition: .2s ease-in-out all;
        transform: translateX(-50%);
    }

    &:hover {
        box-shadow: 0 0 9px 7px rgba(204, 49, 222, 0.4);

        &:after {
            width: calc(100% - 8px);
            opacity: 1; 
        }
    }

    & img {
        max-height: 60px;
        margin-left: 48px;
    }

    @media screen and (max-width: 480px) {
        & img {
            margin-left: 16px;
        }
    }
`;

export const ColorMixerLogo = styled.img`
    @media screen and (max-width: 480px) {
        height: 90px;
    }
`;

export const ButtonWrapper = styled.div`
    margin-top: 40px;
    text-align: center;
`;

export const ColorMixerScreenshot = styled.img`
    position: absolute;
    right: 20px;
    top: 20px;
    @media screen and (max-width: 480px) {
        & {
            top: 57px;
            left: 50%;
            transform: translateX(-50%);
            height: 471px;
        }
    }
`;
