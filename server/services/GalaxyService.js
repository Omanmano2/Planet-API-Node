import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class GalaxyService {
  async getAll(query = {}) {
    const galaxies = await dbContext.Galaxy.find(query).populate('galaxy', 'name size')
    return galaxies
  }

  async getById(id) {
    const galaxy = await dbContext.findById(id).populate('galaxy', 'name size')
    if (!galaxy) {
      throw new BadRequest('Invalid galaxy Id')
    }
    return galaxy
  }

  async create(newGalaxy){
    const galaxy = await dbContext.Galaxies.create(newGalaxy)
    await galaxy.populate('galaxy', 'name size')
  }
}

export const galaxyService = new GalaxyService()