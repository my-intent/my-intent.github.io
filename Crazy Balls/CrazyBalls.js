function Gameplay()
{
    const gameUI = document.querySelector('.gameUI');
    gameUI.remove();
    const ctx = document.querySelector('canvas').getContext('2d');
    const frameRate = 41.66667;

    let width, height;

    if(screen.width > screen.height) {
        width = ctx.canvas.width = 1920;
        height = ctx.canvas.height = 1080;
    }
    else {
        width = ctx.canvas.width = 1080;
        height = ctx.canvas.height = 1920;
    }

    const player = new Ball();
    const coin = new Ball();

    const MAX_BALLS = 10;
    const balls = new Array(MAX_BALLS);

    let score = 0;
    let playerLife = 3;

    InitialSetup(player, coin, balls, MAX_BALLS, width, height);

    const gameInterval = setInterval(function()
    {
        ctx.clearRect(0, 0, width, height);
        coin.Render(ctx);
        player.Render(ctx);

        player.y += verticalDirection * player.speedY;
        player.x += horizontalDirection * player.speedX;

        if(player.x+player.radius < 1) {
            player.x = width;
        }
        else if(player.x-player.radius > width) {
            player.x = 1;
        }
        if(player.y+player.radius < 1) {
            player.y = height;
        }
        else if(player.y-player.radius > height) {
            player.y = 1;
        }   
        
        if(player.Collision(coin))
        {
            score += 5;
            coin.SetRandomPosition(width, height);
        }

        for(let i=0; i<MAX_BALLS; i++)
        {
            balls[i].Render(ctx);

            balls[i].x += balls[i].speedX;
            balls[i].y += balls[i].speedY;

            if(balls[i].Collision(player)) {
                playerLife -= 1;
                InitialSetup(player, coin, balls, MAX_BALLS, width, height);
            }

            if(balls[i].x-balls[i].radius < 1 || balls[i].x+balls[i].radius > width) {
                balls[i].speedX = -balls[i].speedX;
            }
            if(balls[i].y-balls[i].radius < 1 || balls[i].y+balls[i].radius > height) {
                balls[i].speedY = -balls[i].speedY;
            }
        }

        RenderScore(ctx, score, playerLife); 
        
        if(playerLife <= 0)
        {
            clearInterval(gameInterval);
            alert('Game Over');
            document.body.appendChild(gameUI);
        }
        
    }, frameRate);
}

function InitialSetup(player, coin, balls, MAX_BALLS=0, width=0, height=0)
{
    const RADIUS = 20;

    player.x = width * 0.3;
    player.y = height * 0.3;
    player.speedX = RADIUS;
    player.speedY = RADIUS;
    player.radius = RADIUS;
    player.color = 'rgb(0, 0, 255)';

    coin.radius = RADIUS;
    coin.color = 'yellow';
    coin.SetRandomPosition(width, height);

    for(let i=0; i<MAX_BALLS; i++)
    {
        balls[i] = new Ball();
        balls[i].radius = RADIUS;
        balls[i].color = 'red';
        balls[i].SetRandomPosition(width, height);

        balls[i].speedX = (i%2 == 0) ? -RADIUS :  RADIUS;
        balls[i].speedY = (i%2 == 0) ?  RADIUS : -RADIUS;
    }
}

function RenderScore(ctx, score=0, life=0)
{
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.font = '50px cursive';
    ctx.fillText('Life : '+life, 100, 100);
    ctx.fillText('Score : '+score, 100, 170);
    ctx.closePath();
}