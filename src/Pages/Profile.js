import React, { useEffect } from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom'
import { TalkState } from '../Context/ChatProvider';
import { Box, Button, Typography } from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

const Profile = () => {

  const navigate=useNavigate();

  useEffect(()=>{
    const userInfo=JSON.parse(localStorage.getItem("userInfo"));
    if(userInfo){
        navigate('/profile');
    }
  },[navigate]);

  const {user} =TalkState();

  const handleGoBack=()=>{
    navigate('/chats');
  }

  return (
    <Box sx={{width:'100%',display:'flex',justifyContent:'center'}}>
      <Button variant='contained' sx={{position:'absolute',left:'40px',top:'20px',backgroundColor:'#4F709C'}} onClick={handleGoBack}>
        <ArrowBackRoundedIcon sx={{fontSize:'30px'}}/>
        Go Back
      </Button>
     <Box className='profile_container' sx={{width:'50%',height:'70vh',display:'flex',flexDirection:'column',alignItems:'center',marginTop:'5%'}}>
      <img alt='#' src={user?.pic} style={{width:'60%',marginTop:'5%',borderRadius:'10px'}}/>
      <Typography marginTop={5} fontSize={30} sx={{alignSelf:'flex-start',marginLeft:'20%'}}><span className='profile_title'>Name: </span><span className='profile_title_value'>{user?.name}</span></Typography>
      <Typography marginTop={5} fontSize={30} sx={{alignSelf:'flex-start',marginLeft:'20%'}}><span className='profile_title'>Email: </span><span className='profile_title_value'>{user?.email}</span></Typography>
     </Box>
    </Box>
  )
}

export default Profile
