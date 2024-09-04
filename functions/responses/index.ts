import { APIGatewayProxyResult } from "aws-lambda";

export function successResponse<T>(data: T): APIGatewayProxyResult {
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
}

export function errorResponse(message: string): APIGatewayProxyResult {
  return {
    statusCode: 404,
    body: JSON.stringify({ message }),
  };
}
