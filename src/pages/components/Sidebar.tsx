import { Box, Button, FormControl, FormControlLabel, FormGroup, FormLabel, MenuItem, Radio, RadioGroup, Select, Stack, TextField, Checkbox } from '@mui/material'
import { KeyboardArrowDownRounded, AccessTimeFilledRounded, ConfirmationNumber, StarBorderRounded, DeliveryDiningRounded, DiscountRounded, MoreVertRounded } from '@mui/icons-material/';
import React, { useState } from 'react'

export const Sidebar = () => {

  const Line = () => {
    return(
      <div style={{width: "100%", height: "1px", backgroundColor:"#e9ecee"}}></div>
    );
  }

  const PlaceFilter = () => {
    const labels = ["ร้านอาหาร", "ร้านเสริมสวย และ สปา", "ที่พัก", "สถานที่ท่องเที่ยว"]

    return(
      <FormControl>
        <RadioGroup defaultValue="ร้านอาหาร">
          {labels.map((item, index) => (
            <FormControlLabel key={index} value={item} control={<Radio/>} label={item}></FormControlLabel>
          ))}
        </RadioGroup>
      </FormControl>
    );
  }

  const RatingFilter = () => {
    const labels = ["3.5 +", "4.0 +"]

    return(
      <FormControl>
        <FormLabel style={{fontWeight: 600, color: "#282d2e"}}>เรตติ้ง</FormLabel>
        <RadioGroup>
          {labels.map((item,index) => (
            <FormControlLabel value={index} control={<Radio/>} label={item} key={index}></FormControlLabel>
          ))}
        </RadioGroup>
      </FormControl>
    );
  }

  const DistanceFilter = () => {
    const labels = ["500 ม.", "1 กม.", "3 กม.", "5 กม.", "10 กม.", "25 กม.", "50 กม."]

    return(
      <FormControl>
        <FormLabel style={{fontWeight: 600, color: "#282d2e", marginBottom: 8}}>ค้นหาตามระยะห่างจาก</FormLabel>
        <TextField 
        variant='outlined' 
        inputProps={{ 'aria-label' : 'Without label'}}
        placeholder='เช่น วัดพระแก้ว'
        ></TextField>
        <Select
        defaultValue={1}
        inputProps={{ 'aria-label': 'Without label' }}
        style={{border: "1px solid #e9ecee", borderRadius: 4, marginTop: 8}}
        >
          {labels.map((item, index) => (
            <MenuItem key={index} value={index}><em>{item}</em></MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }

  const TypeFilter = () => {
    const labels = ["อาหารตามสั่ง", "อาหารจานเดียว", "ก๋วยเตี๋ยว", "ของหวาน", "เครื่องดื่ม/น้ำผลไม้", "เบเกอรี/เค้ก"]

    return(
      <FormControl>
        <FormLabel style={{fontWeight: 600, color: "#282d2e", marginBottom: 8}}>ประเภทอาหาร</FormLabel>
        <FormGroup>
          {labels.map((item,index) => (
            <FormControlLabel
             value={index}
             control={<Checkbox/>} 
             label={item} 
             key={index}></FormControlLabel>
          ))}
        </FormGroup>
        <Button variant='text'>ดูเพิ่มเติม (18 ประเภท)</Button>
      </FormControl>
    );
  }

  const PromoFilter = () => {
    const labels = ["Wongnai", "ลูกค้าเซเรเนด", "UOB", "GSB", "ลูกค้าเอไอเอส", "Shell ClubSmart"]

    return (
      <FormControl>
        <FormLabel style={{fontWeight: 600, color: "#282d2e", marginBottom: 8}}>ส่วนลด</FormLabel>
        <FormGroup>
          {labels.map((item,index) => (
            <FormControlLabel
             value={index} 
             control={<Checkbox/>} 
             label={item} 
             key={index}></FormControlLabel>
          ))}
        </FormGroup>
      </FormControl>
    );
  }

  const PriceFilter = () => {
    const labels = ["ถูกกว่า 100", "100-250", "251-500", "500+", "1000+"]

    return (
      <FormControl>
        <FormLabel style={{fontWeight: 600, color: "#282d2e", marginBottom: 8}}>ราคา</FormLabel>
        <FormGroup>
          {labels.map((item,index) => (
            <FormControlLabel
             value={index}
             control={<Checkbox/>} 
             label={`฿ ${item}`}
             key={index}></FormControlLabel>
          ))}
        </FormGroup>
      </FormControl>
    );
  }

  const OtherFilter = () => {
    const labels = ["ดีลสุดคุ้ม", "เดลิเวอรี", "เปิดตอนนี้", "ร้านเปิดใหม่", "ที่จอดรถ"]

    return (
      <FormControl>
        <FormGroup>
          {labels.map((item,index) => (
            <FormControlLabel
             value={index}
             control={<Checkbox/>} 
             label={item} 
             key={index}></FormControlLabel>
          ))}
        </FormGroup>
      </FormControl>
    );
  }

  const SmResponsive = () => {
    const StyleButton = {
      padding: "6px",
      height: "32px"
    }

    return(
      <Stack direction="row" spacing={1}>
        <Button variant='outlined' color="inherit" endIcon={<KeyboardArrowDownRounded/>} style={StyleButton}>ย่านและเขต</Button>
        <Button variant='outlined' color="inherit" endIcon={<KeyboardArrowDownRounded/>} style={StyleButton}>ร้านอาหาร</Button>
        <Button variant='outlined' color="inherit" startIcon={<AccessTimeFilledRounded/>} style={StyleButton}>เปิดตอนนี้</Button>
        <Button variant='outlined' color="inherit" startIcon={<ConfirmationNumber/>} style={StyleButton}>ดีลสุดคุ้ม</Button>
        <Button variant='outlined' color="inherit" startIcon={<StarBorderRounded/>} style={StyleButton}>เรตติ้ง</Button>
        <Button variant='outlined' color="inherit" startIcon={<DeliveryDiningRounded/>} style={StyleButton}>เดลิเวอรี</Button>
        <Button variant='outlined' color="inherit" startIcon={<DiscountRounded/>} style={StyleButton}>ส่วนลด</Button>
        <Button variant='outlined' color="inherit" style={StyleButton}>ร้านเปิดใหม่</Button>
        <Button variant='outlined' color="inherit" startIcon={<MoreVertRounded/>} style={StyleButton}>เพิ่มเติม</Button>
      </Stack>
    );
  }

  return (
    <Box flex={2} sx={{backgroundColor: {xs: "#f5f5f5", md: "#edf0f2"}}}>
      <Stack direction="column" spacing={1} style={{padding: "17px", borderRadius: "8px"}} sx={{display: {xs: "none", md: "flex"}, backgroundColor: {md: "#fff"}}}>
        <PlaceFilter/>
        <Line/>
        <RatingFilter/>
        <Line/>
        <DistanceFilter/>
        <Line/>
        <TypeFilter/>
        <Line/>
        <PromoFilter/>
        <Line/>
        <PriceFilter/>
        <Line/>
        <OtherFilter/>
      </Stack>
      <Stack direction="column" spacing={1} style={{height: 40, justifyContent: "center", alignItems: "center"}} sx={{display: {xs: "flex", md: "none"}}}>
        <SmResponsive/>
        <div style={{width: "100vw", height: "1px", backgroundColor:"#e9ecee"}}></div>
      </Stack>
    </Box>
  )
}
