export const schema = {
    type: 'object',
    properties: {
      hobbies: {
        type: 'array',
        items: {
          type: 'string',
          enum: ['Reading', 'Gaming', 'Traveling', 'Cooking']
        }
      }
    },
    required: ['hobbies']
  };
  
  export const uischema = {
    type: 'Control',
    scope: '#/properties/hobbies'
  };
  