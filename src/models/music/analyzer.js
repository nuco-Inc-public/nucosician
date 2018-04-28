class Analyzer {
  constructor () {
    this.context = new AudioContext()
    this.processor = null
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

  handleSuccess (stream) {
    let context = new AudioContext()
    let input = context.createMediaStreamSource(stream)
    this.processor = context.createScriptProcessor(1024, 1, 1)
    input.connect(this.processor)
    this.processor.connect(context.destination)
    this.processor.onaudioprocess = (e) => {
      console.log(e.inputBuffer)
    }
  }
}

export { Analyzer }
