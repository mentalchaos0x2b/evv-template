/*

FileSystemManagerBE.js - Доступ к файловой системе из preload

*/

import fs from 'node:fs';
import path from 'node:path';

class FileSystemManagerBE {

    readSync(file) {
        return fs.readFileSync(file, 'utf8');
    }

    writeSync(file, data) {
        fs.writeFileSync(file, data, 'utf-8');
    }

    existsSync(file) {
        return fs.existsSync(file);
    }

    deleteSync(file) {
        fs.unlinkSync(file);
    }

    mkdirSync(dir, {recursive}) {
        fs.mkdirSync(dir, {recursive: recursive});
    }

    join(...args) {
        return path.join(...args);
    }
}

export default new FileSystemManagerBE();