import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../Loader/Loader';

const Media = () => {
  const { data: postData = [], isLoading } = useQuery({
    queryKey: ['Posts'],
    queryFn: () =>
      fetch('https://insta-server-murex.vercel.app/postDetails').then(res =>
        res.json()
      ),
  });
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
              <p>
                {post.text.length > 100 ? post?.text.slice(0, 100) : post.text}
                ...
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Details</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Media;
