import React from 'react';
import { faker } from "@faker-js/faker";

const CommentDetail = ({
    author,
    time,
    body
}) => {
    return (
        <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
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