import dynamoDb from "../utils/dynamoDb";
import getResponseError from "../utils/getResponseError";
import getResponseOk from "../utils/getResponseOk";

export default async ({ body, pathParameters: { id: pk } }) => {
  const { units } = JSON.parse(body);
  try {
    const { Item } = await dynamoDb
      .get({ TableName: "vehicleTable", Key: { pk } })
      .promise();

    if (Item) {
      // the vehicle exists
      await dynamoDb
        .update({
          TableName: "vehicleTable",
          Key: { pk },
          UpdateExpression: "SET units = :units",
          ExpressionAttributeValues: { ":units": units },
          ReturnValues: "ALL_NEW",
        })
        .promise();

      return getResponseOk({ status: "ok" });
    } else {
      // it doesn't exist, so we create it
      await dynamoDb
        .put({
          TableName: "vehicleTable",
          Item: { pk, units },
        })
        .promise();

      return getResponseOk({ status: "ok" });
    }
  } catch (error) {
    return getResponseError({ error });
  }
};
