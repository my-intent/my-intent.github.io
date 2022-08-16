function Gameplay()
{
    const gameUI = document.querySelector('.gameUI');
    gameUI.remove();
    const ctx = document.querySelector('canvas').getContext('2d');
    const frameRate = 41.6667;

    let width, height;

    if(screen.width > screen.height) {
        width = ctx.canvas.width = 1920;
        height = ctx.canvas.height = 1080;
    }
    else {
        width = ctx.canvas.width = 1080;
        height = ctx.canvas.height = 1920;
    }

    const player = new Box(width/2-20, height*0.7, 40, 100, 20, 0, 'rgb(255, 0, 0)');
    const boxes = new Array();
    let score = 0;

    SpawnRandomBoxes(boxes, width);

    const gameInterval = setInterval(function()
    {
        ctx.clearRect(0, 0, width, height);
        player.Render(ctx);

        player.x += horizontalDirection * player.speedX;

        if(player.x < 1) {
            player.x = 1;
        }
        else if(player.x+player.width > width) {
            player.x = width - player.width;
        }

        for(let i=0; i<boxes.length; i++)
        {
            boxes[i].Render(ctx);

            if(boxes[i].Collision(player)) 
            {
                clearInterval(gameInterval);
                // ctx.beginPath();
                // ctx.fillStyle = 'red';
                // ctx.font = '100px cursive';
                // ctx.fillText('Game Over', (width-500)*0.5, height*0.7);
                // ctx.closePath();
                alert('Game Over');
                document.body.appendChild(gameUI);
            }

            if(boxes[i].y > height) {
                boxes.splice(i, 1);
                score += 1;
            }
            
            boxes[i].y += boxes[i].speedY;
        }

        RenderScore(ctx, score);

    }, frameRate);
}

function SpawnRandomBoxes(boxes, SCR_WIDTH=0)
{
    let width = Random(30, 150);
    let height = Random(30, 150);
    let x = Random(1, SCR_WIDTH-width);
    let y = -height;
    let speedX = 0;
    let speedY = Random(10, 50);

    let red = Random(0, 255);
    let green = Random(0, 255);
    let blue = Random(0, 255);
    let color = 'rgb('+red+','+green+','+blue+')';
    
    boxes.push(new Box(x, y, width, height, speedX, speedY, color));

    let spawnTime = Random(200, 800);
    setTimeout(function() {
        SpawnRandomBoxes(boxes, SCR_WIDTH);
    }, spawnTime);
}

function Random(min=0, max=100) {
    return Math.random() * (max-min) + min;
}

function RenderScore(ctx, score=0)
{
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.font = '50px cursive';
    ctx.fillText('Score : '+score, 100, 100);
    ctx.closePath();
}
