import React from "react";
import "./News.scss";
import NewsPost from "./NewsPost.jsx";
import NewsPopup from "./NewsPopup";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { StaticQuery, gatsby, graphql } from "gatsby";

export default class News extends React.Component {
  render() {
    return(
      <article id='news'>
        <Route path={`/#news/:news_title`} component={NewsPopup} />
        <StaticQuery query={
          graphql`
          {
          allMarkdownRemark(
            filter: {
              frontmatter: { 
                type: { eq: "news" }
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
                news_category
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
        } render={
          (data) => data.allMarkdownRemark.nodes.map((post) => {
            return <NewsPost
              key={post.id}
              link={""}
              title={post.frontmatter.title}
              date={post.frontmatter.date}
              categories={post.frontmatter.news_category}
              content={post.excerpt}
            />
          })
        }/>
      </article>
    );
  }
}
