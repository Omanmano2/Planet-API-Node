import mongoose from 'mongoose'
import { GalaxySchema } from "./Galaxy"
import { StarSchema } from "./Star"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const PlanetSchema = new Schema (
  {
    name: {type: String, required: true},
    size: {type: Number, required : true},
    habitable: {type: Boolean, required: true},
    galaxyId: {type: ObjectId, required: true},
    starId: {type: ObjectId, required: true}
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


