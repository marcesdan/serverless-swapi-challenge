import dynamoDb from "../utils/dynamoDb";

export default async () =>
  dynamoDb
    .scan({
        TableName: "vehicleTable" 
    })
    .promise()
    .then((vehicle) => ({
      statusCode: 200,
      body: JSON.stringify({ vehicle }),
    }))
    .catch((error) => ({
      statusCode: 500,
      body: JSON.stringify({ error }),
    }));
