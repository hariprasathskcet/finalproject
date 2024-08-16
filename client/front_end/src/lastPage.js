import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Lastpage.css'
// import './AddView.css'; // Uncomment if you have styling

function LastPage() {
  const [views, setViews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchViews = async () => {
      try {
        const response = await axios.get('http://localhost:3005/fetch');
        setViews(response.data); // Set state with fetched data
      } catch (err) {
        setError(err.message); // Set error state if there's an issue
      } finally {
        setLoading(false); // Set loading to false once done
      }
    };

    fetchViews(); // Call the fetch function
  }, []);

  // Function to handle search input changes
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to perform search
  const performSearch = async () => {
    try {
      const response = await axios.get('http://localhost:3005/search', {
        params: { topic: searchTerm },
      });
      setViews(response.data); // Update views with the filtered data
    } catch (err) {
      setError(err.message); // Set error state if there's an issue
    }
  };

  // Filter views based on the search term
  const filteredViews = views.filter(view =>
    view.topic && typeof view.topic === 'string' &&
    view.topic.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div>Loading...</div>; // Show loading message
  if (error) return <div>Error: {error}</div>; // Show error message

  return (
    <div className="last-page">
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search by topic..."
        />
        <button onClick={performSearch}>Search</button>
      </div>

      <div id='search'>
      {filteredViews.length > 0 ? (
        <div className="submitted-view">
          <h3>Submitted Views</h3>
          {filteredViews.map((view) => (
            <div key={view._id} className="view-item">
              <p><strong>Topic:</strong> {view.topic}</p>
              <p><strong>Description:</strong> {view.description}</p>
              <img style={{width:"200px",height:"80px"}} src={view.imageUrl}></img>
              <br>
              </br>
            </div>
          ))}
        </div>
      ) : (
        <div>No data available</div>
      )}
    </div>
    </div>
  );
}

export default LastPage;
