export default class FileSource {
  // Make this.size a method
  constructor (file) {
    this._file = file
    this.size = file.size
  }

  slice (start, end) {
    const value = this._file.slice(start, end)
    return Promise.resolve({ value })
  }

  close () {
    // Nothing to do here since we don't need to release any resources.
  }
}
