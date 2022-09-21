import { DBBurger } from "../db/DBBurger.js"
import { BadRequest } from "../utils/Errors.js"

class BurgersService {

  async getBurgers() {
    const res = DBBurger
    return res.burgers
  }

  async getBurgerId(burgerid) {
    const burger = DBBurger.burgers.find(b => b.id == burgerid)

    if (!burger) {
      throw new BadRequest('invalid Id')
    }
    return burger
  }










}
export const burgerService = new BurgersService()