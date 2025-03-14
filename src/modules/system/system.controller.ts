import { type Request, type Response, type NextFunction } from "express";
import { SendHttpResponse } from "@/utils";
import { HttpStatusCode } from "@/types";

export class SystemController {
  public healthcheckHandler(request: Request, response: Response, next: NextFunction): any {
    return SendHttpResponse(response, { status: "online" }, HttpStatusCode.OK);
  }

  public async createAdminAccountHandler(request: Request, response: Response, next: NextFunction): Promise<any> {
    return SendHttpResponse(response, { status: "ADMIN_ACCOUNT_CREATED" }, HttpStatusCode.CREATED);
  }
}
