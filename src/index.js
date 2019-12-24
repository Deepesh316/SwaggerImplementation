const express = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const app = express();
const port = process.env.PORT || 3000;

// Copied from : https://swagger.io/specification/#info-object
const options = {
  swagger: "2.0",
  swaggerDefinition: {
    // options.swaggerDefinition could be also options.definition
    info: {
      title: "Customer API", // Title (required)
      description: "Dummy Customer API for implementing swagger",
      contact: {
        name: "Deepesh Kumar R"
      },
      version: "1.0.0" // Version (required)
    },
    host: "localhost:3000",
    basePath: "/"
  },
  // Path to the API docs
  apis: ["src/index.js"] // For complex api's pass something like apis: ["./routes/*.js"]
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerDocs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
/**
 * @swagger
 * /dummy:
 *  get:
 *    tags:
 *    - "dummy"
 *    summary: "Document an API created with node.js express application using swagger tools"
 *    description: ""
 *    responses:
 *      200:
 *        description: "successful operation"
 */
app.get("/dummy", (req, res) => {
  res.send("dummy data");
});

app.listen(port, () => {
  console.log(`application listening to port ${port}`);
});
