import React from "react"
import { Link, withPrefix } from "gatsby"
import { Helmet } from "react-helmet"
import {
  Wrapper,
  LandingBody,
  ColorMixerLogo,
  DescriptionText,
  PolicyButton,
  ColorMixerScreenshot,
  ButtonWrapper,
} from "./colormixer-landing.styles"

/**
 * ColorMixerLanding - used for the part of color mixer project
 * @return {React.ReactElement} main page for color mixer
 */
const ColorMixerLanding = () => (
    <Wrapper>
        <Helmet>
            <title>Color Mixer - mix the colors in the game!</title>
            <meta
                name="description"
                content="Color Mixer game based on the additive mixing, available in Google Play market"
            />
            <meta
                name="keywords"
                content="game, application, android application, color, mixer, gaming, bonus"
            />
        </Helmet>
        <LandingBody />

        <ColorMixerLogo src={withPrefix("/color_mixer/logo.png")} />
        <DescriptionText>
            Simple, yet addictive game, based on the principle of additive mixing of
            colors. Mix the colors to get the proper color, shown by the platform,
            coming from the bottom
        </DescriptionText>
        <PolicyButton href="https://play.google.com/store/apps/details?id=com.color_mixer&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
            <img
                alt="Get it on Google Play"
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            />
        </PolicyButton>
        <ColorMixerScreenshot
            src={withPrefix("/color_mixer/phone-screenshot.png")}
        />
        <ButtonWrapper>
            <Link id="policy-button" to={withPrefix("/colormixer-policy")}>
                Privacy policy
            </Link>
        </ButtonWrapper>
    </Wrapper>
)

export default ColorMixerLanding
