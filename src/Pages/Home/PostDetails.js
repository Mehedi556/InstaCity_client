import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import Loader from '../Loader/Loader';

const PostDetails = () => {
  const post = useLoaderData();

  const {data: commentData = [] , isLoading , refetch } = useQuery({
    queryKey: ['comments'],
    queryFn: () => fetch(`http://localhost:5000/comments/${post._id}`)
    .then(res => res.json())
})
    console.log(commentData);


  const {user} = useContext(AuthContext);
  const { register, handleSubmit, reset,  formState: { errors } } = useForm();
    // console.log(post);

    const handlePost = (data) => {
      // console.log(data);
      setData(data.comment, post._id , user.displayName)
      reset()
    }

    const setData = (comment , postId , userName) => {
        // console.log(comment , postId , userName);
        const commentData = {
          comment,
          postId,
          userName
        }
        // console.log(commentData);

    

        
        fetch('http://localhost:5000/comments', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(commentData),
        })
          .then(res => res.json())
          .then(data => {
            // console.log(data);
            if (data.acknowledged) {
              toast.success('Comment submitted successfully');
              refetch()
            }
          })
          .catch(error => console.error(error));

    }

    if(isLoading){
      return <Loader></Loader>
    }
    
    return (
        <div className=''>
            <div className="card w-12/12 md:w-9/12 bg-base-100 shadow-xl mx-auto rounded-none border p-4 rounded-lg">
  <figure><img src={post.pic} alt="Shoes" /></figure>
  <div className="card-body">
    <p>{post.text}</p>
  </div>
  <div className="card-body">
    <p className='font-bold'>Post created by: <span className='text-xl'>{post.displayName}</span></p>
    <p className='font-bold'>Creators email: <span className='text-xl'>{post.email}</span></p>
  </div>
  <form onSubmit={handleSubmit(handlePost)} className='w-11/12 mx-auto'>
    <div className='form-control'>
      <input  {...register('comment')} placeholder="Write your comment" type="textarea" name="comment" id="" className='input input-sm input-bordered w-11/12 mx-auto'/>
    </div>
  
  <div className='form-control'>
    <button className='btn btn-sm w-11/12 mx-auto mt-3'>Post</button>
  </div>
  </form>

 {
  commentData &&
  <div>
  <h1 className='mt-10 font-bold text-xl p-2'>Comments {commentData.length}</h1>
     {
      commentData?.map(comment => 
      <div className=' border mb-5 p-3 rounded-2xl bg-slate-200'>
        <p className='font-bold texl-2xl'>{comment?.userName}</p>
        <p>{comment?.comment}</p>
      </div>)
    }
</div>
 } 



  
   
    
  
</div>
        </div>
    );
};

export default PostDetails;