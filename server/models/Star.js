import mongoose from 'mongoose'
import { GalaxySchema } from "./Galaxy"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const StarSchema = new Schema(
  {
    name: {type: String, required: true},
    age: {type: Number, required: true},
    galaxyId: {type: ObjectId, required: true},
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

