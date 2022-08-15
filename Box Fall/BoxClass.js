class Box 
{
    constructor(x=0, y=0, width=0, height=0, speedX=0, speedY=0, color='red')
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
    }
    Render(ctx)
    {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.closePath();
    }

    Collision(box)
    {
        if(this.x <= box.x+box.width && this.x+this.width >= box.x &&
            this.y <= box.y+box.height && this.y+this.height >= box.y) {
            return true;
        }

        return false;
    }
}