class Event {
  constructor() {
    this.event = {}
  }

  on(name,callback) {
    this.event[name] = callback
  }

  emit(name) {
    let func = this.event[name]
    func()
  }

}

let event = new Event()

export default event
