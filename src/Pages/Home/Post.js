import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';

const Post = () => {
  const { data: postData = [], isLoading } = useQuery({
    queryKey: ['Posts'],
    queryFn: () =>
      fetch('https://insta-server-murex.vercel.app/postDetails').then(res =>
        res.json()
      ),
  });
  console.log(postData);

  if (isLoading) {
    <Loader></Loader>;
  }

  return (
    <div>
      {postData?.map(post => (
        <div className="mx-auto w-11/12 md:w-6/12 border p-4 mb-5 rounded-md">
          <div className="w-full card bg-base-100 shadow-xl rounded-none ">
            <figure>
              <img src={post?.pic} alt="Shoes" />
            </figure>
            <div className="card-body">
              <p>{post?.text.slice(0, 100)}...</p>
              <div className="card-actions justify-end">
                <Link to={`/postDetails/${post._id}`}>
                  <button className="btn btn-primary">Details</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
