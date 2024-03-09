
interface MediaPlayer{ 
    playAudio(): void;
    playVideo(): void;
    showLyrics(): void;
    showSubtitles(): void;
}

class _MusicApp implements MediaPlayer {
    playAudio() {
        console.log('Playing audio');
    }
    playVideo() {
        console.log('Playing video');
        // This method is not needed for MusicApp
        //! Here we are breaking the Interface Segregation Principle
    }
    showLyrics() {
        console.log('Showing lyrics');
    }
    showSubtitles() {
        console.log('Showing subtitles');
        // This method is not needed for MusicApp
        //! Here we are breaking the Interface Segregation Principle
    }
}

class _VideoPlayer implements MediaPlayer {
    playAudio() {
        console.log('Playing audio');
        // This method is not needed for VideoPlayer
        //! Here we are breaking the Interface Segregation Principle
    }
    playVideo() {
        console.log('Playing video');
    }
    showLyrics() {
        console.log('Showing lyrics');
        // This method is not needed for VideoPlayer
        //! Here we are breaking the Interface Segregation Principle
    }
    showSubtitles() {
        console.log('Showing subtitles');
    }
}

