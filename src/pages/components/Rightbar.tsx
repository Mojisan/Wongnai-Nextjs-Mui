import { Box, Button, Paper, Rating, Stack, Typography } from '@mui/material'
import { PlaceRounded } from '@mui/icons-material/';
import React from 'react'

export const Rightbar = () => {
  const InterestList = [
    {
      img: "https://img.wongnai.com/p/64x64/2021/04/30/6aa07577e28240bcb5d3aca8e73510f1.jpg",
      name: "โกดังนัวส์",
      place: "พระราม 2",
      rate: "5.0",
      review: "4",
      status: "เปิดอยู่"
    },
    {
      img: "https://img.wongnai.com/p/64x64/2021/04/30/6aa07577e28240bcb5d3aca8e73510f1.jpg",
      name: "โกดังนัวส์",
      place: "พระราม 2",
      rate: "5.0",
      review: "4",
      status: "เปิดอยู่"
    }
  ]

  const SuggestList = [
    {
      img: "https://img.wongnai.com/p/624x0/2023/08/15/8130926eb4dd41fb9e92be2df42a25fe.jpg", 
      description: "Ad ·มือคั้น มือปรุง มือโขลก ผู้ช่วยมือโปรประจำครัวไทย ซอสสูตรใหม่ จากคนอร์"
    },
    {
      img: "https://img.wongnai.com/p/624x0/2023/08/15/8130926eb4dd41fb9e92be2df42a25fe.jpg", 
      description: "Ad ·มือคั้น มือปรุง มือโขลก ผู้ช่วยมือโปรประจำครัวไทย ซอสสูตรใหม่ จากคนอร์"
    },
    {
      img: "https://img.wongnai.com/p/624x0/2023/08/15/8130926eb4dd41fb9e92be2df42a25fe.jpg", 
      description: "Ad ·มือคั้น มือปรุง มือโขลก ผู้ช่วยมือโปรประจำครัวไทย ซอสสูตรใหม่ จากคนอร์"
    },
  ]

  const MixList = [
    {
      img: "https://img.wongnai.com/p/624x0/2018/02/28/6dc105b032a64cc1b7471ffe749a3aa4.jpg",
      description: "ซดสนั่น 10 ร้านชาบูหม่าล่าสุดฮอต เดือดหม้อสะท้าน!"
    },
    {
      img: "https://img.wongnai.com/p/624x0/2018/02/28/6dc105b032a64cc1b7471ffe749a3aa4.jpg",
      description: "ซดสนั่น 10 ร้านชาบูหม่าล่าสุดฮอต เดือดหม้อสะท้าน!"
    },
    {
      img: "https://img.wongnai.com/p/624x0/2018/02/28/6dc105b032a64cc1b7471ffe749a3aa4.jpg",
      description: "ซดสนั่น 10 ร้านชาบูหม่าล่าสุดฮอต เดือดหม้อสะท้าน!"
    },
  ]

  const LookAtMap = () => {
    return(
      <Box sx={{backgroundColor: "#fff", padding: "17px", borderRadius: "8px",}}>
          <Typography variant='h6' style={{fontWeight: 600}}>ค้นหาจากแผนที่</Typography>
          <Paper style={{
            backgroundImage: "url(https://static2.wongnai.com/static2/images/3dwN7In.png)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "16px"
          }}
          sx={{
            width: {xs: "1000px", md: "268px"},
            height: {xs: "500px", md: "140px"}
          }}
          >
            <Button variant='contained' startIcon={<PlaceRounded/>} style={{fontSize: "16px"}}>ดูแผนที่</Button>
          </Paper>
        </Box>
    );
  }

  const InterestStore = () => {
    return(
      <Stack direction="column" sx={{backgroundColor: "#fff", padding: "17px", borderRadius: "8px",}}>
        <Typography variant='h6' style={{fontWeight: 600}}>ร้านอาหารที่น่าสนใจ</Typography>
        <Stack direction="column" spacing={2}>
        {InterestList.map((item,index) => (
          <Stack direction="row" spacing={2} key={index}>
            <Paper style={{
              backgroundImage: `url(${item.img})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              width: "64px",
              height: "64px",
              borderRadius: "8px"
            }}
            >
            </Paper>
            <Box>
              <Typography variant='h6'>Ad. {item.name}</Typography>
              <Stack direction="row" spacing={1} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Paper elevation={3} style={{padding: "2px 6px", display: "flex", alignItems: "center", flexDirection: "row", color:"#fff", backgroundColor: "rgb(205, 18, 1)", borderRadius: 12,}}>
                  <Typography variant='body1' style={{ marginRight: 2 }}>
                    {item.rate}
                  </Typography>
                  <Rating readOnly defaultValue={1} max={1} style={{color:"#fff", fontSize: 20}}/>
                </Paper>
                <Typography variant='body1' style={{marginLeft: 6}}>
                  {item.review} รีวิว
                </Typography>
                <Typography variant='h6' style={{marginLeft: 6, color: "green"}}>
                  {item.status}
                </Typography>
              </Stack>
            </Box>
          </Stack>
        ))}
        </Stack>
      </Stack>
    );
  }

  const ArticleSuggest = () => {
    return(
      <Stack direction="column" spacing={2} sx={{backgroundColor: "#fff", padding: "17px", borderRadius: "8px",}}>
        <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <Typography variant='h6' sx={{fontWeight: 600, fontSize: {md: "16px"}}}>บทความแนะนำ</Typography>
          <Button variant='text' style={{fontWeight: 600}}>ดูทั้งหมด</Button>
        </Box>
        <Stack direction="column" spacing={2}>
          {SuggestList.map((item,index) => (
            <Box key={index}>
              <Paper style={{
                backgroundImage: `url(${item.img})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              sx={{
                width: {xs: "1100px", md: "266px"},
                height: {xs: "550px", md: "133px"}
              }}
              >
              </Paper>
              <Typography variant='subtitle1' style={{marginTop: "16px"}}>
                {item.description}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Stack>
    );
  }

  const ListSuggest = () => {
    return(
      <Box>
        <Stack direction="column" spacing={2} sx={{backgroundColor: "#fff", padding: "17px", borderRadius: "8px", display: {xs: "none", md: "flex"}}}>
          <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Typography variant='h6' sx={{fontWeight: 600, fontSize: {md: "16px"}}}>รวมลิสต์ที่คุณต้องลอง</Typography>
            <Button variant='text' style={{fontWeight: 600}}>ดูทั้งหมด</Button>
          </Box>
          <Stack direction="column" spacing={2}>
            {MixList.map((item,index) => (
              <Box key={index}>
                <Paper style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  width: "266px",
                  height: "133px"
                }}
                >
                </Paper>
                <Typography variant='subtitle1' style={{marginTop: "16px"}}>
                  {item.description}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Stack>
        <Stack direction="column" sx={{display: {xs: "flex", md: "none"}}}>
          <Typography variant='h6' sx={{fontWeight: 600, fontSize: {md: "16px"}}}>รวมลิสต์ที่คุณต้องลอง</Typography>
          <Stack direction="row" spacing={2} sx={{marginTop: "16px"}}>
              {MixList.map((item, index) => (
                <Stack key={index} direction="column" spacing={1} style={{overflowWrap: "break-word", overflow: "hidden"}}>
                  <Paper style={{
                    backgroundImage: `url(${item.img})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    width: "266px",
                    height: "133px"
                  }}
                  >
                  </Paper>
                  <span style={{overflowWrap: "break-word", width: "266px"}}>{item.description}</span>
                </Stack>
              ))}
            </Stack>
          </Stack>
      </Box>
    );
  }

  return (
    <Box flex={1}>
      <Stack direction="column" spacing={2}>
        <LookAtMap/>
        <InterestStore/>
        <ArticleSuggest/>
        <ListSuggest/>
      </Stack>
    </Box>
  )
}
