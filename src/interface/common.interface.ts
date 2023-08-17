import { IGenericErrorMessage } from "./error.interface";

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessage: IGenericErrorMessage;
};
