export class RoomHandlers {
    static async find() {
        return {
            "_id": "5a0bfd07be57eeaeb14080d9",
            "name": "Reception"
        };
    }

    static async all() {
        return [
            {
                "_id": "5a0bfd07be57eeaeb14080d9",
                "name": "Reception"
            },
            {
                "_id": "5a0bfd07be57eeaeb1408010",
                "name": "Reception 2"
            }
        ];
    }
}
