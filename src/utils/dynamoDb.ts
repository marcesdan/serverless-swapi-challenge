import AWS from "aws-sdk";

const dynamoDBClientParams = process.env.IS_OFFLINE
    ? {
        region: "localhost",
        endpoint: "http://localhost:8000",
        accessKeyId: "DEFAULTACCESSKEY",
        secretAccessKey: "DEFAULTSECRET",
    }
    : {};

const dynamoDb = new AWS.DynamoDB.DocumentClient(dynamoDBClientParams);

export default dynamoDb;
