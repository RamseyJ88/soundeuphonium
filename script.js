// Initialize all clickable areas
document.addEventListener('DOMContentLoaded', function() {
    const clickableAreas = document.querySelectorAll('.clickable-area');
    const audioElements = new Map(); // Store audio elements for each area
    
    clickableAreas.forEach((area, index) => {
        const audioSrc = area.getAttribute('data-audio');
        const description = area.getAttribute('data-description');
        
        // Create audio element for this area
        const audio = new Audio(audioSrc);
        audio.preload = 'auto';
        
        // Store audio element
        audioElements.set(area, {
            audio: audio,
            isPlaying: false
        });
        
        // Update description text
        const descElement = area.querySelector('.hover-description');
        if (descElement && description) {
            descElement.textContent = description;
        }
        
        // Click handler - play/pause audio
        area.addEventListener('click', function(e) {
            e.stopPropagation();
            const audioData = audioElements.get(area);
            
            if (audioData.isPlaying) {
                // Pause audio
                audioData.audio.pause();
                audioData.audio.currentTime = 0;
                audioData.isPlaying = false;
                area.classList.remove('playing');
            } else {
                // Stop all other audios
                audioElements.forEach((data, otherArea) => {
                    if (otherArea !== area && data.isPlaying) {
                        data.audio.pause();
                        data.audio.currentTime = 0;
                        data.isPlaying = false;
                        otherArea.classList.remove('playing');
                    }
                });
                
                // Play this audio
                audioData.audio.play().then(() => {
                    audioData.isPlaying = true;
                    area.classList.add('playing');
                }).catch(error => {
                    console.error('Error playing audio:', error);
                });
            }
        });
        
        // Handle audio end
        audio.addEventListener('ended', function() {
            const audioData = audioElements.get(area);
            audioData.isPlaying = false;
            area.classList.remove('playing');
        });
        
        // Handle audio errors
        audio.addEventListener('error', function(e) {
            console.error('Audio error:', e);
            const audioData = audioElements.get(area);
            audioData.isPlaying = false;
            area.classList.remove('playing');
        });
    });
    
    // Optional: Add keyboard shortcuts for debugging
    // Press 'D' to toggle debug mode (show all clickable areas)
    let debugMode = false;
    document.addEventListener('keydown', function(e) {
        if (e.key === 'd' || e.key === 'D') {
            debugMode = !debugMode;
            clickableAreas.forEach(area => {
                if (debugMode) {
                    area.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
                    area.style.border = '2px solid red';
                } else {
                    area.style.backgroundColor = '';
                    area.style.border = '';
                }
            });
        }
    });
});

