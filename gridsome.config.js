module.exports = {
  siteName: "Ain't No Mountain High Enough",
  plugins: [
    {
      use: "@gridsome/source-airtable",
      options: {
        // Add these to a .env file
        // Details on finding these values can be found at:
        // https://gridsome.org/plugins/@gridsome/source-airtable
        apiKey: process.env.AIRTABLE_KEY, //required
        baseId: process.env.AIRTABLE_BASE, //required
        tables: [
          {
            name: "Events",
            typeName: "Event", //required - needs to match template name
            select: {}, 
            links: [], 
          },
        ],
        tableName: "Events", 
      },
    },
    {
      use: "gridsome-plugin-tailwindcss",
      /**
      * These are the default options. You don't need to set any options to get
      * going. Seriously, you don't need to declare tailwind.config.js.

      options: {
        tailwindConfig: './tailwind.config.js',
        presetEnvConfig: {},
        shouldImport: true,
        shouldTimeTravel: true
      }
      */
    }
  ],
  templates: {
    Event: "/events/:id",
  },
};
