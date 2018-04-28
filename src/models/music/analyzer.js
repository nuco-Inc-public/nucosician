
const bufferSize = 1024

class Analyser {
  constructor () {
    this.context = new AudioContext()
    this.audioAnalyser = this.context.createAnalyser()
    this.audioAnalyser.fftSize = 2048
    this.audioData = []
    // initialize by null
    this.frequencyData = null
    this.timeDomainData = null
    this.processor = null
    this.canvas = null
    this.canvasContext = null
  }

  start () {
    navigator.mediaDevices.getUserMedia({ audio: true, video: false })
      .then(stream => this.handleSuccess(stream))
      .catch(err => console.log(err))
  }

  stop () {
    if (this.processor) {
      this.processor.disconnect()
    }
  }

  setCanvas (canvas) {
    this.canvas = canvas
    this.canvasContext = this.canvas.getContext('2d')
  }

  handleSuccess (stream) {
    let mediastreamsource = this.context.createMediaStreamSource(stream)
    this.processor = this.context.createScriptProcessor(bufferSize, 1, 1)
    this.frequencyData = new Uint8Array(this.audioAnalyser.frequencyBinCount)
    this.timeDomainData = new Uint8Array(this.audioAnalyser.frequencyBinCount)
    mediastreamsource.connect(this.processor)
    mediastreamsource.connect(this.audioAnalyser)
    this.processor.connect(this.context.destination)
    this.processor.onaudioprocess = (e) => {
      this.onAudioProcess(e)
    }
  }

  onAudioProcess (e) {
    let input = e.inputBuffer.getChannelData(0)
    let bufferData = new Float32Array(bufferSize)
    for (var i = 0; i < bufferSize; i++) {
      bufferData[i] = input[i]
    }
    this.audioData.push(bufferData)

    this.drawCanvas()
  }

  drawCanvas () {
    if (this.canvas === null) {
      console.log('canvas is null.')
      return
    }

    let fsDivN = this.context.sampleRate / this.audioAnalyser.fftSize
    let spectrums = new Uint8Array(this.audioAnalyser.frequencyBinCount)
    this.audioAnalyser.getByteFrequencyData(spectrums)
    this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height)

    this.canvasContext.beginPath()

    for (let i = 0, len = spectrums.length; i < len; i++) {
      let x = (i / len) * this.canvas.width
      let y = (1 - (spectrums[i] / 255)) * this.canvas.height
      if (i === 0) {
        this.canvasContext.moveTo(x, y)
      } else {
        this.canvasContext.lineTo(x, y)
      }
      let f = Math.floor(i * fsDivN)

      if ((f % 500) === 0) {
        let text = (f < 1000) ? (f + ' Hz') : ((f / 1000) + ' kHz')
        this.canvasContext.fillRect(x, 0, 1, this.canvas.height)
        this.canvasContext.fillText(text, x, this.canvas.height)
      }
    }

    this.canvasContext.stroke()

    let textYs = ['1.00', '0.50', '0.00']
    for (let i = 0, len = textYs.length; i < len; i++) {
      let text = textYs[i]
      let gy = (1 - parseFloat(text)) * this.canvas.height
      this.canvasContext.fillRect(0, gy, this.canvas.width, 1)
      this.canvasContext.fillText(text, 0, gy)
    }
  }
}

export { Analyser }
