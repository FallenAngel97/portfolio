import React from "react";
import "./NewsPopup.scss";
import android_logo from "../MainHero/android-logo.svg";
import parse from "html-react-parser";
import file from "../MainHero/file.svg";
import paint_brush from "../MainHero/paint-brush.svg";

const AndroidBadge = () => {
  return <div id='android_badge'>
          <img src={android_logo} />
          <span>Android development</span>
        </div>
}

const WebBadge = () => {
  return <div id='web_badge'>
          <img src={file} />
          <span>Web development</span>
        </div>
}

const DesignBadge = () => {
  return <div id='design_badge'>
          <img src={paint_brush} />
          <span>Design</span>
        </div>
}

export default class NewsPopup extends React.Component {
  state = {
    title: '',
    date: '',
    content: '',
    categories: ''
  }

  constructor(props) {
    super(props);
    let xhr = new XMLHttpRequest();
    let slug = window.location.href.match(/news\/(.*)$/i);
    xhr.open("GET", "/wp-json/wp/v2/posts?slug="+slug[1].replace(/\/$/, ''));
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) 
      {
        let post = JSON.parse(xhr.response)[0];
        this.setState({
          title: post.title.rendered,
          date: post.date,
          content: post.content.rendered,
          categories: post.categories
        })
      }
    }
    xhr.send();
  }
  back = e => {
    e.stopPropagation();
    this.props.history.goBack();
  };
  render() {
    let badge = <DesignBadge />;
    // if(this.state.categories.indexOf(CustomThemeSettings.categories.web_development) > -1) {
    //   badge = <WebBadge />;
    // } else if(this.state.categories.indexOf(CustomThemeSettings.categories.android_development) > -1) {
    //   badge = <AndroidBadge />
    // }
    return (
      <div onClick={this.back} id='newsPopup'>
        <div id='news_opened_popup'>
          <h2>{this.state.title}</h2>
          <div id='content_news_opened'>{parse(this.state.content,{})}</div>
          <div className='badges'>
            {badge}
            <div id='timestamp_popup'>{this.state.date}</div>
          </div>
        </div>
      </div>
    )
  }
}
