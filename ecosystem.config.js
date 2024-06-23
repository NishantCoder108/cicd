module.exports = {
    apps: [
        {
            name: "my-app",
            script: "dist/index.js", // Path to your compiled JavaScript file
            watch: true, // Set to true if you want PM2 to watch for file changes and restart the app
            env: {
                NODE_ENV: "production",
            },
        },
    ],
};
