import React from "react";
import "./Contact.scss";
import { StaticQuery, graphql } from "gatsby"
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

/**
 * Prepends https
 * @param {string} url Url to be analyzed
 * @return {string} Converted url
 */
function createUrl(url) {
  if (!(/^https?:\/\//i).test(url)) {
    return `http://${url}`;
  }

  return url;
}

/* eslint-disable */
const pSBC = (p,c0,c1,l) => {
  if(typeof window === `undefined`) return;
  // https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
    let r,g,b,P,f,t,h,i=parseInt,m=Math.round,a=typeof(c1)=="string";
    if(typeof(p)!="number"||p < -1||p > 1||typeof(c0)!="string"||(c0[0]!='r'&&c0[0]!='#')||(c1&&!a))return null;
    if(!window.pSBCr) window.pSBCr=(d)=>{
        let n=d.length,x={};
        if(n>9){
            [r,g,b,a]=d=d.split(","),n=d.length;
            if(n<3||n>4)return null;
            x.r=i(r[3]=="a"?r.slice(5):r.slice(4)),x.g=i(g),x.b=i(b),x.a=a?parseFloat(a):-1
        }else{
            if(n==8||n==6||n < 4) return null;
            if(n < 6)d="#"+d[1]+d[1]+d[2]+d[2]+d[3]+d[3]+(n > 4?d[4]+d[4]:"");
            d=i(d.slice(1),16);
            if(n == 9 || n == 5) x.r=d >> 24 & 255,x.g=d>>16&255,x.b=d>>8&255,x.a=m((d&255)/0.255)/1000;
            else x.r=d>>16,x.g=d>>8&255,x.b=d&255,x.a=-1
        }return x};
    h=c0.length>9,h=a?c1.length>9?true:c1=="c"?!h:false:h,f=pSBCr(c0),P=p<0,t=c1&&c1!="c"?pSBCr(c1):P?{r:0,g:0,b:0,a:-1}:{r:255,g:255,b:255,a:-1},p=P?p*-1:p,P=1-p;
    if(!f||!t)return null;
    if(l)r=m(P*f.r+p*t.r),g=m(P*f.g+p*t.g),b=m(P*f.b+p*t.b);
    else r=m((P*f.r**2+p*t.r**2)**0.5),g=m((P*f.g**2+p*t.g**2)**0.5),b=m((P*f.b**2+p*t.b**2)**0.5);
    a=f.a,t=t.a,f=a>=0||t>=0,a=f?a<0?t:t<0?a:a*P+t*p:0;
    if(h)return"rgb"+(f?"a(":"(")+r+","+g+","+b+(f?","+m(a*1000)/1000:"")+")";
    else return"#"+(4294967296+r*16777216+g*65536+b*256+(f?m(a*255):0)).toString(16).slice(1,f?undefined:-2)
}
/* eslint-enable */

/**
 * Creates nice animated gradient
 * @param {string} inner_color - inner circle
 * @param {string} outer_color - outer circle
 * @returns {string} - complete keyframe
 */
function createKeyframes (inner_color, outer_color) {
  return keyframes`
  0% {
    background: radial-gradient(circle at center, ${inner_color} 0%, ${outer_color} 0%, ${outer_color} 100%);
  }
  12 % {
    background: radial-gradient(circle at center, ${inner_color} 11%, ${outer_color} 12%, ${outer_color} 100%);
  }
  25% {
    background: radial-gradient(circle at center, ${inner_color} 24%, ${outer_color} 25%, ${outer_color} 100%);
  }
  37% {
    background: radial-gradient(circle at center, ${inner_color} 36%, ${outer_color} 37%, ${outer_color} 100%);
  }
  50% {
    background: radial-gradient(circle at center, ${inner_color} 49%, ${outer_color} 50%, ${outer_color} 100%);
  }
  62% {
    background: radial-gradient(circle at center, ${inner_color} 61%, ${outer_color} 62%, ${outer_color} 100%);
  }
  75% {
    background: radial-gradient(circle at center, ${inner_color} 74%, ${outer_color} 75%, ${outer_color} 100%);
  }
  87% {
    background: radial-gradient(circle at center, ${inner_color} 86%, ${outer_color} 87%, ${outer_color} 100%);
  }
  100% {
    color: ${outer_color};
    text-decoration: underline;
    background: radial-gradient(circle at center, ${inner_color} 99%, ${outer_color} 100%, ${outer_color} 100%);
  }
`;
}

class ContactItem extends React.Component {
  render() {
    const { bg_color, text_color, link, name } = this.props.data;
    const webDrop = createKeyframes(text_color, bg_color);
    const ColorizedDiv = styled.div`
      box-shadow: 0px 0px 3px ${bg_color};
      color: ${text_color};
      background: linear-gradient(to top, ${pSBC(-0.2, bg_color)}, ${pSBC(0.2, bg_color)});
      &:hover {
        animation: ${webDrop} .2s linear 1;
        animation-direction: normal;
        animation-fill-mode: forwards;
      }
    `;
    
    return (
      <div>
        <a className="linkContact" target="_blank"
            rel="noopener noreferrer" href={createUrl(link)}>
          <ColorizedDiv className="contact_item">
            { name }
          </ColorizedDiv>
        </a>
      </div>
    )
  }
}

ContactItem.propTypes = {
  data: PropTypes.object
}

const Contact = () => (
  <StaticQuery
    query={
      graphql`
        {
          site {
            siteMetadata {
              contacts {
                name
                link
                text_color
                bg_color
              }
            }
          }
        }
      `
    }
    render={
      ({ site }) => (
        <article id="contact">
          <div id="contactWidget">
            {site.siteMetadata.contacts.map((contactObject, index) => {
              return <ContactItem key={index} data={contactObject} />
            })}
          </div>
        </article>
      )
    } />
)

export default Contact
