module.exports = ({ env }) => ({
  // ...

  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '7d',
      },
    },
  },
  
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        page: {
          field: "slug",
          references: "name",
        },
        post: {
          field: "slug",
          references: "name",
        },
        footballsports1 : {
          field: "slug",
          references: "name",
        },
      },
    },
  },

  upload: {
    
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
});