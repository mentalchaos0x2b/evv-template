/*

FileSystemManager.js - Доступ к файловой системе из фронтенда

*/

class FileSystemManager {
  readSync(file) {
    return window.api.fs.read(file);
  }

  writeSync(file, data) {
    return window.api.fs.write(file, data);
  }

  deleteSync(file) {
    return window.api.fs.delete(file);
  }

  mkdirSync(dir, { recursive = false } = {}) {
    return window.api.fs.mkdir(dir, { recursive: recursive });
  }

  existsSync(any) {
    return window.api.fs.exists(any);
  }

  join(...args) {
    return window.api.fs.join(...args);
  }

  getStack() {
    return window.api.dm.stack();
  }
}

export default new FileSystemManager();
