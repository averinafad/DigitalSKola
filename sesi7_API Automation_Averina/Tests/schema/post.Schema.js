const schema_postbikinuserbaru ={
    "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "title": {
          "type": "string"
        },
        "userId": {
          "type": "integer"
        }
      },
      "required": [
        "id",
        "title",
        "userId"
      ]
    }

    export default schema_postbikinuserbaru;