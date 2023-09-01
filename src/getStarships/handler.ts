import dynamoDb from "../utils/dynamoDb";
import getResponseError from "../utils/getResponseError";
import getResponseOk from "../utils/getResponseOk";

export default async () =>
  dynamoDb
    .scan({ TableName: "starshipTable" })
    .promise()
    .then((starship) => getResponseOk({ starship }))
    .catch((error) => getResponseError({ error }));
