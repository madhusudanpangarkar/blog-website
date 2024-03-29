import React, { useState } from "react";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {

    const id = localStorage.getItem('userId');
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    image: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const {data} = await axios.post('http://localhost:3001/api/v1/blog/create-blog', {
            title:inputs.title,
            description:inputs.description,
            image:inputs.image,
            user: id,     
        })
        if(data?.success){
            alert("Blog Created Successfully");
            navigate("/blogs");
        }
    } catch (error) {
        console.log(error);
    }
  };
  return (
    <div>
      {/* <div className='py-40 bg-black text-center text-white'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Create Your Blog</h2>
        <p>Explore your thoughts here...</p>
        </div> */}
      <form onSubmit={handleSubmit}>
        <Box
          width={"50%"}
          border={3}
          borderRadius={10}
          padding={3}
          margin="auto"
          boxShadow={"10px 10px 20px #ccc"}
          display="flex"
          flexDirection={"column"}
          marginTop="30px"
        >
          <Typography
            variant="h2"
            textAlign={"center"}
            fontWeight={"bold"}
            padding={3}
            color={"gray"}
          >
            Create a Post
          </Typography>
          <InputLabel
            sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            Title
          </InputLabel>
          <TextField
            name="title"
            value={inputs.title}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <InputLabel
            sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            Description
          </InputLabel>
          <TextField
            name="description"
            value={inputs.description}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <InputLabel
            sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            Image
          </InputLabel>
          <TextField
            name="image"
            value={inputs.image}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <Button type="submit" color="primary" variant="contained">SUBMIT</Button>
        </Box>
      </form>
    </div>
  );
};

export default CreateBlog;
