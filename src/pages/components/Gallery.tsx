import { Box, Button, IconButton, Paper, Stack, Typography } from '@mui/material';
import { ArrowBackIosNewRounded, ArrowForwardIosRounded } from '@mui/icons-material/';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Gallery = () => {
  const imageLists = [
    {src: "https://img.wongnai.com/p/400x0/2023/07/25/f18cda24522a4e719fba1761d06da9c6.jpg", alt: "ตามหาเมนูคู่ฟิน กินทั่วไทย"},
    {src: "https://img.wongnai.com/p/400x0/2020/08/19/3e56c86bb3784e5b972b0e61c858f26d.jpg", alt: "ร้านใหม่ และ แนะนำ"},
    {src: "https://img.wongnai.com/p/400x0/2020/09/03/0d52403c52314df682dd97e4f9f99731.jpg", alt: "ถูกและดี"},
    {src: "https://img.wongnai.com/p/400x0/2023/04/24/b3fccfead52f458d8a9e4967eb4fb117.jpg", alt: "ไลฟ์สไตล์ยามค่ำคืน"},
    {src: "https://img.wongnai.com/p/400x0/2020/08/19/4e54ced200ca4717a6466d9abe15d718.jpg", alt: "มื้อเช้าเริ่มวันใหม่"},
    {src: "https://img.wongnai.com/p/400x0/2020/11/11/fd3a3be797144bfd8bc465b70df44bc0.jpg", alt: "ร้านยอดฮิต ประจำจังหวัด"},
    {src: "https://img.wongnai.com/p/400x0/2020/11/11/fd3a3be797144bfd8bc465b70df44bc0.jpg", alt: "ร้านยอดฮิต ประจำจังหวัด"},
    {src: "https://img.wongnai.com/p/400x0/2020/11/11/fd3a3be797144bfd8bc465b70df44bc0.jpg", alt: "ร้านยอดฮิต ประจำจังหวัด"},
    {src: "https://img.wongnai.com/p/400x0/2020/11/11/fd3a3be797144bfd8bc465b70df44bc0.jpg", alt: "ร้านยอดฮิต ประจำจังหวัด"},
  ]

  const CarouselImage = () => {
    return(
      <Stack direction="row" spacing={1}>
        {imageLists.map((item, index) => (
          <Stack key={index}>
              <Paper sx={{
                background: `linear-gradient(rgba(0,0,0,0.75)0%, rgba(0,0,0,0)50%), url(${item.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: {xs: 150, md: 135},
                height: {xs: 100, md: 80},
                display: 'flex',
                }}
                >
                <Typography variant='caption' component='p' style={{color: "white", padding: 8}}>
                  {item.alt}
                </Typography>
                </Paper>
          </Stack>
        ))}
      </Stack>
    );
  }
  
  return (
    <Box sx={{backgroundColor: "#fff", padding: "17px", borderRadius: "8px", width: {xs: "1134px", md: "884px"}}}>
      <Stack direction="row" style={{maxWidth: "100%", overflowX: "auto"}}>
        <CarouselImage/>
      </Stack>
    </Box>
  )
}
