import React from "react"
import logo from "./logo.png"
import rocket from "./rocket.png"
import Helmet from "react-helmet"
import Asteroids from "./Asteroids"
import Stars from "./Stars"
import styled, { createGlobalStyle } from "styled-components"
import background from "./background.png"

const LandingBody = createGlobalStyle`
    body {
        background: url(${background});
        background-size: cover;
        background-repeat: no-repeat;
    }
`

const MainArea = styled.main`
  overflow: hidden;
`

const RocketImg = styled.img`
  position: absolute;
  left: 20px;
  top: 80px;
`

const SpacechainsLogo = styled.img`
  max-height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const GetOnGoogle = styled.img`
  max-width: 206px;
  position: absolute;
  bottom: 70px;
  left: 53px;
`

const SpaceChainsLanding = () => (
  <>
    <Helmet>
      <title>Space Chains</title>
      <meta name="description" content="" />
      <meta
        name="keywords"
        content="game, android game, chess, boarding game, computer game, phone, multiplayer"
      />
    </Helmet>
    <LandingBody />

    <MainArea>
      <Stars />
      <Asteroids />
      <RocketImg src={rocket} />
      <SpacechainsLogo src={logo} />
      <a href="https://play.google.com/store/apps/details?id=com.spacechess&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
        <GetOnGoogle
          alt="Get it on Google Play"
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
        />
      </a>
    </MainArea>
  </>
)

export default SpaceChainsLanding
