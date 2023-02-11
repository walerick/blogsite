import {Heading, Text,Grid, GridItem,Wrap, WrapItem} from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { useLoaderData } from "react-router-dom";


export default function Dashboard() {
  const tasks = useLoaderData()
  return (
    <Grid templateColumns={"repeat(4,1fr)"} pt={"1rem"}>
      <GridItem px={"3rem"}>
        <Heading>Kaizen</Heading>
      </GridItem>
      <GridItem colSpan={"2"} borderX={"1px"} px={"2rem"}>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil possimus et sequi error aliquam neque quisquam odio in, deleniti voluptatem quam asperiores eligendi illum quia libero dolor minima reiciendis est.</Text>
        <Text>
        {tasks && tasks.map(task => (
          <div key={task.id}>{task.title}</div>
        ))}
        </Text>

      </GridItem>
      <GridItem px={"3rem"}>
        <Text>About</Text>
        <Wrap>
          <WrapItem>
          <Avatar size='2xl' name='Adewale Bakare' src='../public/img/avatar-dewale.jpg' />{' '}
          </WrapItem>
        </Wrap>
        <Text>I'm a web developer. I write when I'm not coding</Text>
      </GridItem>
    </Grid>
  )
}


export const tasksLoader = async () => {
  const res = await fetch('http://localhost:3000/tasks')

  return res.json()
} 