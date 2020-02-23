import React from 'react';
import { Link, withPrefix } from "gatsby"
import { Helmet } from 'react-helmet';

import landingStyles from "./colormixerlanding.module.scss";

const ColorMixerLanding = () => (
    <main id={landingStyles['mixer_landing_main']}>
        <Helmet bodyAttributes={{
            class: landingStyles['landing_body']
        }}>
            <title>Color Mixer - mix the colors in the game!</title>
            <meta name="description" 
              content="Color Mixer game based on the additive mixing, available in Google Play market" />
            <meta name="keywords" 
              content="game, application, android application, color, mixer, gaming, bonus" />
        </Helmet>

        <img id={landingStyles['colormixerLogo']} src={ withPrefix('/color_mixer/logo.png') } />
        <p className={landingStyles.description}>
            Simple, yet addictive game, based on the principle of additive mixing of colors. Mix the colors to get the proper color, shown by the platform, coming from the bottom
        </p>
        <a href='https://play.google.com/store/apps/details?id=com.color_mixer&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' className={landingStyles['get_it_on_google']} src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
        <img id={landingStyles.screenshotColormixer} 
             src={ withPrefix("/color_mixer/phone-screenshot.png") } />
        <div id={landingStyles['buttonWrapper']}>
            <Link id={landingStyles['policyButton']} 
                  to={withPrefix('/colormixer-policy')}>
                Privacy policy
            </Link>
        </div>
    </main>
)

export default ColorMixerLanding;