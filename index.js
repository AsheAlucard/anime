window.addEventListener('DOMContentLoaded', () => {
    const enterBtn = document.getElementById('enterButton');
    const copyright = document.getElementById('copyright');
    const ccbtn = document.getElementById('ccbtn');
    enterBtn.addEventListener('click', () => {
        copyright.style.display = 'none';
    });
    ccbtn.addEventListener('click', () => {
        const copyrightListOfAuthors = document.getElementById('ccList')
        copyrightListOfAuthors.style.display = 'flex'
    }); 
});

let currentAudio = null;

document.querySelectorAll('.letters').forEach(i => {
    const id = i.dataset.target
    i.addEventListener('mouseover', () => {
        const bg = document.querySelector(`.previewBg[data-id="${id}"]`)
        getAssets(i,bg)
        bg.style.visibility = 'visible'
        bg.style.opacity = '100%'
    });
    i.addEventListener('mouseout', () => {
        const bg = document.querySelector(`.previewBg[data-id="${id}"]`)
        if (bg) {bg.style.visibility = 'hidden',bg.style.opacity = '0%'}

        currentAudio.pause()
        currentAudio = 0
        currentAudio = null
    });
});

function getAssets(e, bg) {
    let src = "";
    let image = "";
    // Getting Sound assets!
    // Changing Background to highlighted element!
    if (e.classList.contains('anime-text-A')) {
        src = `pictures/Other Assets/DANDADAN COVER.mp3`;
        image = `url('pictures/covers/dadan2.webp')`
    } else if (e.classList.contains('anime-text-N')) {
        src = `pictures/Other Assets/JUJUTSU KAISEN COVER.mp3`;
        image = `url('pictures/covers/gojo.webp')`
    } else if (e.classList.contains('anime-text-I')) {
        src = `pictures/Other Assets/DEMON SLAYER COVER.mp3`;
        image = `url('pictures/covers/nezuko.webp')`
    } else if (e.classList.contains('anime-text-M')) {
        src = `pictures/Other Assets/ALL MIGHT COVER.mp3`;
        image = `url('pictures/covers/allmight2.webp')`
    } else if (e.classList.contains('anime-text-E')) {
        src = `pictures/Other Assets/HISOKA THEME COVER.mp3`;
        image = `url('pictures/covers/hisoka.webp')`
    }
    // Chagning background images
    if (bg && image) {
        bg.style.backgroundImage = image;
        bg.style.backgroundSize = 'cover';
        bg.style.backgroundPosition = 'center';
        bg.style.opacity = '100%'
    }
    // 
    if (src) {
        currentAudio = new Audio(src);
        currentAudio.play();
        
    }
}