class Ball
{
    constructor(x=0, y=0, radius=0, speedX=0, speedY=0, color='red')
    {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
    }

    Render(ctx)
    {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
    }

    Collision(ball)
    {
        if(this.x-this.radius <= ball.x+ball.radius && this.x+this.radius >= ball.x-ball.radius &&
            this.y-this.radius <= ball.y+ball.radius && this.y+this.radius >= ball.y-ball.radius)
            return true;

        return false;
    }

    SetRandomPosition(width=0, height=0)
    {
        this.x = Math.random() * (width-this.radius) + this.radius;
        this.y = Math.random() * (height-this.radius) + this.radius;
    }
}