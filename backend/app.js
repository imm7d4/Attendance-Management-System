const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const authRoutes = require('./routes/auth');
const studentRoutes = require('./routes/student');
const teacherRoutes = require('./routes/teacher');
const adminRoutes = require('./routes/admin');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const accessControl = require('./middlewares/access-controls');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(accessControl);
app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
app.use(bodyParser.json());


try {
    mongoose.connect("mongodb://127.0.0.1:27017/studentPortal", 
    {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    });
    console.log(`mongoDB connected successfully on mongodb://127.0.0.1:27017/studentPortal`);
  } catch (error) {
    console.log("Error occured while connecting with mongoDB")
  }

app.use(helmet());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

app.use('/api/auth', authRoutes);
app.use('/api/student', studentRoutes);
app.use('/api/teacher', teacherRoutes);
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
