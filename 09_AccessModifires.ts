export class Point {
    private x: number;
    private y: number;
    // public by default, unless you add private.
    // private mean you can not change value from object.
    
    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;        
    }

    draw() {
        console.log('x: '+ this.x+ ' y: '+ this.y);
    }

}

let point = new Point(1,2);   
point.draw();