const path = require('path');
const fs = require('fs');
const Model = require('./Model');

class FileModel extends Model {
  constructor(fileName) {
    super();
    this._filePath = path.join(__dirname, '..', '..', 'data', fileName);
    this._fileData = require(this._filePath);
  }

  _generateId() {
    return this._fileData.reduce((max, elem) => Math.max(max, elem.id), 0) + 1;
  }

  async getAll() {
    return await this._fileData;
  }

  async _saveUpdates() {
    return new Promise((resolve, reject) => {
      fs.writeFile(this._filePath, JSON.stringify(this._fileData, null, 2), resolve);
    }).catch(() => {
      throw new ApplicationError('Save model error', 500);
    });
  }

  async get(id) {
    const allItems = await this.getAll();
    return allItems.find(item => item.id === id);
  }
}

module.exports = FileModel;
