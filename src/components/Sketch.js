import React from "react"
import p5 from "p5"
import Style from "./Sketch.module.css"

const MAXDISTANCE = 170
const MAXHYPOT = Math.sqrt(MAXDISTANCE ** 2 + MAXDISTANCE ** 2)
let NUMPOINTS = 130
const MAXSPEED = 0.4
const STROKEWEIGHT = 0
const MAX_REPEL_DIST = 150

let H; let W;

 const clampAlpha = clampBetween(20,255);

class MySketch extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  Sketch = p => {
    let shapes = []
    let lineMap = new Map()

    //SETUP FUNCTION

    p.setup = function() {
      if (typeof window !== `undefined`) {
        H = window.document.body.clientHeight
        W = window.document.body.clientWidth
        if(W < 900) NUMPOINTS = 50
      }
      p.createCanvas(W, H)
      p.background(255)

      for (let i = 0; i <= NUMPOINTS; i++) {
        let x = Math.floor(Math.random() * W)
        let y = Math.floor(Math.random() * H)
        shapes.push(new Point(p, x, y))
        lineMap.set(shapes[i], [])
      }
    }

    //DRAW FUNCTION

    p.draw = function() {
      p.background(255)
      let mouse = new Mouse(p, p.mouseX, p.mouseY)
      // lineMap.set(mouse, [])
      shapes.forEach(shape => {
        mouse.calcForce(shape)
        shape.drawLines(shapes, lineMap)
        // shape.display()
        shape.move()
      })
     

      // lineMap.delete(mouse)
      lineMap.forEach((lines, point) => {
        lineMap.set(point, [])
      })
    }

    p.windowResized = () => {
      if (typeof window !== `undefined`) {
        H = window.document.body.clientHeight
        W = window.document.body.clientWidth
      }
      p.resizeCanvas(W, H)
    }
  }

  componentDidMount() {
    this.myP5 = new p5(this.Sketch, this.myRef.current)
    if (typeof window !== `undefined`) {
    H = window.document.body.clientHeight + 30
    W = window.document.body.clientWidth
    }
  }

  render() {
    return (
      <div className={Style.sketch} ref={this.myRef}>
        {" "}
      </div>
    )
  }
}

class Point {
  constructor(p, x, y) {
    let xspeed = randomFromInterval(-MAXSPEED, MAXSPEED)
    let yspeed = randomFromInterval(-MAXSPEED, MAXSPEED)
    this.p = p
    this.pos = new Vec(x, y)
    this.speed = new Vec(xspeed, yspeed)
    this.strokeFill = 0
    this.strokeWeight = STROKEWEIGHT

  }

  drawLines(shapes, map) {
    shapes.forEach(point => {
      if (
        // Check if point is within the max distance
        Math.abs(point.pos.x - this.pos.x) < MAXDISTANCE &&
        Math.abs(point.pos.y - this.pos.y) < MAXDISTANCE &&
        // Make sure this point is not in the line Map already
        !map.get(point).includes(this) &&
        point !== this
      ) {
          map.get(this).push(point)
          this.lineTo(point.pos)
      }
    })
  }

  display() {
    this.p.stroke(this.strokeFill)
    this.p.strokeWeight(this.strokeWeight)
    this.p.point(this.pos.x, this.pos.y)
  } 
  lineTo(vec) {
    let distance = Math.floor(Math.abs(this.pos.distance(vec)))
    let alpha = clampAlpha(255 - 255 * (distance / MAXHYPOT) - 120)
    this.p.stroke(50, 10, 68, alpha)
    this.p.strokeWeight(2)
    this.p.line(this.pos.x, this.pos.y, vec.x,vec.y) 
  }

  move() {
    this.pos.add(this.speed)
    if (this.pos.x >= W || this.pos.x <= 0) this.speed.x = -this.speed.x
    if (this.pos.y >= H || this.pos.y <= 0) this.speed.y = -this.speed.y
  }
}

class Mouse extends Point {
  constructor(p, x, y) {
    super(p, x, y)
  }
  calcForce(point) {
    let distance = this.pos.distance(point.pos);
    if(distance <= MAX_REPEL_DIST) {
      point.pos.x = Math.max(0,Math.min( point.pos.x - Math.sign(this.pos.x - point.pos.x), W));
      point.pos.y = Math.max(0,Math.min(point.pos.y - Math.sign(this.pos.y - point.pos.y), H));
      point.speed.x = point.speed.x * -Math.sign(this.pos.x - point.pos.x)
      point.speed.y = point.speed.y * -Math.sign(this.pos.y - point.pos.y)
    }
  }
}

class Vec {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  add(vec) {
    this.x += vec.x
    this.y += vec.y
  }
  distance(vec) {
    let a = this.x - vec.x
    let b = this.y - vec.y

    return Math.sqrt(a ** 2 + b ** 2)
  }
  static distance(a, b) {
    return Math.sqrt(a ** 2 + b ** 2)
  }
}

const randomFromInterval = (min, max) => Math.random() * (max - min ) + min

export default MySketch

/*
Thank you
http://www.zjexpress.net/GettingP5ToWorkInGatsby/
For instructions for making this work!
*/
function clampBetween(low, high) {
  return function(num) {
    if(high < num) return high;
    if(low > num) return low;
    return num
  }
}