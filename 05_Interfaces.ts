interface Point {
    x: number,
    y: number
}

let drawPoint = (point: Point) => {
    point.x = 10;
    point.y = 20;
}
