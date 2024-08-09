import mongoose from 'mongoose';
import 'dotenv/config';

const connectToDatabase = async () => {
  try {
    if (process.env.MONGODB_URI) {
      await mongoose.connect(process.env.MONGODB_URI, {
       
      });
      console.log('Conexión a la base de datos establecida');
    } else {
      console.error('MONGODB_URI environment variable is not defined');
      process.exit(1);
    }
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    process.exit(1);
  }
};

export default connectToDatabase;

