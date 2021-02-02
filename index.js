const express = require('express');
const app = express();

// Add home route
app.get('/', (req, res) => {
    res.send('Today topic will be classes.');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT} 🎧`);
});