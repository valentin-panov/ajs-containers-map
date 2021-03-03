export default class ErrorRepository {
  constructor() {
    this.errorMap = new Map();
  }

  translate(code) {
    const errString = this.errorMap.get(code);
    return errString ? errString : `Unknown error`;
  }
}
