import dotenv from 'dotenv';
dotenv.config({quiet: true});

const config = {
  PORT: process.env.PORT,
  DB_URI: process.env.DB_URL,
  JWT_SECRET: process.env.JWT_SECRET
};

export default config;