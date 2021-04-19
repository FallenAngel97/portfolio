import React from 'react';
import logo from './logo.png';
import rocket from './rocket.png';
import spacechainsStyles from './spacechains-landing.module.scss';
import Helmet from 'react-helmet';
import Asteroids from './Asteroids';
import Stars from './Stars';

export default () => (
    <>
        <Helmet bodyAttributes={{
            class: spacechainsStyles['spacechainsLandingBody']
        }}>
            <title>Space Chains</title>
            <meta name="description" content="" />
            <meta name="keywords" content="game, android game, chess, boarding game, computer game, phone, multiplayer" />
        </Helmet>

        <main className={spacechainsStyles['main_area']}>
            <Stars />
            <Asteroids />
            <img src={rocket} id={spacechainsStyles['rocket']} />
            <img id={spacechainsStyles['logo']} src={logo} />
            <a href='https://play.google.com/store/apps/details?id=com.spacechess&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' className={spacechainsStyles['get_on_google']} src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
        </main>
    </>
)