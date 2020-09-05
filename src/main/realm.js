process.env.REALM_DISABLE_ANALYTICS = "true";

import * as Realm from "realm";
import { app } from "electron";

const Test = {
  name: "Test",
  primaryKey: "id",
  properties: {
    id: "string",
    n: "int",
  },
};

const realm = new Realm({ schema: [Test] });

app.on("ready", async () => {
  const n = realm.objects("Test").length;
  console.log("n1 =", n);
});
