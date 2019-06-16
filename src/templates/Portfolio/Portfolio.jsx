import React from "react";
import "./Portfolio.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SinglePortfolioItem from "./SinglePortfolioItem";
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const PortfolioContainer = (props) => (
    <article id="portfolio">
      <Slider {...settings}>
        {props.data.allMarkdownRemark.nodes.
            filter((node) => node.fields.langKey === props.lang).map((portf) =>  <SinglePortfolioItem portf={portf} key={portf.id} />)}
        </Slider>
      </article>
)

PortfolioContainer.propTypes = {
  data: PropTypes.object,
  lang: PropTypes.string
}

const Portfolio = (props) => (
  <StaticQuery query={
    graphql`
        {
          allMarkdownRemark(
            filter: {
              frontmatter: { 
                type: { eq: "portfolio" }
              }
            }
          ) {
            nodes {
              id
              fields {
                langKey
              }
              excerpt(pruneLength: 250)
              frontmatter {
                title
                type
                download_links {
                  windows
                }
                screenshots
                logo_icon
                bg_color
                text_color
                date
              }
            }
          }
        }
      `
  }
  render={
    (data) => <PortfolioContainer lang={props.lang} data={data} />
  } />
)

Portfolio.propTypes = {
  lang: PropTypes.string
}

export default Portfolio
