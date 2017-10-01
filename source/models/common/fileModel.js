const path = require('path');
const fs = require('fs');
const Model = require('./Model');

class FileModel extends Model {
  constructor(sourceFileName) {
    super();
    this._dataSourceFile = path.join(__dirname, '..', '..', 'data', sourceFileName);
    this._dataSource = require(this._dataSourceFile);
  }

  async getAll() {
    return await this._dataSource;
  }

  async _saveUpdates() {
    return new Promise(resolve =>
      fs.writeFileSync(this._dataSourceFile, JSON.stringify(this._dataSource, null, 4), resolve)
    );
  }
}

module.exports = FileModel;
