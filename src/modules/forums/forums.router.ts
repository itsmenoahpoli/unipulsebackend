import { Router } from "express";
import { ForumsController } from "./forums.controller";

export class ForumsRouter {
  private router: Router;
  private forumsController: ForumsController;

  constructor() {
    this.router = Router();
    this.forumsController = new ForumsController();
    this.initializeRoutes();
  }

  get routerRoutes() {
    return this.router;
  }

  private initializeRoutes() {
    this.router.get("/", this.forumsController.fetchListHandler);
    this.router.get("/:id", this.forumsController.fetchByIdHandler);
    this.router.patch("/:id", this.forumsController.updateByIdHandler);
    this.router.delete("/:id", this.forumsController.deleteByIdHandler);
    this.router.post("/", this.forumsController.createHandler);
  }
}