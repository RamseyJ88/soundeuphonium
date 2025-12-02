// Configuration file for clickable areas
// Copy this structure and adjust positions as needed

const clickableAreasConfig = [
    {
        id: 'area1',
        audio: 'audio1.mp3',
        description: 'This is area 1',
        position: {
            top: '20%',      // Distance from top (percentage or pixels like '200px')
            left: '30%',     // Distance from left (percentage or pixels)
            width: '100px',  // Width of clickable area
            height: '100px'  // Height of clickable area
        }
    },
    {
        id: 'area2',
        audio: 'audio2.mp3',
        description: 'This is area 2',
        position: {
            top: '50%',
            left: '60%',
            width: '120px',
            height: '80px'
        }
    },
    {
        id: 'area3',
        audio: 'audio3.mp3',
        description: 'This is area 3',
        position: {
            top: '70%',
            left: '20%',
            width: '90px',
            height: '90px'
        }
    }
    // Add more areas here by copying the structure above
];

// This function generates the HTML for clickable areas
// You can use this in the HTML or call it from script.js
function generateClickableAreasHTML() {
    return clickableAreasConfig.map(area => {
        const { top, left, width, height } = area.position;
        return `
        <div class="clickable-area" 
             id="${area.id}"
             data-audio="${area.audio}" 
             data-description="${area.description}"
             style="top: ${top}; left: ${left}; width: ${width}; height: ${height};">
            <div class="hover-description">${area.description}</div>
        </div>`;
    }).join('\n');
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { clickableAreasConfig, generateClickableAreasHTML };
}

