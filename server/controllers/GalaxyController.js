import { galaxyService } from "../services/GalaxyService"
import BaseController from '../utils/BaseController'
export class GalaxyController extends BaseController {
  constructor() {
    super('api/galaxies')
    this.router
      .get('',this.getAll)
      .get('/:id', this.getById)
      .post('',this.create )
  }

  async getAll(req, res, next){
    try {
      const galaxies = await galaxyService.getAll(req.query)
      return res.send(galaxies)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const galaxy = await galaxyService.getById(req.params.id)
      return res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async remove(req, res, next) {
    try {
      await galaxyService.remove(req.params.id, req.userInfo.id)
      return res.send('deleted')
    } catch (error) {
      next(error)
    }
  }
}