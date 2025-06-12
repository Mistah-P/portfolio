# Modern Portfolio Website

A high-end portfolio website with stunning animations and graphics, inspired by modern design trends.

## Features

- Responsive design that works on all devices
- Modern, high-contrast dark theme
- Custom cursor and interactive elements
- Smooth scroll animations using GSAP
- Floating badges with random movements
- Project cards with hover effects
- Contact form with validation

## Getting Started

### Prerequisites

No special prerequisites are needed to run this website. It's built with vanilla HTML, CSS, and JavaScript.

### Installation

1. Clone or download this repository
2. Open `index.html` in your browser

## Image Requirements

You'll need to add the following images to the `assets` folder:

- `profile.jpg` - Your profile photo (recommended size: 600x800px)
- `project1.jpg`, `project2.jpg`, `project3.jpg`, `project4.jpg` - Project thumbnails (recommended size: 800x600px)
- `blog1.jpg`, `blog2.jpg`, `blog3.jpg` - Blog post thumbnails (recommended size: 800x600px)

### Generating Placeholder Images

This repository includes two tools to help you generate placeholder images:

1. **Browser Tool**: Open `generate-images.html` in your browser, preview the images, and click the "Generate All Images" button to download them. Then move the downloaded images to the `assets` folder.

2. **Node.js Script**: If you prefer using Node.js, you can use the `create-placeholder-images.js` script. Follow the instructions in the script comments to generate the images.

## Customization

### Changing Colors

You can easily change the color scheme by modifying the CSS variables in the `:root` selector in `styles.css`:

```css
:root {
    --color-background: #0f0f0f;
    --color-text: #ffffff;
    --color-accent: #00ff66;
    --color-secondary: #ff3366;
    --color-tertiary: #33ccff;
    --font-heading: 'Anton', sans-serif;
    --font-body: 'Inter', sans-serif;
}
```

### Updating Content

To update the content, simply edit the text in the `index.html` file. The structure is organized into sections:

- Hero section
- Work section
- About section
- Blog section
- Contact section

## Technologies Used

- HTML5
- CSS3 (with CSS Variables and Flexbox/Grid)
- JavaScript (ES6+)
- GSAP (GreenSock Animation Platform)
- Google Fonts

## Browser Support

This website works in all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Feel free to use this template for your personal portfolio.

## Acknowledgments

- Fonts from Google Fonts
- Animations powered by GSAP
- Inspired by modern design trends 