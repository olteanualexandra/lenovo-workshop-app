import { init, i, id, InstaQLEntity } from "@instantdb/core";
// ID for app: angular
const APP_ID = "88af97b0-c5fa-41da-a1a2-d2c9e323aa78";

// Optional: Declare your schema!
const schema = i.schema({
  entities: {
    recipes: i.entity({
      id:i.string(),
      name: i.string(),
      iamge: i.string(),
      difficulty: i.string(),
      prepTimeMinutes: i.number(),
    }),
  },
});

const db = init({ appId: APP_ID, schema });

export {db,schema};

