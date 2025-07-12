# 💒 Sachin & Anna's Wedding Website

A beautiful, responsive wedding website built with HTML, CSS, and JavaScript. Features Google Forms RSVP integration, Google Maps, and elegant animations.

🌐 **Live Website**: [View the live site](https://YOUR_USERNAME.github.io/sachin-anna-wedding)

## ✨ Features

- 🎨 **Elegant Design**: Beautiful typography with Dancing Script and Playfair Display fonts
- 📱 **Fully Responsive**: Perfect on desktop, tablet, and mobile devices
- 🗺️ **Google Maps Integration**: Interactive venue location
- 📝 **Google Forms RSVP**: No login required for guests
- 🌸 **Floating Animations**: Delicate petal animations throughout the site
- 🎯 **Easy Customization**: All content managed through `config.js`
- ⚡ **Fast Loading**: Optimized images and minimal dependencies

## 🚀 Quick Start

### For Guests
Simply visit the website and:
1. Browse the wedding details
2. View the venue location on Google Maps
3. Click the RSVP form to respond
4. No account or login required!

### For Developers/Contributors
```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/sachin-anna-wedding.git

# Open in your browser
open index.html
```

## ⚙️ Customization

### Update Wedding Details
Edit `config.js` to modify:
```javascript
const weddingConfig = {
    coupleNames: "Sachin & Anna",
    weddingDate: "December 23rd, 2025",
    venueName: "Alpha Horizon",
    venueLocation: "Vallarpadam, Kochi",
    // ... more options
};
```

### Update Images
1. Add new images to the `images/` folder
2. Update paths in `config.js` or `styles.css`
3. Push changes to GitHub

### Update Google Form
1. Create a new Google Form
2. Get the embed URL
3. Update the `googleFormUrl` in `config.js`

## 📁 Project Structure

```
sachin-anna-wedding/
├── index.html          # Main HTML file
├── styles.css          # All styling and responsive design
├── script.js           # JavaScript functionality
├── config.js           # Wedding details and configuration
├── images/
│   └── alpha-horizon1.jpeg  # Venue image
└── README.md           # This file
```

## 🎨 Design Features

- **Hero Section**: Full-screen background with couple names and date
- **Event Details**: Beautiful cards showing ceremony and reception
- **Venue Section**: Background image with venue information and map
- **RSVP Section**: Embedded Google Form for easy responses
- **Animations**: Floating petals and smooth scroll effects

## 📱 Mobile Optimization

- Responsive grid layouts
- Touch-friendly navigation
- Optimized images for mobile
- Readable typography on small screens

## 🔧 Technical Details

- **No Framework**: Pure HTML, CSS, and JavaScript
- **No Dependencies**: Only Google Fonts and Google services
- **Fast Loading**: Minimal external resources
- **SEO Friendly**: Semantic HTML structure
- **Accessible**: Proper ARIA labels and keyboard navigation

## 🌐 Deployment

This site is deployed on **GitHub Pages**:
- Automatic deployment from main branch
- Free hosting with SSL certificate
- Custom domain support (optional)

## 📞 Support

For questions about the website or RSVP issues, contact the couple directly.

---

*Built with ❤️ for Sachin & Anna's special day* 