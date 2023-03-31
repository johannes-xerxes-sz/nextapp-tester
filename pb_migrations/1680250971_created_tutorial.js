migrate((db) => {
  const collection = new Collection({
    "id": "nntgmxsvitpo9c7",
    "created": "2023-03-31 08:22:51.111Z",
    "updated": "2023-03-31 08:22:51.111Z",
    "name": "tutorial",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xjcjyfzr",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "jlmmj1ru",
        "name": "content",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("nntgmxsvitpo9c7");

  return dao.deleteCollection(collection);
})
