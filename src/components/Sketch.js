import React from "react"
import p5 from "p5"
import Style from './Sketch.module.css'


const MAXDISTANCE = 220;
const MAXHYPOT = Math.sqrt(MAXDISTANCE**2 + MAXDISTANCE**2);
const NUMPOINTS = 150;
const MAXSPEED = .3;
const STROKEWEIGHT = 3;

let H, W;



class MySketch extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  
  Sketch = (p) => {
    let shapes = []
    let lineMap = new Map();
    
    //SETUP FUNCTION
    
    p.setup = function () {
      if (typeof window !== `undefined`) {
        H = window.document.body.clientHeight + 30
        W = window.document.body.clientWidth
        }
        p.createCanvas(W, H);
        p.background(255);

        for(let i=0; i <= NUMPOINTS; i++) {
            let x = Math.floor(Math.random() * W);
            let y = Math.floor(Math.random() * H);
            shapes.push(new Point(p, x, y))
            lineMap.set(shapes[i], []);
            // console.log(lineMap.get(shapes[i]))
        }
        // p.frameRate(20)
      };

//DRAW FUNCTION

      p.draw = function () {
        p.background(255);
        let mouse = new Point(p, p.mouseX, p.mouseY, true)
        lineMap.set(mouse, [])
        shapes.push(mouse)
        shapes.forEach(shape =>{
          shape.update(shapes, lineMap);
          shape.display();
          shape.move();
        })
        // remove the mouse point from the array of shapes
        shapes.pop()
      
        // if(p.frameCount % 60 === 0) console.log(p.frameRate())
        lineMap.delete(mouse)
        lineMap.forEach((lines, point) => {
          lineMap.set(point, [])
        })
      };

      p.windowResized = () => {
        if (typeof window !== `undefined`) {
        H = window.document.body.clientHeight + 30
        W = window.document.body.clientWidth
        }
        p.resizeCanvas(W, H);
      }

    };
  
    componentDidMount() {
      this.myP5 = new p5(this.Sketch, this.myRef.current);
      if (typeof window !== `undefined`) {
      H = window.document.body.clientHeight + 30
      W = window.document.body.clientWidth
      }
    }
  
    render() {
      return <div className={Style.sketch} ref={this.myRef}> </div>;
    }
  }
  
  class Point {
    constructor(p, x, y, mouse = false) {
      // this p is our p5 instance object
      let xspeed = randomFromInterval(-MAXSPEED, MAXSPEED)
      let yspeed = randomFromInterval(-MAXSPEED, MAXSPEED)
      this.p = p;
      this.pos = new Vec(x,y)
      this.speed = new Vec(xspeed,yspeed)
      this.strokeFill = mouse ? (50,10,68) : 0
      this.strokeWeight = mouse ? 0 : STROKEWEIGHT
      this.mouse = mouse

    }

    update(shapes, map) {
        let neighbors = shapes.filter(point => {
            return Math.abs(point.pos.x - this.pos.x) < MAXDISTANCE &&
                   Math.abs(point.pos.y - this.pos.y) < MAXDISTANCE &&
                   point != this
        })


        neighbors.forEach(point => {
          if(!map.get(point).includes(this)) {
            let distance = Math.floor(this.pos.distance(point.pos));
            let alpha = (255 - (255 * (distance/MAXHYPOT))) 

            map.get(this).push(point)
            this.p.stroke(50,10,68, alpha);
            this.p.strokeWeight(2);
            this.p.line(this.pos.x, this.pos.y, point.pos.x, point.pos.y)
          }
        })

    }
  
    display() {
      this.p.stroke(this.strokeFill);
      this.p.strokeWeight(this.strokeWeight);
      this.p.point(this.pos.x, this.pos.y);
    }
    move() {
      this.pos.add(this.speed)
      if(this.pos.x > W || this.pos.x < 0) this.speed.x = -this.speed.x
      if(this.pos.y > H || this.pos.y < 0) this.speed.y = -this.speed.y
    }
  }

  class Vec {
      constructor(x,y) {
          this.x = x;
          this.y = y;
      }
      add(vec) {
          this.x += vec.x;
          this.y += vec.y;
      }
       distance(vec) {
        let a = Math.abs(this.x - vec.x)
        let b = Math.abs(this.y - vec.y)

        return Math.sqrt((a**2 + b**2))
      }
      static distance(a,b) {
        return Math.sqrt((a**2 + b**2))
      }
  }


  

 const randomFromInterval = (min,max) => Math.floor(Math.random()*(max-min+1)+min)
  
export default MySketch

/*
Thank you
http://www.zjexpress.net/GettingP5ToWorkInGatsby/
For instructions for making this work!
*/