exports.schema = {
    "schema": {
        "displayName": "test",
        "id": "test",
        "allowedOperations": [
            "get",
            "find",
            "count",
            "update",
            "insert",
            "remove"
        ],
        "maxPageSize": 50,
        "ttl": 3600,
        "fields": {
            "title": {
                "displayName": "title",
                "type": "datetime",
                "queryOperators": [
                    "eq",
                    "lt",
                    "gt",
                    "hasSome",
                    "and",
                    "lte",
                    "gte",
                    "or",
                    "not",
                    "ne",
                    "startsWith",
                    "endsWith"
                ]
            },
            "_id": {
                "displayName": "_id",
                "type": "text",
                "queryOperators": [
                    "eq",
                    "lt",
                    "gt",
                    "hasSome",
                    "and",
                    "lte",
                    "gte",
                    "or",
                    "not",
                    "ne",
                    "startsWith",
                    "endsWith"
                ]
            },
            "_owner": {
                "displayName": "_owner",
                "type": "text",
                "queryOperators": [
                    "eq",
                    "lt",
                    "gt",
                    "hasSome",
                    "and",
                    "lte",
                    "gte",
                    "or",
                    "not",
                    "ne",
                    "startsWith",
                    "endsWith"
                ]
            },
        }
    }
}