import dynamoDb from "../utils/dynamoDb";

export default async () =>
  dynamoDb
    .scan({ TableName: "starshipTable" })
    .promise()
    .then((starship) => ({
      statusCode: 200,
      body: JSON.stringify({ starship }),
    }))
    .catch((error) => ({
      statusCode: 500,
      body: JSON.stringify({ error }),
    }));
