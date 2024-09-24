import express from 'express';
import kikaRoutes from './routes/bika.js';
import mutubaRoutes from './routes/mituba.js';
import ssigaRoutes from './routes/masiga.js';
import lunyiririRoutes from './routes/nnyiriri.js';
import luggyaRoutes from './routes/mpya.js';
import enjuRoutes from './routes/mayumba.js';
import adminRoutes from './routes/admin.js';

const app = express();

app.use(express.json());
app.use('/api/bika', kikaRoutes);
app.use('/api/mituba', mutubaRoutes);
app.use('/api/masiga', ssigaRoutes);
app.use('/api/nnyiriri', lunyiririRoutes);
app.use('/api/mpya', luggyaRoutes);
app.use('/api/mayumba', enjuRoutes);
app.use('/api/admin', adminRoutes);

// Export the Express application's methods we want to expose
export const use = app.use.bind(app);
export const get = app.get.bind(app);
export const listen = app.listen.bind(app);
export const post = app.post.bind(app);
export const put = app.put.bind(app);
export const deleteMethod = app.delete.bind(app);

// Export the entire app as well, in case it's needed
export default app;
