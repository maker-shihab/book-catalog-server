import { Response } from "express";

type IApiResponse<T> = {
  statusCode: number;
  success: string;
  message?: string | null;
  meta?: {
    page: number;
    limit: number;
    totall: number;
  };
  data?: T | null;
};

const sendResponse = <T>(res: Response, data: IApiResponse<T>): void => {
  const responseData: IApiResponse<T> = {
    statusCode: data.statusCode,
    success: data.success,
    message: data.message,
    meta: data.meta || null || undefined,
    data: data.data || null || undefined,
  };

  res.status(data.statusCode).json(responseData);
};

export default sendResponse;
