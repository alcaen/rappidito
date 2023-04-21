import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  type: 'document',
  title: 'Featured menu categories',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Featured category name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Featured category description',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'restaurants',
      type: 'array',
      title: 'Restaurants',
      of: [{type: 'reference', to: [{type: 'restaurant'}]}],
    }),
  ],
})
