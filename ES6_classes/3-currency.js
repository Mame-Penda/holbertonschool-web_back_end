export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  static checkString(str, propertyName) {
    if (typeof str !== 'string') {
      throw new TypeError(`${propertyName} must be a string`);
    }
    return str;
  }

  set code(newCode) {
    this._code = Currency.checkString(newCode, 'code');
  }

  get code() {
    return this._code;
  }

  set name(newName) {
    this._name = Currency.checkString(newName, 'name');
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
