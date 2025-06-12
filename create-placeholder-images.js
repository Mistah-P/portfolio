// This script creates placeholder images for the portfolio
// Run it in the browser console or in Node.js with canvas package installed

// For browser usage, uncomment this code:
/*
function createCanvas(width, height) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas;
}

function downloadImage(canvas, filename) {
    const link = document.createElement('a');
    link.download = filename;
    link.href = canvas.toDataURL('image/jpeg', 0.8);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
*/

// For Node.js usage with canvas package, uncomment this code:
/*
const { createCanvas } = require('canvas');
const fs = require('fs');

function downloadImage(canvas, filename) {
    const buffer = canvas.toBuffer('image/jpeg');
    fs.writeFileSync(`./assets/${filename}`, buffer);
    console.log(`Created ${filename}`);
}
*/

// Configuration
const images = [
    { name: 'profile.jpg', width: 600, height: 800, color: '#333333', text: 'Profile Photo' },
    { name: 'project1.jpg', width: 800, height: 600, color: '#FF5733', text: 'Project 1' },
    { name: 'project2.jpg', width: 800, height: 600, color: '#33FF57', text: 'Project 2' },
    { name: 'project3.jpg', width: 800, height: 600, color: '#3357FF', text: 'Project 3' },
    { name: 'project4.jpg', width: 800, height: 600, color: '#F3FF33', text: 'Project 4' },
    { name: 'blog1.jpg', width: 800, height: 600, color: '#FF33A8', text: 'Blog Post 1' },
    { name: 'blog2.jpg', width: 800, height: 600, color: '#33FFF6', text: 'Blog Post 2' },
    { name: 'blog3.jpg', width: 800, height: 600, color: '#A833FF', text: 'Blog Post 3' }
];

// Generate placeholder images
function generatePlaceholderImages() {
    images.forEach(img => {
        const canvas = createCanvas(img.width, img.height);
        const ctx = canvas.getContext('2d');
        
        // Fill background
        ctx.fillStyle = img.color;
        ctx.fillRect(0, 0, img.width, img.height);
        
        // Add grid pattern
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = 1;
        
        // Vertical lines
        for (let x = 0; x < img.width; x += 20) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, img.height);
            ctx.stroke();
        }
        
        // Horizontal lines
        for (let y = 0; y < img.height; y += 20) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(img.width, y);
            ctx.stroke();
        }
        
        // Add text
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.font = 'bold 32px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(img.text, img.width / 2, img.height / 2);
        
        // Add dimensions text
        ctx.font = '16px Arial';
        ctx.fillText(`${img.width}x${img.height}`, img.width / 2, img.height / 2 + 40);
        
        // Save image
        downloadImage(canvas, img.name);
    });
    
    console.log('All placeholder images have been generated!');
}

// Run the generator
// generatePlaceholderImages();

// Instructions:
console.log(`
INSTRUCTIONS:

For browser usage:
1. Uncomment the browser-specific code at the top
2. Uncomment the generatePlaceholderImages() call at the bottom
3. Copy this entire script
4. Open your browser console (F12)
5. Paste and run the script
6. Save the downloaded images to your assets folder

For Node.js usage:
1. Install the canvas package: npm install canvas
2. Uncomment the Node.js specific code at the top
3. Uncomment the generatePlaceholderImages() call at the bottom
4. Run: node create-placeholder-images.js
`); 