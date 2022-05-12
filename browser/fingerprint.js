// TODO: Differenciate between input types

/**
 * Generate a fingerprint for a file which will be used the store the endpoint
 *
 * @param {File} file
 * @param {Object} options
 * @param {Function} callback
 */
export default function fingerprint (file, options) {
  return Promise.resolve([
    'tus-br',
    file.name,
    file.type,
    file.size,
    file.lastModified,
    options.endpoint
  ].join('-'))
}
