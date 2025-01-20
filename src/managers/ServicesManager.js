import FileSystemManager from "./FileSystemManager";

const DEFAULT_LIST = [
    {
        category: "Основное",
        name: "Переустановка ОС / Windows / Linux",
        price: 500,
        average_time: 240
    },
    {
        category: "Основное",
        name: "Установка драйверов",
        price: 300,
        average_time: 60
    },
    {
        category: "Основное",
        name: "Диагностика",
        price: 500,
        average_time: 240
    },
    {
        category: "Основное",
        name: "Выезд",
        price: 250,
        average_time: 240
    },
    {
        category: "Основное",
        name: "Профилактика ПК / Замена термоинтерфейса / Чистка от пыли",
        price: 500,
        average_time: 120
    },
    {
        category: "Основное",
        name: "Замена комплектующих",
        price: 800,
        average_time: 180
    },
    {
        category: "Дополнительно",
        name: "Консультация",
        price: 500,
        average_time: 120
    },
    {
        category: "Дополнительно",
        name: "Сборка ПК",
        price: 1500,
        average_time: 1440
    },
    {
        category: "Дополнительно",
        name: "Подбор комплектующих / Составление сборки ПК",
        price: 500,
        average_time: 720
    },
    {
        category: "Дополнительно",
        name: "Установка программ",
        price: 200,
        average_time: 120
    },
    {
        category: "Дополнительно",
        name: "Настройка / Подключение - Принтеров / Сканеров",
        price: 300,
        average_time: 60
    },
    {
        category: "Дополнительно",
        name: "Ремонт Принтера / Сканера",
        price: 1000,
        average_time: 720
    },
    {
        category: "Дополнительно",
        name: "Настройка системы / Периферии / Сетевых устройств",
        price: 200,
        average_time: 120
    },
    {
        category: "Дополнительно",
        name: "Восстановление данных с HDD",
        price: 800,
        average_time: 1440
    },
    {
        category: "Дополнительно",
        name: "Удалённая помощь",
        price: 500,
        average_time: 120
    },
    {
        category: "Программирование",
        name: "Написание скриптов",
        price: 1000,
        average_time: 5040
    },
    {
        category: "Программирование",
        name: "Разработка десктопных приложений",
        price: 2000,
        average_time: 10080
    },
    {
        category: "Программирование",
        name: "Разработка WEB-Сервиса",
        price: 2500,
        average_time: 10080
    },
    {
        category: "Программирование",
        name: "Системное программирование",
        price: 1000,
        average_time: 7200
    },
]

class ServicesManager {
    define = {
        services: FileSystemManager.getStack().files.services    
    }

    services = [];

    constructor() {
        this.createFiles();
    }

    createFiles() {
        if(!FileSystemManager.existsSync(this.define.services)) {
            FileSystemManager.writeSync(this.define.services, JSON.stringify(DEFAULT_LIST, null, 2));
        }
    }
}

export default new ServicesManager();