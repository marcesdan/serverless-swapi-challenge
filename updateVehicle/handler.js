import AWS from "aws-sdk";

const dynamodb = new AWS.DynamoDB.DocumentClient(
  process.env.IS_OFFLINE
    ? {
        region: "localhost",
        endpoint: "http://localhost:8000",
        accessKeyId: "DEFAULTACCESSKEY", // needed if you don't have aws credentials at all in env
        secretAccessKey: "DEFAULT_SECRET", // needed if you don't have aws credentials at all in env
      }
    : {}
);

export default async ({ body, pathParameters: { id: pk } }) => {
  const { units } = JSON.parse(body);
  try {
    const { Item } = await dynamodb
      .get({ TableName: "vehicleTable", Key: { pk } })
      .promise();

    if (Item) {
      // the vehicle exists
      console.log("Item exists", Item);
      const { Attributes: vehicle } = await dynamodb
        .update({
          TableName: "vehicleTable",
          Key: { pk },
          UpdateExpression: "SET units = :units",
          ExpressionAttributeValues: { ":units": units },
          ReturnValues: "ALL_NEW",
        })
        .promise();

      return {
        statusCode: 200,
        body: JSON.stringify({ vehicle }),
      };
    } else {
      // it doesn't exist, so we create it
      console.log("Item doesn't exist exists");
      await dynamodb
        .put({
          TableName: "vehicleTable",
          Item: { pk, units }
        })
        .promise();

      return {
        statusCode: 200,
        body: JSON.stringify("ok"),
      };
    }
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
