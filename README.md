# Frontend Mentor - Manage landing page solution

This is a solution to the [Manage landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#Desktop-Preview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See all testimonials in a horizontal slider
- Receive an error message when the newsletter sign up `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Desktop Preview

![](./design/desktop-preview.jpg)

### Links

- Solution URL: [https://github.com/Chzmo/Frontend-Mentor_Manage-landing-page-solution](https://github.com/Chzmo/Frontend-Mentor_Manage-landing-page-solution)
- Live Site URL: [https://effulgent-bavarois-cef0f1.netlify.app/](https://effulgent-bavarois-cef0f1.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Desktop-first workflow
- [Sass](https://sass-lang.com/) - CSS Extension
- [SwiperJs](https://swiperjs.com/) - Working with Slider

### What I learned

Swiper Js Comes handy when dealing with carousel and adding navigation to the links

```js
<script>
    var widthQuery = window.matchMedia("(min-width: 600px)");
    var swiper = new Swiper(".mySwiper", {
        
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints:{
            0:{
                slidesPerView: 1,
                paceBetween: 5
            },
            600:{
                slidesPerView: 2,
                spaceBetween: 5
            },
            1200:{
                slidesPerView: 3,
                spaceBetween: 20
            },
        }
    });
    </script>
```

### Continued development

In would like to focus more on Flexbox so that i can reduce code in media queries for responsive layout and working on Mobile-First workflow

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://sass-lang.com) - This is an amazing article which helped me finally understand . I'd recommend it to anyone still learning this concept.

## Author

- Website - [Chisomo Zaliro Moyo](https://www.chzmo.com)
- Frontend Mentor - [@chzmo](https://www.frontendmentor.io/profile/chzmo)

## Acknowledgments

Many thanks to Brad, who owns [Traversy Media](https://www.youtube.com/c/TraversyMedia) where i got inspiration the to code this in pure CSS from in his solution in Tailwind.
