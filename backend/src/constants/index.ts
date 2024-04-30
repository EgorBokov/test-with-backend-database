const DEV_LOCAL_PORT = 3005; 

export const PORT = process.env.PORT || DEV_LOCAL_PORT;
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_USERNAME = process.env.USER || 'me';
export const DB_PASSWORD = process.env.DB_PASSWORD || 'secret_password';
export const DB_NAME = process.env.DB_NAME || 'my_db';
