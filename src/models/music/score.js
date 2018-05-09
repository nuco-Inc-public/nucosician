class Score {
  constructor () {
    this.canvas = null
    this.canvasContext = null
  }

  setCanvas (canvas) {
    console.log(canvas)
    this.canvas = canvas
    this.canvasContext = this.canvas.getContext('2d')
  }

  drawCanvas () {
    this.canvasContext.beginPath()
    this.canvasContext.moveTo(0, 0)
    this.canvasContext.lineTo(this.canvas.width, this.canvas.height)
    this.canvasContext.stroke()
  }
}

export { Score }
