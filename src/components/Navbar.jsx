import React from "react";
import {Flex, Box, Spacer} from "@chakra-ui/react";


export default function Navbar(){

    const navBar = {
        px : "10%",
        py: "1rem",
        gap : "2rem",
        color: "white",
        bg: "black"
    }

    return (
        <Flex sx={navBar} className="navBarcss">
            <Box>Hi, I'm Dewale</Box>
            <Spacer></Spacer>
            <Box>Hire Me</Box>
            <Box>BOOKSHELF</Box>
            <Box>pictures</Box>
            <Box>portfolio</Box>
        </Flex>

    )
}