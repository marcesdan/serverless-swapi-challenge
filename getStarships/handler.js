import AWS from "aws-sdk";

const dynamodb = new AWS.DynamoDB.DocumentClient(
  process.env.IS_OFFLINE
    ? {
        region: "localhost",
        endpoint: "http://localhost:8000",
        accessKeyId: "DEFAULTACCESSKEY", // needed if you don't have aws credentials at all in env
        secretAccessKey: "DEFAULTSECRET", // needed if you don't have aws credentials at all in env
      }
    : {}
);

export default async () =>
  dynamodb
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
