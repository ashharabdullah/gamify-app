import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="picture"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="picture "
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="picture "
            src="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Avatar alt="Agnes Walker" src="" />
          <Avatar
            alt="picture"
            src="https://material-ui.com/static/images/avatar/6.jpg"
          />
          <Avatar
            alt="picture"
            src="https://material-ui.com/static/images/avatar/7.jpg"
          />
          <Avatar
            alt="picture"
            src="https://material-ui.com/static/images/avatar/8.jpg"
          />
          <Avatar
            alt="picture"
            src="https://material-ui.com/static/images/avatar/7.jpg"
          />
          <Avatar
            alt="picture"
            src="https://material-ui.com/static/images/avatar/8.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={6}>
          <ImageListItem>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQscl95_SoeDu8PKDl828A1z4DOuxJiLBFibw&s"
              alt=""/>
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvlZHqjN5IAt-R2BNpThnb9Xr-PWjlyKSG6Q&s"
              alt=""/>
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://www.91-cdn.com/hub/wp-content/uploads/2021/12/ar88u.jpg"
              alt=""/>
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="data:image/jpeg;base64,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" />
        </ListItemAvatar>
        <ListItemText
          primary="Epic battles, endless fun!"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary">
                Connors
              </Typography>
              {" — Can't put the controller down! The graphics are insane, and every level feels like a new adventure!"}
            </React.Fragment>
          }/>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXTfa98G0ECE9HEPGEgJyg3NKIHaRsTG_a4Q&s" />
        </ListItemAvatar>
        <ListItemText
          primary="Level up! "
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary">
                
              </Typography>
              {" Exploring the open world is so satisfying!"}
            </React.Fragment>
          } />
      </ListItem>
    </List>
      </Box>
    </Box>
  );
};

export default Rightbar;