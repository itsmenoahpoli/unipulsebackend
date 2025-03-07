import { type Request, type Response, type NextFunction } from "express";
import { HttpStatusCode } from "@/types";

export class SystemController {
  public healthcheck(request: Request, response: Response, next: NextFunction): any {
    return response
      .status(HttpStatusCode.OK)
      .json({
        message: "SYSTEM_ONLINE",
      })
      .send();
  }
}
