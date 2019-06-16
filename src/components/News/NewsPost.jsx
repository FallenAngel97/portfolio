import React from "react";
import "./NewsPost.scss";
import android_logo from "../MainHero/android-logo.svg";
import file from "../MainHero/file.svg";
import paint_brush from "../MainHero/paint-brush.svg";
import parse from "html-react-parser";
import domToReact from "html-react-parser/lib/dom-to-react"
import { Link } from "gatsby";

export default class NewsPost extends React.Component {
  render() {
    let pic = paint_brush;
    let colorLeft = ''
    const { categories } = this.props;
    switch(categories) {
      case "web_development":
        pic = file;
        colorLeft = ' blue';
        break;
      case "android_development":
        pic = android_logo;
        colorLeft = ' green';
    }

    console.log(this.props.link);

    const parserOptions = {
      replace: domNode => {
        const {children, type, name} = domNode;
        if(type === 'tag' && name === 'figure') {
          return (
            <figure className="newsHeroImage">
              {domToReact(children, parserOptions)}
            </figure>
          )
        }
      }
    }
    return(
      <Link to={{ pathname: this.props.link, state: { modal: true } }}>
        <div className='singlePost'>
          <div className={'typeOfNews' + colorLeft}></div>
          <img className='typeOfNewsPic' src={pic} />
          <div className='holderContent'>
            <p>
              {this.props.content}
            </p>
          </div>
          <hr/>
          <div className="newsTitle"><h4>{this.props.title}</h4></div>
          <span className='dateOfPost'>{this.props.date}</span>
        </div>
      </Link>
    )
  }
}
