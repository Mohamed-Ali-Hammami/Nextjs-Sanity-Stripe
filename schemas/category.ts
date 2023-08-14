// Category Schema

export default {
    name: 'category',
    type: 'document',
    title: 'Category',
    fields: [
      {
        name: 'name',
        type: 'string',
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'slug',
        type: 'slug',
        options: {
          source: 'name',
        },
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'images',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {name: 'url', type: 'url', title: 'URL'},
              {name: 'file', type: 'file', title: 'File'},
            ],
            validation: (Rule: any) => Rule.required(),
          },
        ],
      },
      {
        name: 'subtitle',
        type: 'string',
        validation: (Rule: any) => Rule.required(),
      },
    ],
  }