import React, { useState } from 'react';
import './Feed.css'; // Import your CSS file
import redHeartIcon from './red-heart.png'; // Import your red heart icon
import greyHeartIcon from './grey-heart.jpg'; // Import your grey heart icon
const initialFeeds = [
    {
      id: 1,
      title: 'Post Title 1',
      content: 'This is the content of the first post.',
      author: 'User123',
      isLiked: false, // Add a flag to track the liked state
    },
    {
      id: 2,
      title: 'Another Post 2',
      content: 'Here\'s another post content.',
      author: 'User456',
      isLiked: false, // Add a flag to track the liked state
    },
  ];
function Feed() {
  // Define an initial state for the feeds
 

  // Use useState to manage the feeds state
  const [feeds, setFeeds] = useState(initialFeeds);

  // Function to toggle the like state of a post
  const toggleLike = (postId) => {
    setFeeds((prevFeeds) =>
      prevFeeds.map((feed) =>
        feed.id === postId ? { ...feed, isLiked: !feed.isLiked } : feed
      )
    );
  };

  return (
    <div className="feed-container">
      <h1>Feed</h1>
      {feeds.map((feed) => (
        <div className="post" key={feed.id}>
          <div className="post-header">
            <h3>{feed.title}</h3>
            <p>Posted by {feed.author}</p>
          </div>
          <div className="post-content">{feed.content}</div>
          <div className="post-actions">
            <button onClick={() => toggleLike(feed.id)}>
              <img
                src={feed.isLiked ? redHeartIcon : greyHeartIcon}
                alt={feed.isLiked ? 'Red Heart' : 'Grey Heart'}
                className="heart-icon"
                style={{ width: '30px', height: '30px' }} // Set the fixed width and height
              />
            </button>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feed;
