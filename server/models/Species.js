import mongoose from 'mongoose'
import { GalaxySchema } from "./Galaxy"
import { PlanetSchema } from "./Planet"
import { StarSchema } from "./Star"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const SpeciesSchema = new Schema(
  {
    name: {type: String, required: true},
    size: {type: Number, required : true},
    intelligentLifeForm: {type:  Boolean, required: true},
    galaxyId: {type: ObjectId, required: true},
    starId: {type: ObjectId, required: true},
    planetId: {type: ObjectId, required: true}
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

GalaxySchema.virtual('galaxy', {
  localField: 'galaxyId',
  foreignField: '_id',
  justOne: true,
  ref: 'Galaxy'
})

StarSchema.virtual('star', {
  localField: 'starId',
  foreignField: '_id',
  justOne: true,
  ref: 'Star'
})

PlanetSchema.virtual('planet', {
  localField: 'planetId',
  foreignField: '_id',
  justOne: true,
  ref: 'Planet'
})

SpeciesSchema.virtual('species', {
  localField: 'speciesId',
  foreignField: '_id',
  justOne: true,
  ref: 'Species'
})