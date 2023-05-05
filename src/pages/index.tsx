import React, { useState } from 'react';
import { Layout, Page } from '@vercel/edge-functions-ui';
import axios from 'axios';
import useSWR from 'swr';

// Components 
import TopNavBar from '../common/components/TopNavBar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { styled } from '@mui/material/styles';

import PostList from 'domain/PostList'

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
export default function Index() {
  
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  
  return (
    <Page>
      <Drawer
        anchor="left"
        open={open}
        onClose={handleDrawerToggle}
        style={{ width: "250" }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerToggle}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Home', 'Page 1', 'Page 2', 'Page 3'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text}>test 1</ListItemText>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Setting', 'Profile'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <TopNavBar handleDrawerToggle={handleDrawerToggle} />
    </Page>
  )
}

Index.Layout = Layout
