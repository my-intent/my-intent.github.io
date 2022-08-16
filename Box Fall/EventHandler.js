let horizontalDirection = 0;

window.addEventListener('keydown', function(event)
{
    console.log(event.which);
    if(event.key == 'ArrowLeft') {
        horizontalDirection = -1;
    }
    else if(event.key == 'ArrowRight') {
        horizontalDirection = 1;
    }
});
window.addEventListener('keyup', function(event)
{
    horizontalDirection = 0;
});

window.addEventListener('touchstart', function(event)
{
    if(event.touches[0].clientX < this.screen.width/2) {
        horizontalDirection = -1;
    }
    else {
        horizontalDirection = 1;
    }
});
window.addEventListener('touchend', function(event)
{
    horizontalDirection = 0;
});
