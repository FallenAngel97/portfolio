import React from "react";
import PropTypes from 'prop-types';
import WindowsLogo from "./Windows_Store_Logo.svg";

/**
 * Converts from hexadecimal string to hsl object
 * @param {string} hex Hexadecimal color string
 * @return {object} HSL object
 */
export function toHsl(hex) {
  const result = (/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i).exec(hex);

  let red = parseInt(result[1], 16);
  let green = parseInt(result[2], 16);
  let blue = parseInt(result[3], 16);

  red /= 255;
  green /= 255;
  blue /= 255;
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  let lightness = (max + min) / 2;

  let hue = 0;
  let saturation = 0; 
  // Achromatic
  if(max !== min) {
    const differ = max - min;
    saturation = lightness > 0.5 ? differ / (2 - max - min) : differ / (max + min);
    switch(max) {
      case red: 
        hue = ((green - blue) / differ) + (green < blue ? 6 : 0);
        break;
      case green: 
        hue = ((blue - red) / differ) + 2;
        break;
      default:
        hue = ((red - green) / differ) + 4;
        break;
    }
    hue /= 6;
  }

  saturation *= 100;
  saturation = Math.round(saturation);
  lightness *= 100;
  lightness = Math.round(lightness);
  hue = Math.round(360 * hue);

  return { hue: hue,
    saturation: saturation,
    lightness: lightness };
}

class SinglePortfolioItem extends React.Component {
  constructor(props) {
    super(props);
    this.parentRef = React.createRef();
    this.drawTheBackground = this.drawTheBackground.bind(this);
  }
  static checkOutsideOfBoundsHsl(colorHsl) {
    if(colorHsl.hue !== 360) {
      colorHsl.hue += 1;
    }
    if(colorHsl.saturation !== 100) {
      colorHsl.saturation += 1;
    }
    if(colorHsl.lightness !== 100) {
      colorHsl.lightness += 1;
    }
    
    return colorHsl;
  }
  static createGradient(context, colorHsl, radius) {
    const gradient = context.createLinearGradient(0, 0, radius, radius);
    gradient.addColorStop(0, `hsl(${colorHsl.hue},${colorHsl.saturation}%,${colorHsl.lightness - 5 > 0 ? colorHsl.lightness - 5 : colorHsl.lightness}%)`);
    gradient.addColorStop(1, `hsl(${colorHsl.hue},${colorHsl.saturation}%,${colorHsl.lightness + 5 < 100 ? colorHsl.lightness + 5 : colorHsl.lightness}%)`);
    
    return gradient;
  }
  drawTheBackground () {
    const [canvas] = this.parentRef.current.
      getElementsByTagName('canvas');
    const height = window.innerHeight;
    const canvas_width = parseInt(getComputedStyle(canvas).getPropertyValue("width"), 10);
    canvas.width = canvas_width * window.devicePixelRatio
    canvas.height = height * window.devicePixelRatio
    const ctx = canvas.getContext('2d');
    let color_hsl = toHsl(this.props.portf.frontmatter.bg_color);
    let { saturation, lightness } = color_hsl;
    if(saturation > 85) {
      saturation = 86;
    }
    if(lightness > 85) {
      lightness = 86;
    }
    ctx.fillStyle = this.props.portf.frontmatter.bg_color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i < 4; i++) {
      let { width } = canvas;
      let radius = Math.random() * (((height / 2) - 5) + 5);

      color_hsl = SinglePortfolioItem.checkOutsideOfBoundsHsl(color_hsl);

      while(width > 0) {
        ctx.beginPath();
        ctx.fillStyle = SinglePortfolioItem.createGradient(ctx, color_hsl, radius);
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
        ctx.fill();
        width -= radius;
        radius = Math.random() * (((height / 2) - 5) + 5);
      }
    }
    const elems = this.parentRef.current.getElementsByClassName('st1');
    for(let i = 0; i < elems.length; i++) {
      elems[i].style.fill = this.props.portf.frontmatter.text_color;
    }
  }
  componentDidUpdate () {
    this.drawTheBackground();
  }
  componentDidMount () {
    window.requestAnimationFrame(() => {
      this.drawTheBackground();
    });
  }
  static renderLinks (download_links) {
    return download_links.map((link, index) => (
      link.windows && <a key={index} rel="noopener noreferrer" target="_blank" href={link.windows}><WindowsLogo id="windows_logo" /></a>
    ));
  }
  render() {
    const { text_color, screenshots, title, logo_icon, download_links } = this.props.portf.frontmatter;

    return(
      <div ref={this.parentRef} className="singlePortfolioElement">
        <canvas />
        <span style={{ color: text_color }} className="portfolioTitle">{ title }</span>
        <table className="wp-block-f97a-portfolio-container">
          <tbody>
            <tr>
              <td rowSpan={3}>
                <div id="imgWrapper">
                  {screenshots.map(
                    (screenshot, index) => <img alt={`screenshot ${index}`} key={index}
                       className="screenshots" src={screenshot} />
                  )}
                </div>
              </td>
              <td>
                <img className="project_icon" alt="project_logo" src={ logo_icon } />
              </td>
            </tr>
            <tr>
              <td>
                <div style={{
                    background: `${text_color}0D`,
                    padding: '20px',
                    color: text_color 
                  }} className="f97a-portfolio-description">
                  { this.props.portf.excerpt }
                </div>
              </td>
            </tr>
            <tr>
              <td>{SinglePortfolioItem.renderLinks(download_links)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

SinglePortfolioItem.propTypes = {
  portf: PropTypes.object
}

export default SinglePortfolioItem
