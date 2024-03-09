interface AudioPlayer {
    playAudio(): void;
    showLyrics(): void;
}

interface VideoPlayer {
    playVideo(): void;
    showSubtitles(): void;
}

class MusicApp implements AudioPlayer {
    playAudio() {
        console.log('Playing audio');
    }
    showLyrics() {
        console.log('Showing lyrics');
    }
}

class VideoPlayer implements VideoPlayer {
    playVideo() {
        console.log('Playing video');
    }
    showSubtitles() {
        console.log('Showing subtitles');
    }
}

// This way we are following the Interface Segregation Principle
// We are not forcing the clients to implement methods they don't need

//? This is just an example to know that we can implement multiple interfaces in a class 
class MusicVideoApp implements AudioPlayer, VideoPlayer {
    playAudio() {
        console.log('Playing audio');
    }
    showLyrics() {
        console.log('Showing lyrics');
    }
    playVideo() {
        console.log('Playing video');
    }
    showSubtitles() {
        console.log('Showing subtitles');
    }
}