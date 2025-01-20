import FileSystemManager from "./FileSystemManager";
import ServicesManager from "./ServicesManager";

class OrdersManager {
    define = {
        database: FileSystemManager.getStack().files.database,
        status: {
            new: "Новая заявка",
            in_progress: "В процессе",
            done: "Выполнена",
            canceled: "Отменена"
        }
    }

    db = [];

    defaultOrder = {
        id: this.generateID(),
        increment: this.db.length + 1,
        date: new Date(),
        title: "Новая заявка",
        description: "Описание заявки",
        work_description: "Описание выполненных работ",
        services_provided: [],
        tags: [],
        visit: false,
        client: {
            name: "",
            surname: "",
            phone: "",
            telegram: "",
            address: ""
        },
        final_price: 0,
        status: this.define.status.new
    }

    constructor() {
        this.createLocalDatabaseOrRead();
    }

    databaseToString() {
        return JSON.stringify(this.db, null, 2);
    }

    parseJSON(string) {
        return JSON.parse(string);
    }

    createLocalDatabaseOrRead() {
        if(!FileSystemManager.existsSync(this.define.database)) {
            FileSystemManager.writeSync(this.define.database, this.databaseToString());
        }
        else {
            this.readDatabase();
        }
    }

    writeDatabase() {
        FileSystemManager.writeSync(this.define.database, this.databaseToString());
    }

    readDatabase() {
        this.db = this.parseJSON(FileSystemManager.readSync(this.define.database));
        return this.db;
    }

    generateID() {
        return Math.random().toString(16).slice(2, 10);
    }

    createOrder({
        title = "Новая заявка",
        description = "Описание",
        work_description = "",
        services_provided = [],
        tags = [],
        visit = false,
        client_name = "Имя",
        client_surname = "Фамилия",
        client_phone = "",
        client_telegram = "",
        client_address = "",
        final_price = 0
    } = {}) {
        const order = {
            id: this.generateID(),
            increment: this.db.length + 1,
            date: new Date(),
            title: title || "Новая заявка",
            description: description || "Описание",
            work_description: work_description || "",
            services_provided: services_provided || [],
            tags: tags || [],
            visit: visit || false,
            client: {
                name: client_name || "Имя",
                surname: client_surname || "Фамилия",
                phone: client_phone || "",
                telegram: client_telegram || "",
                address: client_address || ""
            },
            final_price: final_price || 0,
            status: this.define.status.new
        }

        this.db.push(order);

        this.writeDatabase();

        return order;
    }

    selectById(id) {
        return {
            value: this.db.find(order => order.id === id),
            delete: () => {
                this.db = this.db.filter(order => order.id !== id);
                this.writeDatabase();
            },
            update: (updatedData) => {
                const orderIndex = this.db.findIndex(order => order.id === id);
                if (orderIndex !== -1) {
                    this.db[orderIndex] = { ...this.db[orderIndex], ...updatedData };
                    this.writeDatabase();
                }
            },
            setStatus: (status) => {
                const orderIndex = this.db.findIndex(order => order.id === id)
                this.db[orderIndex].status = this.define.status[status];
                this.writeDatabase();
            }
        };
    }

    selectAll() {
        return this.db;
    }

    selectByIncrement(increment) {
        return {
            value: this.db.find(order => order.increment === increment),
            delete: () => {
                this.db = this.db.filter(order => order.increment !== increment);
                this.writeDatabase();
            },
            update: (updatedData) => {
                const orderIndex = this.db.findIndex(order => order.increment === increment);
                if (orderIndex !== -1) {
                    this.db[orderIndex] = { ...this.db[orderIndex], ...updatedData };
                    this.writeDatabase();
                }
            },
            setStatus: (status) => {
                const orderIndex = this.db.findIndex(order => order.increment === increment)
                this.db[orderIndex].status = this.define.status[status];
                this.writeDatabase();
            }
        };
    }
}

export default new OrdersManager();