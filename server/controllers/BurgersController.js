import { burgerService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('', this.getAllBurgers)
      .get('/:burgerId', this.getBurgerId)


  }

  async getAllBurgers(req, res, next) {
    try {
      const burgers = await burgerService.getBurgers()
      res.send(burgers)
    } catch (error) {
      next(error)
    }

  }

  async getBurgerId(req, res, next) {
    try {
      const burgerId = req.params.burgerId
      const burger = await burgerService.getBurgerId(burgerId)
    } catch (error) {
      next(error)
    }
  }















}