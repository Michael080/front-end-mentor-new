# Frontend Mentor - 3-column preview card component solution

This is a solution to the [3-column preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![](./images/screenshot-mobile.png)
![](./images/screenshot-desktop.png)

### Links

- Live Site URL: [Add live site URL here](https://michael080.github.io/3-column-preview-card-component/)

## My process



### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

The most impactful thing I learned with this project is how to declare and us CSS variables. I wouldn't be surprised if my implementation represents the tip of an iceberg Or maybe that is what I hope because it would be great if there are more nuggets of gold in there.

Selecting root applies these values, or makes them accesible to, the entire stylesheet. There are other selection methods that limit their accessibility as well:

```css
:root {
  --light-gray: hsl(0, 0%, 95%); /* buttons, background, & type*/
  --accent-sedan: hsl(31, 77%, 52%);
  --accent-suv: hsl(184, 100%, 22%);
  --accent-luxury:  hsl(179, 100%, 13%);
} 

/* To use the variable: */

div {
  color: var(--light-gray);
}
```

### Continued development

Sometimes when I try to use this CSS "one-liner" for centering items on both axis using grid it doesn't work. The most recent example is the text, "learn more", in the button. I have no clue why, I should figure it out:
```css
div {
  display: grid;
  place-items: center;
}
```
In this case it centered the text horizontally but not vertically. I tried removing padding etc,. to no avail.

### Useful resources

- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) - This page goes pretty in depth, but also has the basic syntax for getting started w/ CSS variables.

## Author

- Frontend Mentor - [@Michael080](https://www.frontendmentor.io/profile/Michael080)
- Twitter - [@MichaelRollin5](https://www.twitter.com/MichaelRollin5)