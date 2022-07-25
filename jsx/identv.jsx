
function importFile(filePath) {
  app.project.importFiles([filePath],
      false, // suppress warnings 
      app.project.getInsertionBin(),
      false); // import as numbered stills
}

export const importInPremiere = async ({ url, name }) => {
  /**
   * Initialize CSInterface
   */
  const { CSInterface } = require('@cep/csinterface')

  const csInterface = new CSInterface()

  /**
   * Create temporary directory
   */
  const tempFolder = '/temp/adobe_cep_panel'

  window.cep.fs.makedir(tempFolder)

  const filePath = `${tempFolder}/${name}`

  /**
   * Open file
   */
  const fs = window.cep_node.require('fs')

  const file = fs.createWriteStream(filePath)

  /**
   * Fetch ressource as stream
   */
  const response = await fetch(url)

  const reader = response.body.getReader()

  while (true) {
    /**
     * Read stream chunks
     */
    const { value, done } = await reader.read()

    if (done) {
      /**
       * Close file
       */
      file.end()

      /**
       * Send file path to JSX for import into Premiere
       */
      csInterface.evalScript(`importFile("${filePath}")`)
      // importFile(filePath)

      break
    }

    /**
     * Write stream chunks to file
     */
    file.write(value)
  }
}