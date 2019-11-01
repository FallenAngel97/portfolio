import React from 'react';
import { Link, withPrefix } from "gatsby"

export default class ColorMixerLanding extends React.Component {
    render() {
        require("./colormixer-landing.scss");

        return (
            <main>
                <img src={ withPrefix('/color_mixer/logo.png') } />
                <p>Simple, yet addictive game, based on the principle of additive mixing of colors. Mix the colors to get the proper color, shown by the platform, coming from the bottom</p>
                <a href='https://play.google.com/store/apps/details?id=com.color_mixer&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
                <img id='screenshot-colormixer' src={ withPrefix("/color_mixer/phone-screenshot.png") } />
                <div id='button-wrapper'>
                    <Link id='policy-button' to={withPrefix('/colormixer-policy')}>Privacy policy</Link>
                </div>
            </main>
        )
    }
}