let horizontalDirection = 0;

window.addEventListener('keydown', function(event)
{
    if(event.key == 'ArrowLeft')
        horizontalDirection = -1;
    else if(event.key == 'ArrowRight')
        horizontalDirection = 1;
});
window.addEventListener('keyup', function(event)
{
    horizontalDirection = 0;
});