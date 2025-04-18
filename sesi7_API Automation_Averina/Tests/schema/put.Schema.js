const schema_putupdatedatauser = {
    "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "title": {
          "type": "string"
        },
        "body": {
          "type": "string"
        },
        "userId": {
          "type": "integer"
        },
        "tags": {
          "type": "array",
          "items": [
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            }
          ]
        },
        "reactions": {
          "type": "object",
          "properties": {
            "likes": {
              "type": "integer"
            },
            "dislikes": {
              "type": "integer"
            }
          },
          "required": [
            "likes",
            "dislikes"
          ]
        }
      },
      "required": [
        "id",
        "title",
        "body",
        "userId",
        "tags",
        "reactions"
      ]
    }

    export default schema_putupdatedatauser;