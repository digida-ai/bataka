import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import adminRoutes from './adminRoutes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/admin', adminRoutes);


app.get('/admin', (req, res) => {
  res.send('Welcome to the admin dashboard!');
});
app.get('/admin/users', (req, res) => {
  res.send('List of users');
});
app.get('/admin/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User with ID ${userId}`);
});
app.post('/admin/users', (req, res) => {
  const newUser = req.body;
  res.send(`New user created: ${newUser}`);
});
app.put('/admin/users/:id', (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;
  res.send(`User with ID ${userId} updated: ${updatedUser}`);
});
app.delete('/admin/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User with ID ${userId} deleted`);
});
app.get('/admin/posts', (req, res) => {
  res.send('List of posts');
});
app.get('/admin/posts/:id', (req, res) => {
  const postId = req.params.id;
  res.send(`Post with ID ${postId}`);
});
app.post('/admin/posts', (req, res) => {
  const newPost = req.body;
  res.send(`New post created: ${newPost}`);
});
app.put('/admin/posts/:id', (req, res) => {
  const postId = req.params.id;
  const updatedPost = req.body;
  res.send(`Post with ID ${postId} updated: ${updatedPost}`);
});
app.delete('/admin/posts/:id', (req, res) => {
  const postId = req.params.id;
  res.send(`Post with ID ${postId} deleted`);
});
app.get('/admin/comments', (req, res) => {
  res.send('List of comments');
});
app.get('/admin/comments/:id', (req, res) => {
  const commentId = req.params.id;
  res.send(`Comment with ID ${commentId}`);
});


app.listen(5000, () => {
  console.log('Admin dashboard running on port 5000');
});