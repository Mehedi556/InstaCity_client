import { reload } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider';

const InputTextField = () => {
  const { user } = useContext(AuthContext);
  const [text, setText] = useState('');
  const [pic, setPic] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  // console.log(imageHostKey);

  const handleData = data => {
    setText(data.text);
    const image = data.image[0];
    // console.log(data.image[0]);
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(imgData => {
        console.log(imgData.data.url);
        setPic(imgData.data.url);
        setData(
          imgData.data.url,
          data.text,
          user?.displayName,
          user?.email,
          '',
          ''
        );
        console.log(
          imgData.data.url,
          data.text,
          user?.displayName,
          user?.email
        );
      });
    reset();
  };

  const setData = (pic, text, displayName, email, comment, review) => {
    const data = {
      pic,
      text,
      displayName,
      email,
      comment,
      review,
    };
    console.log(data);

    fetch('https://insta-server-murex.vercel.app/postDetails', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        toast.success('Post added successfully.');
        reload();
      });
  };

  return (
    <div className="my-10 rounded-md border p-4 mx-auto w-11/12 md:w-6/12">
      <form onSubmit={handleSubmit(handleData)}>
        <div className="form-control">
          <textarea
            {...register('text')}
            className="textarea textarea-bordered w-full"
            placeholder="Whats on your mind?"
          ></textarea>
        </div>
        <div className="form-control">
          <input
            {...register('image')}
            type="file"
            className="file-input file-input-bordered w-full"
          />
        </div>
        <div className="form-control mt-4">
          <button className="btn">Post</button>
        </div>
      </form>
    </div>
  );
};

export default InputTextField;
