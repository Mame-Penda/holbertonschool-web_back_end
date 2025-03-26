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
    this.code = Currency.checkString(newCode, 'code');
  }

  get code() {
    return this.code;
  }

  set name(newName) {
    this.name = Currency.checkString(newName, 'name');
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
