export class Point {
    constructor(private x?: number, private y?: number) {}
    
    draw() {
        console.log('x: '+ this.x+ ' y: '+ this.y);
    }

    get Y(){
        return this.Y;
    }
    
    set X(value){
        if(value < 0)
            throw new Error ('value can not be less  than 0.');
        
            this.x = value;
    }

}

let point = new Point();
point.X = 10;
let y = point.Y;   
point.draw();