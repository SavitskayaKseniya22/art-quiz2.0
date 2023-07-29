import { QuizResultType } from "../interfaces";

class AppStorage {
  static write(key: string, value: string | number | boolean | QuizResultType) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  static read(value: string) {
    const item = window.localStorage.getItem(value);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  }
}

export default AppStorage;
