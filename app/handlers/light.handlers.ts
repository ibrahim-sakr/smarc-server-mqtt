export class LightHandlers {
    static async find() {
        return {
            "_id": "5b55d1801470702431f57b71",
            "id": 0,
            "status": true,
            "name": "Applique",
            "room_id": "5a0bfd07be57eeaeb14080d9",
            "node_id": "5ad1099dc4dcd9d5ecc6673e"
        };
    }

    static async all() {
        return [
            {
                "_id": "5b55d1801470702431f57b71",
                "id": 0,
                "status": true,
                "name": "Applique",
                "room_id": "5a0bfd07be57eeaeb14080d9",
                "node_id": "5ad1099dc4dcd9d5ecc6673e"
            },
            {
                "_id": "5b55d1801470702431f57b72",
                "id": 1,
                "status": true,
                "name": "Applique 2",
                "room_id": "5a0bfd07be57eeaeb14080d9",
                "node_id": "5ad1099dc4dcd9d5ecc6673e"
            }
        ];
    }

    static async room() { }
    static async node() { }
}
