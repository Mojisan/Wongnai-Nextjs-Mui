import { Box, Container, Stack } from "@mui/material";
import Navbar from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Gallery } from "./components/Gallery";
import { Rightbar } from "./components/Rightbar";
import { Feeds } from "./components/Feeds";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div style={{backgroundColor: "#edf0f2", width: "fit-content"}}>
      <Navbar/>
      <Box sx={{display: {xs: "flex", md: "none"}}}>
            <Sidebar/>
          </Box>
      <Container style={{marginBottom: 24}} sx={{padding: "16px", marginTop: {xs: 0, md: "24px"}}}>
        <Stack direction={{xs:'column', md:'row'}} spacing={2} justifyContent={"center"}>
          <Box sx={{display: {xs: "none", md: "flex"}}}>
            <Sidebar/>
          </Box>
          <Stack flex={4} direction="column" spacing={2}>
            <Gallery/>
            <Stack direction={{xs:'column', md:'row'}} spacing={2} justifyContent={"space-evenly"}>
              <Feeds/>
              <Rightbar/>
            </Stack>
          </Stack>
        </Stack>
      </Container>
      <Footer/>
    </div>
  )
}
