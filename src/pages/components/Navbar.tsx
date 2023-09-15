import React from 'react'
import { AppBar, Toolbar, Box, Input, Button, Stack, IconButton, Breadcrumbs, Link, Typography } from '@mui/material';
import { ArrowDropDownRounded, FmdGood, Search, AccountCircleOutlined, KeyboardArrowDownRounded } from '@mui/icons-material';
import Image from 'next/image'

export default function Navbar() {
  return (
    <div>
        <AppBar elevation={0} position='static' color='default' sx={{alignItems: {xs: "normal", md: "center"}}}>
            <Toolbar disableGutters>
                <Box sx={{display: {xs: "none", md: "flex"}}}>
                    <Image 
                    alt="logo" 
                    src="/wongnai.webp"
                    width={118}
                    height={48}
                    />
                </Box>
                <Stack direction="row" spacing={1} style={{fontSize: 16, color: "#3d4245", marginLeft: "5%" }} sx={{display: { xs: "none", md: "flex"}}}>
                    <Box style={{
                        height: 36,
                        display:"flex",
                        backgroundColor: "#e9ecee",
                        borderRadius: 8,
                        justifyContent: "center",
                        alignItems: "center",
                        paddingLeft: 16
                    }} flex={1}>
                        <FmdGood/>
                        <Input className='.MuiInput-inputTypeSearch' placeholder='พิมพ์สถานที่..' disableUnderline style={{marginLeft: 8}} />
                        <ArrowDropDownRounded/>
                    </Box>
                    <Box style={{
                        height: 36,
                        display:"flex",
                        backgroundColor: "#e9ecee",
                        borderRadius: 8,
                        color: "#3d4245",
                        justifyContent: "space-between"
                    }} flex={2}>
                        <Input className='.MuiInput-inputTypeSearch' placeholder='ร้านอาหาร โรงแรม ที่เที่ยว ร้านเสริมสวย' disableUnderline style={{marginLeft: 16}} />
                        <Button variant='contained' style={{borderRadius: "0px 8px 8px 0px"}}><Search/></Button>
                    </Box>
                    <Button variant='outlined' color="inherit" startIcon={<AccountCircleOutlined/>} style={{fontSize: 16, borderRadius: 20, marginLeft: "10%"}}>
                        Log in
                    </Button>
                </Stack>
                <Stack direction="row" spacing={1} style={{marginLeft: "5%", marginRight: "5%", width: "100%", justifyContent: "space-between"}} sx={{display: {xs: "flex", md: "none"}}}>
                    <Box>
                        <Image 
                        alt="logo" 
                        src="/wongnai.webp"
                        width={75}
                        height={30}
                        />
                    </Box>
                    <Stack direction="row" spacing={1}>
                    <IconButton aria-label="search" color="inherit">
                        <Search/>
                    </IconButton>
                    <IconButton aria-label="dropdown" color="inherit">
                        <KeyboardArrowDownRounded/>
                    </IconButton>
                    </Stack>
                </Stack>
            </Toolbar>
            <div style={{width: "100vw", height: "1px", backgroundColor:"#e9ecee"}}></div>
            <Stack direction="column" style={{padding: "16px 0px 16px 5%", backgroundColor: "default", height: 104}} sx={{display: {xs: "none", md: "flex"}}}>
            <Breadcrumbs>
                <Link underline="hover" color="inherit" href="/">
                    หน้าแรก
                </Link>
                <Link underline="hover" color="inherit" href="/">
                    ร้านอาหาร
                </Link>
                <Typography color="text.primary" fontFamily="Kanit">ค้นหาร้านอาหาร</Typography>
            </Breadcrumbs>
            <h1>ร้านอาหาร ยอดนิยม</h1>
            </Stack>
            <Stack direction="column" style={{padding: "16px 0px 16px 5%", backgroundColor: "default", height: 80}} sx={{display: {xs: "flex", md: "none"}}}>
            <Breadcrumbs>
                <Link underline="hover" color="inherit" href="/">
                    หน้าแรก
                </Link>
                <Link underline="hover" color="inherit" href="/">
                    ร้านอาหาร
                </Link>
                <Typography color="text.primary" fontFamily="Kanit">ค้นหาร้านอาหาร</Typography>
            </Breadcrumbs>
            <h3>ร้านอาหาร ยอดนิยม</h3>
            </Stack>
        </AppBar>
    </div>
  )
}