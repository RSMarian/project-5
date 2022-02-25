const app = () => {
    const song = document.querySelector(".song");
    const play = document.querySelector(".play");
    const outline = document.querySelector(".moving-outline circle");
    const video = document.querySelector(".vid-container video");

    //Sounds
    const sounds = document.querySelectorAll(".sound-picker button");
    //Time Display
    const timeDisplay = document.querySelector(".time-display");
    // Get the lenght of the outline
    const outlineLenght = outline.getTotalLenght();
    //Duration
    let fakeDuration = 1200;

        outline.style.strokeDasharray = 100;
        // outline.style.strokeDashoffset = outlineLenght;

    //Play Sound     
    play.addEventListener('click', () => {
        song.play();
     });
    
};

app();
