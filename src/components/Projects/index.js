import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From Simple to Advanced level. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Projects' ?
            <ToggleButton active value="Projects" onClick={() => setToggle('Projects')}>Projects</ToggleButton>
            :
            <ToggleButton value="Projects" onClick={() => setToggle('Projects')}>Projects</ToggleButton>
          }
          <Divider />
          {toggle === 'Tools' ?
            <ToggleButton active value="Tools" onClick={() => setToggle('Tools')}>Tools</ToggleButton>
            :
            <ToggleButton value="Tools" onClick={() => setToggle('Tools')}>Tools</ToggleButton>
          }
          <Divider />
          {toggle === 'Scripts' ?
            <ToggleButton active value="Scripts" onClick={() => setToggle('Scripts')}>Scripts</ToggleButton>
            :
            <ToggleButton value="Scripts" onClick={() => setToggle('Scripts')}>Scripts</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects