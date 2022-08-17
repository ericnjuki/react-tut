import React from 'react';

const CommentDetail = ({
    author,
    time,
    body,
    profilePic,
}) => {
    return (
        <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={profilePic} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {author}
          </a>
          <div className="metadata">
            <span className="date">{time}</span>
          </div>
          <div className="text">{body}</div>
        </div>
      </div>
    )
}

export default CommentDetail;