import { Router } from 'express';
const router = Router();
import { register, login } from '../controllers/authController.js';

router.post('/register', register);
router.post('/login', login);
router.post('/logout', (req, res) => {
  req.logout();
  res.send('Logged out');
});

// router.get('/profile', authMiddleware, getUserProfile);

// router.put('/profile', authMiddleware, updateUserProfile);

// router.delete('/profile', authMiddleware, deleteUserProfile);

// router.get('/me', authMiddleware, getMe);
// router.get('/:id', authMiddleware, getUserById);
// router.get('/', authMiddleware, getAllUsers);

// router.put('/:id', authMiddleware, updateUser);
// router.delete('/:id', authMiddleware, deleteUser);

// router.get('/:id/friends', authMiddleware, getUserFriends);
// router.get('/:id/friendRequests', authMiddleware, getUserFriendRequests);
// router.post('/:id/friendRequests', authMiddleware, sendFriendRequest);
// router.put('/:id/friendRequests/:requestId', authMiddleware, acceptFriendRequest);
// router.delete('/:id/friendRequests/:requestId', authMiddleware, rejectFriendRequest);
// router.delete('/:id/friends/:friendId', authMiddleware, removeFriend);

// router.get('/:id/posts', authMiddleware, getUserPosts);
// router.post('/:id/posts', authMiddleware, createPost);
// router.put('/:id/posts/:postId', authMiddleware, updatePost);
// router.delete('/:id/posts/:postId', authMiddleware, deletePost);

// router.get('/:id/comments', authMiddleware, getUserComments);
// router.post('/:id/comments', authMiddleware, createComment);
// router.put('/:id/comments/:commentId', authMiddleware, updateComment);
// router.delete('/:id/comments/:commentId', authMiddleware, deleteComment);

// router.get('/:id/likes', authMiddleware, getUserLikes);
// router.post('/:id/likes', authMiddleware, likePost);
// router.delete('/:id/likes', authMiddleware, unlikePost);

// router.get('/:id/followers', authMiddleware, getUserFollowers);
// router.get('/:id/following', authMiddleware, getUserFollowing);
// router.post('/:id/follow', authMiddleware, followUser);
// router.delete('/:id/follow', authMiddleware, unfollowUser);
// router.get('/:id/notifications', authMiddleware, getUserNotifications);
// router.post('/:id/notifications', authMiddleware, createNotification);
// router.put('/:id/notifications/:notificationId', authMiddleware, updateNotification);
// router.delete('/:id/notifications/:notificationId', authMiddleware, deleteNotification);
// router.get('/:id/messages', authMiddleware, getUserMessages);
// router.post('/:id/messages', authMiddleware, sendMessage);
// router.put('/:id/messages/:messageId', authMiddleware, updateMessage);
// router.delete('/:id/messages/:messageId', authMiddleware, deleteMessage);
// router.get('/:id/groups', authMiddleware, getUserGroups);
// router.post('/:id/groups', authMiddleware, createGroup);
// router.put('/:id/groups/:groupId', authMiddleware, updateGroup);
// router.delete('/:id/groups/:groupId', authMiddleware, deleteGroup);
// router.get('/:id/groupMemberships', authMiddleware, getUserGroupMemberships);
// router.post('/:id/groupMemberships', authMiddleware, joinGroup);
// router.put('/:id/groupMemberships/:membershipId', authMiddleware, leaveGroup);
// router.delete('/:id/groupMemberships/:membershipId', authMiddleware, leaveGroup);
// router.get('/:id/groupMessages', authMiddleware, getUserGroupMessages);
// router.post('/:id/groupMessages', authMiddleware, sendGroupMessage);
// router.put('/:id/groupMessages/:messageId', authMiddleware, updateGroupMessage);
// router.delete('/:id/groupMessages/:messageId', authMiddleware, deleteGroupMessage);
// router.get('/:id/groupNotifications', authMiddleware, getUserGroupNotifications);
// router.post('/:id/groupNotifications', authMiddleware, createGroupNotification);
// router.put('/:id/groupNotifications/:notificationId', authMiddleware, updateGroupNotification);
// router.delete('/:id/groupNotifications/:notificationId', authMiddleware, deleteGroupNotification);
// router.get('/:id/groupInvitations', authMiddleware, getUserGroupInvitations);
// router.post('/:id/groupInvitations', authMiddleware, sendGroupInvitation);
// router.put('/:id/groupInvitations/:invitationId', authMiddleware, acceptGroupInvitation);
// router.delete('/:id/groupInvitations/:invitationId', authMiddleware, rejectGroupInvitation);


export default router;
