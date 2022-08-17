var verticalDirection = 0;
var horizontalDirection = 0;

window.addEventListener('keydown', function(event)
{
    if(event.key == 'ArrowUp' || event.key == 'w' || event.key == 'W') {
        verticalDirection = -1;
    }
    else if(event.key == 'ArrowDown' || event.key == 's' || event.key == 'S') {
        verticalDirection = 1;
    }
    
    if(event.key == 'ArrowLeft' || event.key == 'a' || event.key == 'A') {
        horizontalDirection = -1;
    }
    else if(event.key == 'ArrowRight' || event.key == 'd' || event.key == 'D') {
        horizontalDirection = 1;
    }
});
window.addEventListener('keyup', function(event)
{
    verticalDirection = 0;
    horizontalDirection = 0;
});

function PlayerController()
{
    
}