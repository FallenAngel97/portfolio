(self.webpackChunkf97a_portfolio=self.webpackChunkf97a_portfolio||[]).push([[865],{7183:function(t,A,e){"use strict";e.r(A),e.d(A,{default:function(){return w}});var n=e(7294);function o(t,A){return Math.random()*(A-t)+t}var w=function(){var t=(0,n.useState)([{left:10,top:20,offset:50}]),A=t[0],e=t[1];return(0,n.useState)((function(){if("undefined"!=typeof navigator){for(var t=[],A=0;A<6;A++)t.push({left:o(0,window.innerWidth),top:o(0,window.innerHeight),offset:o(-100,100)});e(t)}}),[]),A.map((function(t,A){return n.createElement("img",{style:{left:t.left+"px",position:"absolute",top:t.top+"px",transfrom:"translateY("+t.offset+"%)"},src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAYAAACo29JGAAAJIElEQVRogc1aW29cVxX+9sz4MuPLeDy+xrEdl2A3gZYWQUNC6lCKIAoIIfGCSuFP8MgTj7yjvCKQEAgJqVAQtwrCTdAChQiwcS0Sx06c2PE1vow9Hs9G38l3wvHMnNt4Erqko7nsc9bZ317XvdY2V69eRYPJiF0CQAbAUwAmAXwCwDiAHIAigA0ANwC8DeAagD8DKMSdyv37933HUg3CldR1KHDkmwfwHICXAFwEcBpAp+edwwCeAfBZAZ0C8C0ArwNYAmCPO6njgkt6eJT1Ow1gCMCHAXxMnyMAOnx4cDG6ALwPwJcANAP4EYBFLVbddBxwrvodClSbpDUuQB8BcBZAP4DWCLw69Syl+evjgHKpXnBGF0G1A+gD8B6tPlXx/ZIepdUUkWdCvLolvUq1NHFVtR5wRhPOCsBpgSKg9wIY0FiYtGpRk1S0W3Mreu6JbYMpa4OfMcY8+qorLSl9CMDzAkeb6tXKt0gK9VCTeJ8HsAzgNoBtAKV6mIVKzlrrde2dsolPA7ggj8eVzhhjoqqfQwsLC5ibm8P29jba29tx6tQpDA8P810n5FhOAvgjgL8CuCWQsSh55cqVMPDGPBRfTo7i8wA+CeBpOZC0bC8SkdXU1BRmZmawv7/PxXM+l5aWcHh4iN7e3pTU8mldg3JaO7qOqNru7m7g5P2oRe7dWmvpGJ5VTHoZwGgtm/KosC+trKzg5s2bNYdv3LiBvr4+dHd3J4wxHbLjYXnR1wD8EgAfLoa+KABci/R/V5J5ShnGRTmRms4izH5Jt27dChynqnZ3d7u8kpLiRXlkasoPAfwbwF4ouBoTSihmbQt8rzGGBv5RAKc0Vjetr68HPspxd04eTeBinwHwZX3/PoBpAPtxweWMMTtSSTqLZ621L0o12jzBu4qiqGWxGKxR3vGKuaVkDl9QiLCSoC/AI+CMMVS3fWttSeo4Jq/4jNTjiOOoBBNFLZubmx0H4kdNTYFON6mw84rM5rV8Pk+Au6urq1WpWsI7IWstfxestUlrbb+19py19ry1dsha28R7K+6PdHkpl8sFgnftLWChCHBMAF/V4g/m8/mWqhsvX77sfk8pWPLhHgVSxrMPKAwkoqidl2rdT8ktLi76PnP27Fmk0+kw1gmldlTTvN6zl8lk9gqFwiO18IJzM5Ccsg8CO6c4EytNC1oETrxUKmFzc7NqjIH85MmTUfkbZUQjntC0lU6n1wuFgmO4rs0Zj5dkbPmUJMdsoSmuxMJsb3x83MlK6PYLhQIymQxGR0cxNDQU+Kw7D8+cjST4nHwC51/M5XJ/WV9fty64hDLxMe3BLmg10mQYxVEgord06cSJE87lJb/3VICqGlZ4GFMsnjHGcOO74wXXo0T4vOJZa1xgj2MRAkBVUsoYw2xmwlrb4wXXquz+guJZNk5m/y5ZBKaJLcpk+rLZ7DzBubHjnHS3J04iHIce8yK4+8wJAPSSiyl5x5dka2PSX3cpHgfGSJOtcxFS0rwvAtik5F4A8BnFs6xXalHV4l20CG4thiHi4wT3OTmSHj87Ozg4wL1797C2toadnR3nN9OktrY2J6MYHBwMS5scekKL4NZ2ThPcJT9gnAz3X7Ozs07g9RIBbmxsONf8/LwTu3p7e4Pf+mQ1IcdcclQ5ZVWeSElNT09XAaskjnN3zfuj5ptBV1QK4dOR8jqQSmIGEYe4w+7q6gqUSNwYF0QhvDqolgd+tcWg+oTf/Y1QqQYtwhbBbagsV0XM+ehAolKEbL6hTiVkEbZoa0t+ejsyMhLrZczqn5A9RbnWCe4dvxuz2azjBZPJ4ISF4xMTE879jXAoDVqEOarljN+DFDnjWGdnp1NX5B6MdkXvmEqlHLUloP7+fifO/T+CeYBaTqXU/KtJ7mQpmVpbFO8LGgGsXC7jzp07TmxlnaWlpcWJndznJRKxK/RvUnJ/UCXpyBLE8VaNSIYJjLGS5XWX9vb2nLI7NebMmTNxALJyd402d9da+3Yjij9hFMSHEvMC89KDBw+c8Rg2e71UKq26mck3VV0u2YcUGVSjFoGqGETsfdfi6fO+78FT+PmutfYVFYN61Kiv6SJDtvx13x+nWOuSD0+q5HfgKRCtAfiaGh3Pq0eW91a9Hhcol8KKtRz38grwCa9ba+/wS/LSpUvun/MA7qnBkNGeqDXurrze2ibDy9bWlu99DDcdHR1B/In8QL094vhfOd0Yw4F/qAe2q88PqmEfnle5b6hTsgMDA45XrJXucd/IPaMPfxfUAwA/MMb8zR3wSg6eJt993dyknW2rSn8Nzeq95CYM/ORekaGBcY4SY1rnEwbK6kZR694C8BVjzKNsv1aXh4q/YIzZlwT58IuqY7Zz7xc2UW5gl5eXH+0qmMlwkkHbIRIB+CULFfO0Om20olNIbxljvp1IJI643OTk5GQVH326D6+oh9AsCTbJDh+WnCokSZfNBiO9m+ua+Z19Nzdl81Lc8p3aVyvqsL4J4GdqSE5XStfvNAP/LBtj2CmkDm/pyNKk2lkDKl0nKp+/e/eu78w4VlmKiGGjZc2DnvBfOiv2dx2rWkwmk1WM/BocZQG3sj0yWNeRJc7+BYWLTlV6I00wChgfXiXtO2cBMF38jRqPK04JL5WqyTSoe1OUlyxLRd3jEsuKiy+rANrtOc7heL3bt2/XZMixMKoBvqj3/RPAGzrhN2uM4VwO/ICFgYNAtes+fl8FcF2uN6H6S6u3T97T0+PYFm2PHRxoh051pEOJooYe6RUVsxiifg7gV/KMu9KqQGZR+m7bKtZ2eWLgtEDl1UIa8Z5wIIgwzxhEWoCSQhLt6icAfidgTDJcnxDIJ2pTcVPS6ZQN7sgO3xDwtIJ9c92IjtKh7InO7Kd4aGMLkqRzNgYR7DdOx3RHqpnW6q0pcGb03zkVmo57hvNQdn1dqnhNZ8D2BCwyxZ1IWSATsjtO4vdSTVeC2aDjHCFk5e7fAfAL2dicEov4p/bqnIS7gvuKO3/SQbQ+AfQt9IbQvtSPB9p+rOyj7tOyjTjjXJTRb2p1X1UvPS5vOpDfAviGzniFHn8Ko0Yd4KYk/wPgqwC+DoDZOI8B89Qd+2X0qpUOiUkBVY7xi7bLo7+048YQgP8CLuuRhhevCyMAAAAASUVORK5CYII=",key:A})}))}}}]);
//# sourceMappingURL=component---src-pages-asteroids-jsx-82bded0fb9bb5d5c7bed.js.map