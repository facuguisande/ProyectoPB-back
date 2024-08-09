import express from 'express';
import connectToDatabase from './utils/database';
import personalRoutes from './routes/personalRoutes';
import morgan from 'morgan';  // me muestra las peticiones en consola
import cors from 'cors';  // Para que cualquier servidor pueda interactuar
import eventRoutes from './routes/eventRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false})); // reconocer los campos y post de los formularios


// Routes
app.use('/personal', personalRoutes);
app.use('/events', eventRoutes);


// Connect to the database
connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

export default app;