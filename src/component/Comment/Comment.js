import React, { useState } from 'react';  
import './Comment.css';  

function CommentSection() {  
  const [comments, setComments] = useState([  
    { author: 'lephu', timestamp: '15 minutes ago', content: 'beauty beach' },  
    { author: 'trung quan', timestamp: '8 minutes ago', content: 'it very beauty beach and this is a good website' },  
    { author: 'tan an', timestamp: '10 minutes ago', content: 'good noodle' },  
    { author: 'cong huyen', timestamp: '60 minutes ago', content: 'i like Vung Tau beach' }  
  ]);  

  const [currentComment, setCurrentComment] = useState('');  
  const [authorName, setAuthorName] = useState('');  

  const handleCommentChange = (event) => {  
    setCurrentComment(event.target.value);  
  };  

  const handleAuthorChange = (event) => {  
    setAuthorName(event.target.value);  
  };  

  const handleDelete = (index) => {  
    const updatedComments = comments.filter((_, idx) => idx !== index);   
    setComments(updatedComments);   
  }  

  const handleCommentSubmit = (event) => {  
    event.preventDefault();  

    if (!authorName) {  
      alert('Vui lòng nhập tên của bạn trước khi bình luận.'); // Thông báo khi không có tên  
      return;  
    }  

    if (currentComment) {  
      const newComment = {  
        author: authorName, // Sử dụng tên của người dùng  
        timestamp: new Date().toLocaleString(),  
        content: currentComment,  
      };  

      setComments([...comments, newComment]);  
      setCurrentComment(''); // Xóa nội dung bình luận  
      setAuthorName(''); // Xóa tên người dùng  
    }  
  };  

  return (  
    <div className="comments-section">  
      <h2>Comments ({comments.length})</h2>  

      <form onSubmit={handleCommentSubmit}>  
        <div className="wave-group">  
          <input   
            id="author"  
            required  
            type="text"   
            className="input"   
            value={authorName}   
            onChange={handleAuthorChange}   
          />  
          <span className="bar"></span>  
          <label className="label">  
            <span className="label-char" style={{ '--index': 0 }}>N</span>  
            <span className="label-char" style={{ '--index': 1 }}>a</span>  
            <span className="label-char" style={{ '--index': 2 }}>m</span>  
            <span className="label-char" style={{ '--index': 3 }}>e</span>  
          </label>  
        </div>  
        
        <textarea  
          id="comment"  
          name="comment" 
          className='text-area' 
          rows="5"  
          value={currentComment}  
          onChange={handleCommentChange}  
          required  
          placeholder="Nhập bình luận của bạn"  
        />  

      <button className='send' type='submit'>
        <div class="svg-wrapper-1">
          <div class="svg-wrapper">
            <svg
            className='send-icon'
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
              ></path>
            </svg>
          </div>
        </div>
        <span>Send</span>
      </button> 
      </form>  

      <ul className="comments-list">  
        {comments.map((comment, index) => (  
          <li key={index} className="comment">  
            <div className="comment-header">  
              <p className="comment-author">{comment.author}</p>  
              <p className="comment-timestamp">{comment.timestamp}</p>  
               {/* Nút xóa bình luận */}  
            </div>  
            <p className="comment-body">{comment.content}</p>  
            <div className='delete'>
            <button onClick={() => handleDelete(index)} className="noselect"><span class="text">Delete</span><span class="icon"><svg className='del-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
            </div>
          </li>  
        ))}  
      </ul>  
    </div>  
  );  
}  

export default CommentSection;