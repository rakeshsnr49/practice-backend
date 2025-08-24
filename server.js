const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const userRoutes = require('./routes/userRoutes');
const routes = require('./routes/routes')

app.use('/api/users', userRoutes);
app.use('/', routes);

// MongoDB connection (optional)
mongoose.connect('mongodb+srv://nidbiz108:Rsonar%401@1R1.suoshh4.mongodb.net/practice-backend?retryWrites=true&w=majority&appName=R1", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.error('MongoDB connection error:", err));
  .catch(err => console.log(err));

// Start server
const PORT = process.env.PORT ||5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

