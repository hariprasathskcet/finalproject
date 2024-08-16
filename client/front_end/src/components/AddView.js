import React, { useState } from 'react';
import axios from 'axios';
import './AddView.css';
import { useNavigate } from 'react-router-dom';

function AddView() {
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3005/view', { topic, description, imageUrl });
      alert('View added successfully');
      navigate("/lastPage");
    } catch (err) {
      console.error(err);
      alert('Error adding view');
    }
  };

  return (
    <div id='back3'>
      <div id='move'>
        <div id='pad'>
          <div id='size1'>
            <h1>Add Your Suggestion Here</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div id='size'>
              <label>Topic: </label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                required
              />
            </div>
            <br />
            <div id='size'>
              <label>Suggestion: </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
            <br />
            <div id='size'>
              <label>Image URL: </label>
              <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Enter image URL"
                required
              />
            </div>
            <br/>
            <button id='button' type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddView;
