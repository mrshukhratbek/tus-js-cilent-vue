import FileSource from './sources/FileSource'
import StreamSource from './sources/StreamSource'

export default class FileReader {
  openFile (input, chunkSize) {
    // Since we emulate the Blob type in our tests (not all target browsers
    // support it), we cannot use `instanceof` for testing whether the input value
    // can be handled. Instead, we simply check is the slice() function and the
    // size property are available.
    if (typeof input.slice === 'function' && typeof input.size !== 'undefined') {
      return Promise.resolve(new FileSource(input))
    }

    if (typeof input.read === 'function') {
      chunkSize = +chunkSize
      if (!isFinite(chunkSize)) {
        return Promise.reject(new Error('cannot create source for stream without a finite value for the `chunkSize` option'))
      }

      return Promise.resolve(new StreamSource(input, chunkSize))
    }

    return Promise.reject(new Error('source object may only be an instance of File, Blob, or Reader in this environment'))
  }
}
