# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](./images/screenshot-mobile_375px.png)
![](./images/screenshot-mobile_375px.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/Michael080/front-end-mentor/tree/main/newbie/4_faq-accordion-card-main)
- Live Site URL: [Github Pages](https://michael080.github.io/faq-accordion-card/)

## My process

Mobile-first:

- Build mobile-view of design first.
  - Layout questions and answers using flex-box.
  - Layout images using CSS --background-image.
  - Adjust layout for different screen sizes using    media-queries.

Desktop-view:

- Change accordion layout to 'landscape' style layout.
- Display desktop-svgs using CSS syntax for multiple-backgrounds.

Hide show answers:

- Use JS to toggle CSS-class .hidden & active which hides/shows answer elems and applies increased font-weight to clicked-questions.

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow

### What I learned

The most valuable experience I gained from this project was working with svgs and implementing them using the background-image property. Towards the end of the project while working on desktop-views for the project I discovered the CSS syntax for applying multiple background-images to a single element and this helped greatly.

```html
<div class="img"></div>
```

```css
/* comma-separated values correspond in the same order throughout: */
.img {
    background-image: url(./images/illustration-box-desktop.svg), url(./images/illustration-woman-online-desktop.svg), url(./images/bg-pattern-desktop.svg);
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position: left, top, bottom;
    background-size: 150px, 415px, 415px;
}
```

### Continued development

I accomplished a responsive-layout using way too many media queries in my opinion. This didn't occur to me until I was well committed to a sub-optimal approach. On future projects I am going to try to find an implementation that doesn't require pushing pixels around every 100px change in screen-width.

### Useful resources

- [CSS Multiple Background Images (W3 Schools Website)](https://www.w3schools.com/Css/css3_backgrounds.asp) - This is a useful resource for the CSS syntax for applying multiple background-images to a single element.

## Author

- Frontend Mentor - [@Michael080](https://www.frontendmentor.io/profile/Michael080)
- Twitter - [@MichaelRollin5](https://www.twitter.com/MichaelRollin5)