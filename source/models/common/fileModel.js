const ApplicationError = require('libs/application-error')
const path = require('path')
const fs = require('fs')
const Model = require('./Model')

class FileModel extends Model {
  constructor(fileName) {
    super()
    this.filePath = path.join(__dirname, '..', '..', 'data', fileName)
    this.fileData = null
  }

  async loadFile() {
    if (this.fileData) return this.fileData
    await new Promise((resolve, reject) => {
      fs.readFile(this.filePath, (err, data) => {
        if (err) return reject(err)
        try {
          this.fileData = JSON.parse(data)
          return resolve()
        } catch (error) {
          return reject(error)
        }
      })
    })
  }

  _generateId() {
    return this.fileData.reduce((max, elem) => Math.max(max, elem.id), 0) + 1
  }

  async getAll() {
    return await this.loadFile()
  }

  async _saveUpdates() {
    return new Promise(resolve => {
      fs.writeFile(this.filePath, JSON.stringify(this.fileData, null, 2), resolve)
    }).catch(() => {
      throw new ApplicationError('Save model error', 500)
    })
  }

  async get(id) {
    if (this.fileData === null) {
			throw new Error('Data not loaded')
		}
		return this.fileData.find(item => item.id === id)
  }
}

module.exports = FileModel
