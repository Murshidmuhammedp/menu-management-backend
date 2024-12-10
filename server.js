import express from 'express';
import dotenv from 'dotenv';
import menuRouter from './src/routes/menuRoutes.js';
import menuItemRouter from './src/routes/menuItemRoutes.js';
import cors from 'cors'

const PORT = process.env.PORT || 5678;

const app = express();

dotenv.config();

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/menus', menuRouter);
app.use('/api/menu-items', menuItemRouter);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
