const fs = require('fs');
const path = require('path');

const ApplicationError = require('../../libs/application-error');
const FileModel = require('./common/fileModel');

class Transactions extends FileModel {
  constructor () {
    super('transactions.json');
  }

  async add(transaction) {
    const isDataValid = (
      transaction &&
      transaction.hasOwnProperty('cardId') &&
      transaction.hasOwnProperty('type') &&
      transaction.hasOwnProperty('data') &&
      transaction.hasOwnProperty('sum')
    );
    if (isDataValid) {
      transaction.id = this._generateId();
      transaction.time = new Date();
      this._fileData.push(transaction);
      await this._saveUpdates();
      return transaction;
    } else {
      throw new ApplicationError('Transaction data is invalid', 400);
    }
  }

  async getByCardId(cardId) {
    const allTrans = await this.getAll();
    return allTrans.filter(transaction => cardId === transaction.cardId);
  }
}

module.exports = Transactions;
