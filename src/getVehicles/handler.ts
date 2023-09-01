import dynamoDb from "../utils/dynamoDb";
import getResponseError from "../utils/getResponseError";
import getResponseOk from "../utils/getResponseOk";

export default async () =>
  dynamoDb
    .scan({ TableName: "vehicleTable" })
    .promise()
    .then((vehicle) => getResponseOk({ vehicle }))
    .catch((error) => getResponseError({ error }));
