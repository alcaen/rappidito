import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Restaurant name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Restaurant description',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Restaurant image',
    },
    {
      name: 'lat',
      type: 'number',
      title: 'Restaurant latitude',
    },
    {
      name: 'long',
      type: 'number',
      title: 'Restaurant longitude',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Restaurant address',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Restaurant rating',
      validation: (Rule) => Rule.required().min(1).max(5).error('Enter a number between 1 & 5'),
    },
    {
      name: 'type',
      type: 'reference',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      to: [{type: 'category'}],
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      validation: (Rule) => Rule.required(),
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    },
  ],
})
