import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class StarService {
  async getAll(query = {}){
    const stars = await dbContext.Stars.find(query).populate('star', 'name age')
    return stars
  }

  async getById(id){
    const stars = await dbContext.Stars.findByID(id).populate('star', 'name age')
    if (!stars) {
      throw new BadRequest('invalid star id')
    }
    return stars
  }
}