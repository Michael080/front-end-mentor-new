# Frontend Mentor - Four card feature section solution

This is a solution to the [Four card feature section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

### Screenshot

![](./images/screenshot_mobile-view_375px.png)
![](./images/screenshot_desktop-view_1440px.png)

### Links

- Solution URL: [Github Repo - Michael080/front-end-mentor](https://github.com/Michael080/front-end-mentor/tree/main/newbie/5_four-card-feature-section)
- Live Site URL: [Live Site via Github](https://michael080.github.io/four-card-feature-section/)

## My process

- Design built mobile-first.

Mobile-view:
- Implement column-orientation of cards using flexbox.
- Use a separate container, containing the two 'middle' cards, which will later be used to achieve desktop-layout spec'd by frontendmentor.io.
- Apply final styles such as box-shadow and border-colors.

Desktop-view:
- Achieve final desktop layout by laying out the container for all the cards as a flex-row and displaying .row-2 as a flex-column using media-queries.

### Built with

- Semantic HTML5 markup
- Flexbox
- Media-queries
- Mobile-first workflow

### What I learned

I learned how to use the CSS box-shadow property using the basic syntax which takes the shadow for x/y axis, blur radius, and color.

```css
.card {
  box-shadow: .75em .75em 20px var(--gray-blue);
}
```

### Continued development

I pretty easily implemented the design using flexbox but see that if I wanted to add a sort of 'transitional' layout between column-layout and the final, sort of mixed-layout, it would be difficult. For example if I wanted to transition from single-column to dual-column to mixed row & column using the .row-2 container, which is very handy for flex, complicates things potentially unnecessarily. 

It may be that grid would be more wieldy or make for a layout which is more pliable to modifications in the future. So, I intend on brushing up on that aspect of CSS so I can at least do side-by-side comparisons of grid vs. flexbox on future projects.

## Author

- Frontend Mentor - [@Michael080](https://www.frontendmentor.io/profile/Michael080)
- Twitter - [@MichaelRollin5](https://www.twitter.com/MichaelRollin5)