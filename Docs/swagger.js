import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "MoviesArea-API",
            version: "1.0.0",
            description: "API Documentation",
        },
    },
    apis: ["./routes/movies.routes.js", './routes/user.routes.js'],  // Path to API routes
};

const swaggerSpec = swaggerJsdoc(options);
// console.log("Swagger Spec Generated:", JSON.stringify(swaggerSpec, null, 2));

export { swaggerUi, swaggerSpec };
