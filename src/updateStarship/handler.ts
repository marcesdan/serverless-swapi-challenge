import dynamoDb from "../utils/dynamoDb";

export default async ({ body, pathParameters: { id: pk } }) => {
  const { units } = JSON.parse(body);
  try {
    const { Item } = await dynamoDb
      .get({ TableName: "starshipTable", Key: { pk } })
      .promise();

    if (Item) {
      // the starship exists
      const { Attributes: starship } = await dynamoDb
        .update({
          TableName: "starshipTable",
          Key: { pk },
          UpdateExpression: "SET units = :units",
          ExpressionAttributeValues: { ":units": units },
          ReturnValues: "ALL_NEW",
        })
        .promise();

      return {
        statusCode: 200,
        body: JSON.stringify({ starship }),
      };
    } else {
      // it doesn't exist, so we create it
      await dynamoDb
        .put({
          TableName: "starshipTable",
          Item: { pk, units }
        })
        .promise();

      return {
        statusCode: 200,
        body: JSON.stringify("ok"),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
