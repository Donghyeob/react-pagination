import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Posts from './components/posts';
import Pagination from './components/pagination';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPage, setPostsPage] = useState(10); // page당 post 출력 수

  useEffect(() => {
    const fetchPosts = async() => {
      setLoading(true);
      const res = await axios.get('http://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPage;
  const indexOfFirstPost = indexOfLastPost - postsPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <Posts posts={currentPosts} loading={loading} />
      <Pagination postsPage={postsPage} totalPosts={posts} paginate={paginate} />
    </div>
  );
}

export default App;
