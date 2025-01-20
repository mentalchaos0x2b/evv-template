import { contextBridge } from "electron";

import DirectoryManager from "./managers/DirectoryManager";
import FileSystemManagerBE from "./managers/FileSystemManagerBE";

contextBridge.exposeInMainWorld("api", {
    fs: {
        read: (file) => FileSystemManagerBE.readSync(file),
        write: (file, data) => FileSystemManagerBE.writeSync(file, data),
        delete: (file) => FileSystemManagerBE.deleteSync(file),
        mkdir: (dir, {recursive = false} = {}) => FileSystemManagerBE.mkdirSync(dir, {recursive: recursive}),
        exists: (any) => FileSystemManagerBE.existsSync(any),
        join: (...args) => FileSystemManagerBE.join(...args),
    },
    dm: {
        stack: () => DirectoryManager.getStack(),
    }
});