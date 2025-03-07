import { type Request, type Response, type NextFunction } from "express";
import { SendHttpResponse } from "@/utils";
import { HttpStatusCode } from "@/types";

export class SystemController {
  public healthcheck(request: Request, response: Response, next: NextFunction): any {
    return SendHttpResponse(response, { status: "online" }, HttpStatusCode.OK);
  }
}
