import axios from "axios";
import config from "../../../config";
import { createClient } from "contentful-management"

const client = createClient({
  accessToken: config.CONTENTFUL_ACCESS_TOKEN
})

console.log(config);

const environment = client.getSpace(config.CONTENTFUL_SPACE_ID)
  .then((space) => space.getEnvironment('master'))
  .then((environment) => environment)
  .catch(console.error)

export default environment;