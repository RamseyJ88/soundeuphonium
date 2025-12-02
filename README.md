# Sound Euphonium - Interactive Website

An interactive single-page website where hovering over areas shows descriptions and clicking plays/pauses audio files.

## Features

- **Hover Descriptions**: Move your mouse over clickable areas to see descriptions
- **Click to Play/Pause**: Click an area to play its audio, click again to pause
- **Easy Positioning**: Adjust clickable area positions using inline styles or CSS
- **Visual Feedback**: Areas highlight when hovered and pulse when audio is playing

## Setup

1. **Add your image**: Replace `your-image.jpg` in `index.html` with your actual image file
2. **Add audio files**: Place your audio files in the project directory and update the `data-audio` attributes
3. **Configure clickable areas**: Adjust the position and size of clickable areas (see below)

## Configuring Clickable Areas

### Method 1: Inline Styles (Easiest)

Edit the `style` attribute in each `.clickable-area` div in `index.html`:

```html
<div class="clickable-area" 
     data-audio="audio1.mp3" 
     data-description="Your description here"
     style="top: 20%; left: 30%; width: 100px; height: 100px;">
```

- `top`: Distance from top of image (percentage or pixels)
- `left`: Distance from left of image (percentage or pixels)
- `width`: Width of clickable area
- `height`: Height of clickable area

### Method 2: CSS Classes

Add custom classes in `styles.css`:

```css
.my-custom-area {
    top: 25%;
    left: 40%;
    width: 150px;
    height: 120px;
}
```

### Adding New Areas

To add a new clickable area, copy this template and adjust:

```html
<div class="clickable-area" 
     data-audio="your-audio.mp3" 
     data-description="Description text"
     style="top: X%; left: Y%; width: Wpx; height: Hpx;">
    <div class="hover-description">Description text</div>
</div>
```

## Debug Mode

Press the `D` key while on the page to toggle debug mode, which shows all clickable areas with red borders.

## Browser Compatibility

Works in all modern browsers that support:
- HTML5 Audio API
- CSS3 Transitions
- ES6 JavaScript

## File Structure

```
soundeuphonium/
├── index.html      # Main HTML file
├── styles.css      # Styling and positioning
├── script.js       # Interactive functionality
├── README.md       # This file
└── [your files]    # Your image and audio files
```
