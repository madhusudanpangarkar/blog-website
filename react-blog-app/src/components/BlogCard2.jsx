import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';


export default function BlogCard2({title, description, image, username, time}) {

  return (
    <Card sx={{ width: '60%', margin:'auto', mt:2, padding:2, boxShadow:'5px 5px 10px #ccc',":hover:":{
        boxShadow: '10px 10px 20px #ccc'
    }, }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {username}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={username}
        subheader={time}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant='h6' color='text.secondary'>
          Title: {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Description:{description}
        </Typography>
      </CardContent>
    </Card>
  );
}