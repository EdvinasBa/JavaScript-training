const drums = document.querySelectorAll('.drums__single');
const drumSounds = document.querySelectorAll('.drumSound');
const keyRow = 'asdfghjkl';

drums.forEach((element, index) => {
    window.addEventListener('keydown', function (event) {
        if (event.key == keyRow[index]) {
            drumSounds[index].currentTime = 0;
            drumSounds[index].play();
            element.classList.add('drums__single--active');
            element.addEventListener('transitionend', removeTransition);
        }
    });
});

function removeTransition(e) {
    e.target.classList.remove('drums__single--active');
}