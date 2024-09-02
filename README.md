# Frontend Mentor - FAQ Accordion Solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). This challenge helped me improve my skills in HTML, CSS, and JavaScript by creating a dynamic and responsive FAQ accordion.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)


## Overview

### The Challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked.
- Navigate the questions and hide/show answers using keyboard navigation alone.
- View the optimal layout for the interface depending on their device's screen size.
- See hover and focus states for all interactive elements on the page.

### Screenshot

![FAQ Accordion Screenshot]![image](https://github.com/user-attachments/assets/5cf9a256-b081-4052-aeda-dfc3435dc54e)


### Links

- [Solution URL](https://github.com/Phushyamithra/FAQ-Accordion-FM)
- [Live Site URL](https://phushyamithra.github.io/FAQ-Accordion-FM/)

## My Process

### Built With

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript

### What I Learned

In this project, I reinforced my understanding of creating dynamic content using JavaScript and improved my CSS skills for responsive design. One of the key learnings was using JavaScript to toggle visibility of elements dynamically based on user interactions:

```js
document.addEventListener('DOMContentLoaded', () => {
  const questions = document.querySelectorAll('.question');
  questions.forEach((question) => {
    question.addEventListener('click', () => {
      question.classList.toggle('active');
      const answer = question.nextElementSibling;
      if (question.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        answer.style.maxHeight = 0;
      }
    });
  });
});
```

This approach ensures that the accordion transitions smoothly when answers are shown or hidden.

### Continued Development

I plan to continue focusing on accessibility improvements, like making sure all elements are keyboard-navigable and providing better feedback to users. Additionally, I aim to explore more advanced JavaScript techniques to enhance interactivity in future projects.

### Useful Resources

- [MDN Web Docs](https://developer.mozilla.org/) - This is my go-to resource for JavaScript and CSS references.
- [CSS Tricks](https://css-tricks.com/) - I used this to refine my understanding of Flexbox and responsive design patterns.

## Author

- Website - [Your Name](https://portfolio-mine-kappa.vercel.app/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/Phushyamithra)
- LinkedIn - [@yourusername](https://www.linkedin.com/in/phushya-mithra-gauri-77a359171/)

---
