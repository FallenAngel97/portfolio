import React from "react";
import "./News.scss";
import NewsPost from "./NewsPost.jsx";
import NewsPopup from "./NewsPopup";
import { StaticQuery, gatsby, graphql } from "gatsby";

export default class News extends React.Component {
  render() {
    return(
      <article id='news'>
        <StaticQuery query={
          graphql`
          {
          allMarkdownRemark(
            filter: {
              frontmatter: { 
                type: { eq: "news" }
              }
            }
            sort: {
              fields: [frontmatter___date],
              order: DESC
            }
          ) {
            nodes {
              id
              fields {
                langKey
              }
              excerpt(pruneLength: 250)
              rawMarkdownBody
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
        }`} render={
          (data) => data.allMarkdownRemark.nodes.map((post) => {
            return <NewsPost
              key={post.id}
              link={""}
              title={post.frontmatter.title}
              date={post.frontmatter.date}
              categories={post.frontmatter.news_category}
              content={post.excerpt}
              htmlMarkup={post.rawMarkdownBody}
            />
          })
        }/>
      </article>
    );
  }
}
