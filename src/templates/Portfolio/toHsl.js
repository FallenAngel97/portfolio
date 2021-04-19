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
