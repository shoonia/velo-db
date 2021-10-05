exports.item = {
    _id: "24f63542-d9eb-4651-8aa3-bd710135dc0c",
    _owner: "e3b156c2-28f9-4bda-97b3-6a3044636f69",
    title: "test",
};

exports.schemas = {
    "schemas": [
        {
            "displayName": "mycollection",
            "id": "mycollection",
            "allowedOperations": [
                "get",
                "find",
                "count",
                // "update",
                // "insert",
                // "remove"
            ],
            "maxPageSize": 50,
            "ttl": 3600,
            "fields": {
                "title": {
                    "displayName": "title",
                    "type": "text",
                    "queryOperators": [
                        // "eq",
                        // "lt",
                        // "gt",
                        // "hasSome",
                        // "and",
                        // "lte",
                        // "gte",
                        // "or",
                        // "not",
                        // "ne",
                        // "startsWith",
                        // "endsWith"
                    ]
                },
                "_id": {
                    "displayName": "_id",
                    "type": "text",
                    "queryOperators": []
                },
                "_owner": {
                    "displayName": "_owner",
                    "type": "text",
                    "queryOperators": []
                },
            }
        }
    ]
}