var horizontalDirection = 0;

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

window.addEventListener('touchend', function(event)
{
    horizontalDirection = 0;
});
