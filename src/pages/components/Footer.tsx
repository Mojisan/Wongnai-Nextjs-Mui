import { Box, Container, IconButton, Stack, Typography } from '@mui/material'
import Image from 'next/image';
import React from 'react'
import { Facebook, Twitter, Instagram, YouTube, AddRounded  } from '@mui/icons-material/';

export const Footer = () => {
  const DownloadImg = [
    "https://static2.wongnai.com/static2/images/1uk3nHK.svg",
    "https://static2.wongnai.com/static2/images/2m3YYjh.svg",
    "https://static2.wongnai.com/static2/images/1lZwegR.svg"
  ]

  const List = [
    "เกี่ยวกับ Wongnai Community",
    "ระดับของผู้ใช้ Wongnai",
    "เกี่ยวกับ Wongnai Elite",
    "ตารางอันดับของผู้ใช้งาน",
    "แนวทางปฏิบัติของผู้ใช้งาน"
  ]

  const OtherList = () => {
    return(
      <Box sx={{width: "200px", overflowWrap: "break-word"}}>
        <Typography variant='body1' style={{fontWeight: 600}}>
          สำหรับผู้ใช้ Wongnai
        </Typography>
        <Stack direction="column" spacing={1}>
        {List.map((item, index) => (
          <span key={index}>
            {item}
          </span>
        ))}
        </Stack>
      </Box>
    );
  }

  const Logo = () => {
    return(
      <Box>
        <Image 
        alt="logo" 
        src="/wongnai.webp"
        width={118}
        height={48}
        />
      </Box>
    );
  }

  const FollowAndDownload = () => {
    return(
      <Stack direction="row" spacing={3}>
        <Stack direction="column">
          <Typography variant='body1' style={{fontWeight: 600}}>
            Download Wongnai App Free
          </Typography>
          <Stack direction="row" spacing={1}>
            {DownloadImg.map((item, index) => (
              <Image key={index} src={item} alt='download' width={132} height={40}/>
            ))}
          </Stack>
        </Stack>
        <Box>
          <Typography variant='body1' style={{fontWeight: 600}}>
            Follow Us
          </Typography>
          <Stack direction="row" spacing={1}>
            <Facebook fontSize='large'/>
            <Twitter fontSize='large'/>
            <Instagram fontSize='large'/>
            <YouTube fontSize='large'/>
          </Stack>
        </Box>
      </Stack>
    );
  }

  const Other = () => {
    return(
      <Stack direction="row">
        <OtherList/>
        <OtherList/>
        <OtherList/>
        <OtherList/>
        <OtherList/>
      </Stack>
    );
  }

  const EndPage = () => {
    return(
      <Stack direction="row" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <Stack direction="row">
          <Typography variant='h6' style={{color: "#8c9396"}}>
            Copyright 2010-2023 Wongnai Media Co., Ltd. All right reserved.
          </Typography>
          <Typography variant='h6' style={{color: "#3d4245"}}>
          Terms & Conditions | Privacy Policy
          </Typography>
        </Stack>
        <Box>
          <Typography variant='h6'>TH | EN</Typography>
        </Box>
      </Stack>
    );
  }

  return (
    <Box style={{backgroundColor: "#f4f6f7"}}>
      <Container>
        <Stack direction="column" spacing={2} style={{padding: "64px"}} sx={{display: {xs: "none", md: "flex"}}}>
          <Logo/>
          <FollowAndDownload/>
          <Other/>
          <div style={{width: "100%", height: "1px", backgroundColor:"#3d4245"}}></div>
          <EndPage/>
        </Stack>
        <Stack direction="column" spacing={2} style={{padding: "64px"}} sx={{display: {xs: "flex", md: "none"}}}>
          <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Logo/>
            <IconButton><AddRounded fontSize='large'/></IconButton>
          </Box>
          <div style={{width: "100%", height: "1px", backgroundColor:"#3d4245"}}></div>
          <EndPage/>
        </Stack>
      </Container>
    </Box>
  )
}
