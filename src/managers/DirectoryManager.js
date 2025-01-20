import path from "node:path";

import fs from "node:fs";

class DirectoryManager {
  define = {
    directory: {
      root: "C:\\mental@chaos",
      app: "data-tech",
      database: "database",
      services: "services",
    },
    files: {
      database: "local_db.json",
      services: "services.json",
    },
  };

  stack = {
    folders: {
      app: path.join(this.define.directory.root, this.define.directory.app),
      database: path.join(
        this.define.directory.root,
        this.define.directory.app,
        this.define.directory.database
      ),
      services: path.join(
        this.define.directory.root,
        this.define.directory.app,
        this.define.directory.services
      ),
    },
    files: {
      database: path.join(
        this.define.directory.root,
        this.define.directory.app,
        this.define.directory.database,
        this.define.files.database
      ),
      services: path.join(
        this.define.directory.root,
        this.define.directory.app,
        this.define.directory.services,
        this.define.files.services
      ),
    },
  };

  constructor() {
    this.initialize();
  }

  getStack() {
    return this.stack;
  }

  createIfNotExist(folder) {
    if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });
  }

  initialize() {
    this.createIfNotExist(this.stack.folders.app);
    this.createIfNotExist(this.stack.folders.database);
    this.createIfNotExist(this.stack.folders.services);
  }
}

export default new DirectoryManager();
