const ApplicationError = require('../../libs/application-error');
const FileModel = require('./common/fileModel');

class Cards extends FileModel {
  constructor() {
    super('cards.json');
  }

  async add(card) {
    card.id = this._generateId();
    this.fileData.push(card);
    await this._saveUpdates();
    return card;
  }

  async delete(id) {
    const card = this.fileData.find(item => item.id === id);
    if (!card) {
      throw new ApplicationError(`Card with ID=${id} not found`, 404);
    }
    const cardIndex = this.fileData.indexOf(card);
    this.fileData.splice(cardIndex, 1);
    await this._saveUpdates();
  }

  async pay(id, sum) {
    const card = this.fileData.find(item => item.id === id);
    if (!card) {
      throw new ApplicationError(`Card with ID=${id} not found`, 404);
    }
    card.balance -= sum;
    await this._saveUpdates();
  }

  async earn(id, sum) {
    const card = this.fileData.find(item => item.id === id);
    if (!card) {
      throw new ApplicationError(`Card with ID=${id} not found`, 404);
    }
    card.balance += sum;
    await this._saveUpdates();
  }
}

module.exports = Cards;
