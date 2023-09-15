import { Box, Button, IconButton, Paper, Rating, Stack, Typography } from '@mui/material'
import { TurnedIn, AddRounded, KeyboardArrowRightRounded, KeyboardArrowLeftRounded } from '@mui/icons-material/';
import React from 'react'
import Image from 'next/image';

export const Feeds = () => {
  const feedLists = [
    { src: ["https://img.wongnai.com/p/100x100/2019/10/24/6a66c8a1d1574b0d8f2bb7b51f529d6d.jpg",
            "https://img.wongnai.com/p/100x100/2015/04/27/55c67012a33c4b8b8d3ffa525f529be7.jpg",
            "https://img.wongnai.com/p/100x100/2022/04/13/1ed5551cb91640998d3ba2c2c736f204.jpg",
            "https://img.wongnai.com/p/100x100/2019/08/25/a706723232fa4d33ae4d914d8cc3ddbb.jpg",
            "https://img.wongnai.com/p/100x100/2021/12/13/0aec6f70688f4905a842c9715a5c18ee.jpg"],
      alt:"food",
      headline:"ครัวห้วยทราย",
      rate:"4.3",
      review:"369",
      status:"เปิดอยู่",
      description:"#1 จาก 1,253 ร้านอาหารไทย ในจังหวัดเพชรบุรี"
    },
    { src: ["https://img.wongnai.com/p/100x100/2019/10/24/6a66c8a1d1574b0d8f2bb7b51f529d6d.jpg",
            "https://img.wongnai.com/p/100x100/2015/04/27/55c67012a33c4b8b8d3ffa525f529be7.jpg",
            "https://img.wongnai.com/p/100x100/2022/04/13/1ed5551cb91640998d3ba2c2c736f204.jpg",
            "https://img.wongnai.com/p/100x100/2019/08/25/a706723232fa4d33ae4d914d8cc3ddbb.jpg",
            "https://img.wongnai.com/p/100x100/2021/12/13/0aec6f70688f4905a842c9715a5c18ee.jpg"],
      alt:"food",
      headline:"ครัวห้วยทราย",
      rate:"4.3",
      review:"369",
      status:"เปิดอยู่",
      description:"#1 จาก 1,253 ร้านอาหารไทย ในจังหวัดเพชรบุรี"
    },
    { src: ["https://img.wongnai.com/p/100x100/2019/10/24/6a66c8a1d1574b0d8f2bb7b51f529d6d.jpg",
            "https://img.wongnai.com/p/100x100/2015/04/27/55c67012a33c4b8b8d3ffa525f529be7.jpg",
            "https://img.wongnai.com/p/100x100/2022/04/13/1ed5551cb91640998d3ba2c2c736f204.jpg",
            "https://img.wongnai.com/p/100x100/2019/08/25/a706723232fa4d33ae4d914d8cc3ddbb.jpg",
            "https://img.wongnai.com/p/100x100/2021/12/13/0aec6f70688f4905a842c9715a5c18ee.jpg"],
      alt:"food",
      headline:"ครัวห้วยทราย",
      rate:"4.3",
      review:"369",
      status:"เปิดอยู่",
      description:"#1 จาก 1,253 ร้านอาหารไทย ในจังหวัดเพชรบุรี"
    },
    { src: ["https://img.wongnai.com/p/100x100/2019/10/24/6a66c8a1d1574b0d8f2bb7b51f529d6d.jpg",
            "https://img.wongnai.com/p/100x100/2015/04/27/55c67012a33c4b8b8d3ffa525f529be7.jpg",
            "https://img.wongnai.com/p/100x100/2022/04/13/1ed5551cb91640998d3ba2c2c736f204.jpg",
            "https://img.wongnai.com/p/100x100/2019/08/25/a706723232fa4d33ae4d914d8cc3ddbb.jpg",
            "https://img.wongnai.com/p/100x100/2021/12/13/0aec6f70688f4905a842c9715a5c18ee.jpg"],
      alt:"food",
      headline:"ครัวห้วยทราย",
      rate:"4.3",
      review:"369",
      status:"เปิดอยู่",
      description:"#1 จาก 1,253 ร้านอาหารไทย ในจังหวัดเพชรบุรี"
    },
    { src: ["https://img.wongnai.com/p/100x100/2019/10/24/6a66c8a1d1574b0d8f2bb7b51f529d6d.jpg",
            "https://img.wongnai.com/p/100x100/2015/04/27/55c67012a33c4b8b8d3ffa525f529be7.jpg",
            "https://img.wongnai.com/p/100x100/2022/04/13/1ed5551cb91640998d3ba2c2c736f204.jpg",
            "https://img.wongnai.com/p/100x100/2019/08/25/a706723232fa4d33ae4d914d8cc3ddbb.jpg",
            "https://img.wongnai.com/p/100x100/2021/12/13/0aec6f70688f4905a842c9715a5c18ee.jpg"],
      alt:"food",
      headline:"ครัวห้วยทราย",
      rate:"4.3",
      review:"369",
      status:"เปิดอยู่",
      description:"#1 จาก 1,253 ร้านอาหารไทย ในจังหวัดเพชรบุรี"
    },
    { src: ["https://img.wongnai.com/p/100x100/2019/10/24/6a66c8a1d1574b0d8f2bb7b51f529d6d.jpg",
            "https://img.wongnai.com/p/100x100/2015/04/27/55c67012a33c4b8b8d3ffa525f529be7.jpg",
            "https://img.wongnai.com/p/100x100/2022/04/13/1ed5551cb91640998d3ba2c2c736f204.jpg",
            "https://img.wongnai.com/p/100x100/2019/08/25/a706723232fa4d33ae4d914d8cc3ddbb.jpg",
            "https://img.wongnai.com/p/100x100/2021/12/13/0aec6f70688f4905a842c9715a5c18ee.jpg"],
      alt:"food",
      headline:"ครัวห้วยทราย",
      rate:"4.3",
      review:"369",
      status:"เปิดอยู่",
      description:"#1 จาก 1,253 ร้านอาหารไทย ในจังหวัดเพชรบุรี"
    },
  ]

  const MdResponsive = () => {
    return(
      <Stack direction="column" spacing={2}>
        {feedLists.map((item,index) => (
              <Stack direction="column" key={index} flex={3} spacing={2} style={{backgroundColor: "#fff", padding: "17px", borderRadius: "8px"}}>
                <Stack direction="row" spacing={1}>
                  {item.src.map((img,i) => (
                    <Paper key={i}
                    elevation={3}
                    sx={{
                      backgroundImage: `url(${img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      width: 100,
                      height: 100
                    }}
                    >
                    </Paper>
                  ))}
                </Stack>
                <Stack direction="row">
                  <Stack direction="column" flex={10}>
                    <Typography variant='h5' gutterBottom style={{marginTop: 6}}>
                      {item.headline}
                    </Typography>
                    <Stack direction="row" style={{alignItems: "center"}}>
                      <Paper elevation={3} style={{padding: "2px 6px", display: "flex", alignItems: "center", flexDirection: "row", color:"#fff", backgroundColor: "rgb(205, 18, 1)", borderRadius: 12}}>
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
                    <Typography variant='body1'>
                        {item.description}
                      </Typography>
                  </Stack>
                  <Box flex={1}>
                    <IconButton>
                      <TurnedIn/>
                    </IconButton>
                  </Box>
                </Stack>
              </Stack>
          ))}
      </Stack>
    );
  }

  const XsResponsive = () => {
    return(
      <Stack direction="column" spacing={2}>
        {feedLists.map((item, index) => (
          <Stack direction="column" key={index} flex={3} spacing={2} style={{backgroundColor: "#fff", padding: "17px", borderRadius: "8px"}}>
            <Stack direction="row" spacing={2} style={{alignItems: "center", justifyContent: "center"}}>
              {item.src.map((img, i) => (
                <Paper key={i}
                elevation={3}
                sx={{
                  backgroundImage: `url(${img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: 175,
                  height: 175,
                }}
                >
                </Paper>
              ))}
            </Stack>
            <Stack direction="row">
                  <Stack direction="column" flex={15}>
                    <Typography variant='h5' gutterBottom style={{marginTop: 6}}>
                      {item.headline}
                    </Typography>
                    <Stack direction="row" style={{alignItems: "center"}}>
                      <Paper elevation={3} style={{padding: "2px 6px", display: "flex", alignItems: "center", flexDirection: "row", color:"#fff", backgroundColor: "rgb(205, 18, 1)", borderRadius: 12}}>
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
                    <Typography variant='body1'>
                        {item.description}
                      </Typography>
                  </Stack>
                  <Box flex={1}>
                    <IconButton>
                      <TurnedIn/>
                    </IconButton>
                  </Box>
                </Stack>
          </Stack>
        ))}
      </Stack>
    );
  }

  const AddFeed = () => {
    return(
      <Button variant='contained' color="primary" sx={{height: 65}}>
        <Image src="https://static2.wongnai.com/static2/images/3u1I38Z.png" alt='add' width={50} height={50}/>
        <Typography variant='h6'>หาสถานที่ที่ต้องการไม่เจอหรอครับ<br/>เพิ่มสถานที่ใหม่ใน Wongnai</Typography>
      </Button>
    );
  }

  const NextOrBack = () => {
    return(
      <Stack direction="row" style={{justifyContent: "space-between"}}>
        <Box>
          <Button variant='text' startIcon={<KeyboardArrowLeftRounded/>}>ย้อนกลับ</Button>
        </Box>
        <Box>
          <Button variant='text' endIcon={<KeyboardArrowRightRounded/>}>ถัดไป</Button>
        </Box>
      </Stack>
    );
  }

  return (
    <Box flex={2}>
      <Stack direction="column" spacing={2} sx={{display: {xs: "none", md: "flex"}}}>
          <MdResponsive/>
          <NextOrBack/>
          <AddFeed/>
      </Stack>
      <Stack direction="column" spacing={2} sx={{display: {xs: "flex", md: "none"}}}>
          <XsResponsive/>
          <NextOrBack/>
          <AddFeed/>
      </Stack>
    </Box>
  )
}
