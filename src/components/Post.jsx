import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
const Post = () => {
  return (
    <>
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "green" }} aria-label="recipe">
              J
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="John Doe"
          subheader="September 14, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://www.playexpomanchester.com/images/2019/03/RE-PlayManchester2019-Fortnite-1040x585.png"
          alt="picture"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <Typography
              sx={{ textTransform: "capitalize", fontWeight: "bold" }}
            >
              Fortnite Battle Royale Madness:
            </Typography>
            Ready to drop into the battlefield? Fortnite is bringing you new
            skins, weapons, and events every season! Gear up, build, and battle
            your way to victory. Are you the last one standing?
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
      {/* new */}

      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              J
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="John Doe"
          subheader="September 14, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://bnetcmsus-a.akamaihd.net/cms/blog_header/2v/2VXF2BDNI0NU1663696759153.jpg"
          alt="picture"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <Typography
              sx={{ textTransform: "capitalize", fontWeight: "bold" }}
            >
              Call of Duty: Modern Warfare II
            </Typography>
            Ready to drop into the battlefield? Lock and load! Call of Duty:
            Modern Warfare II is back with heart-pounding action and intense
            missions. Whether you're in the campaign or multiplayer, prepare for
            an adrenaline rush like never before!
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
      {/* new 2 */}
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "pink" }} aria-label="recipe">
              J
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="John Doe"
          subheader="September 14, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://www.minecraft.net/content/dam/games/minecraft/key-art/Vanilla-PMP_Collection-Carousel-0_Village-and-Pillage_1280x768.jpg"
          alt="picture"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <Typography
              sx={{ textTransform: "capitalize", fontWeight: "bold" }}
            >
              Minecraft: Unleash Your Creativity
            </Typography>
            From building your dream home to battling mobs in survival mode,
            Minecraft is the ultimate sandbox experience! The only limit is your
            imagination. Start crafting your world today!
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
      {/* new 3 */}
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "orange" }} aria-label="recipe">
              J
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="John Doe"
          subheader="September 14, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/03/zelda-botw-complete-guide-thumbnail.jpg"
          alt="picture"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <Typography
              sx={{ textTransform: "capitalize", fontWeight: "bold" }}
            >
              The Legend of Zelda: Breath of the Wild
            </Typography>
            Step into the mystical world of Hyrule in The Legend of Zelda:
            Breath of the Wild! Explore vast landscapes, solve ancient puzzles,
            and fight epic battles. The adventure of a lifetime awaits!
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
      {/* new 5 */}
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "purple" }} aria-label="recipe">
              J
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="John Doe"
          subheader="September 14, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA_OIRp3_9yN2ciDJbYdhpIGpfo1L7z2fcLw&s"
          alt="picture"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <Typography
              sx={{ textTransform: "capitalize", fontWeight: "bold" }}
            >
              Among Us: Trust No One!
            </Typography>
            Who is the imposter? Among Us is the game that will have you
            questioning your friends and your own judgment! Team up, complete
            tasks, and survive... but be careful who you trust! These posts
            cater to some of the most popular games and can attract a wide range
            of gamers to your website.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
      {/* new 6 */}
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "grey" }} aria-label="recipe">
              J
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="John Doe"
          subheader="September 14, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://cdn.mos.cms.futurecdn.net/XFrWHyfNRsjSGAagPtgFom.jpg"
          alt="picture"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <Typography
              sx={{ textTransform: "capitalize", fontWeight: "bold" }}
            >
              Grand Theft Auto V:
            </Typography>
            The Ultimate Open World Explore the streets of Los Santos in Grand
            Theft Auto V! Whether you're taking on missions, driving fast cars,
            or just causing mayhem, there's always something thrilling around
            the corner. Ready to make your mark?
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
      {/* new 7 */}
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "Crimson" }} aria-label="recipe">
              J
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="John Doe"
          subheader="September 14, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://encrypted-tbn0.gstatic.com/?q=tbn:ANd9GcSKizPJM9juAwgVrVoOidTAIpWJEynzuhAYaQ&s"
          alt="picture"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <Typography
              sx={{ textTransform: "capitalize", fontWeight: "bold" }}
            >
              FIFA 24: The Beautiful Game Reimagined
            </Typography>
            Take to the pitch with FIFA 24! Experience next-level realism,
            master your skills, and lead your favorite team to victory. Whether
            it's Career Mode or Ultimate Team, every match matters.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
      {/* new 8 */}
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "brown" }} aria-label="recipe">
              J
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="John Doe"
          subheader="September 14, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8uDsPn9cSvnfgcnbiuO8D27wLy0IgJ6RuoHrsopj4bVrPygXR3vFejtoNWIBbALOfii0&usqp=CAU"
          alt="picture"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <Typography
              sx={{ textTransform: "capitalize", fontWeight: "bold" }}
            >
              Apex Legends: Battle Royale with Legends
            </Typography>
            Join the fast-paced action of Apex Legends! Choose your Legend, each
            with unique abilities, and fight for survival in intense squad-based
            combat. Do you have what it takes to be a Champion?
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
      {/* new 9 */}
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "aqua" }} aria-label="recipe">
              J
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="John Doe"
          subheader="September 14, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5-Djt_X_SG2BnX-9cxXrNmptulRHRFc-YMQ&s"
          alt="picture"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <Typography
              sx={{ textTransform: "capitalize", fontWeight: "bold" }}
            >
              The Witcher 3: Wild Hunt Become the Monster Slayer
            </Typography>
            Step into the shoes of Geralt of Rivia in The Witcher 3: Wild Hunt!
            With deep storytelling, vast open worlds, and fierce battles, this
            is a journey no RPG fan should miss. Will you answer the call of the
            wild?
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
      {/* new 10 */}
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "coral" }} aria-label="recipe">
              J
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="John Doe"
          subheader="September 14, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFMt-BbkEfs4yTJD_Vhn9hCSgWHxEul2voDQ&s"
          alt="picture"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <Typography
              sx={{ textTransform: "capitalize", fontWeight: "bold" }}
            >
              Counter Strike: Global Offensive The Ultimate Tactical Shooter
            </Typography>
            Gear up and join the tactical warfare in CS: GO! Battle it out in
            intense matches, test your reflexes, and rise through the ranks.
            Only the sharpest shooters survive the heat of battle!
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
      {/* new 11 */}
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "cyan" }} aria-label="recipe">
              J
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="John Doe"
          subheader="September 14, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK1x8uzV2U60TZPFcy1Pt8YNJOYUTYhjna_Q&s"
          alt="picture"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <Typography
              sx={{ textTransform: "capitalize", fontWeight: "bold" }}
            >
              Red Dead Redemption 2: Live the Cowboy Dream 
            </Typography>
            Step into the Wild
            West in Red Dead Redemption 2! With breathtaking landscapes,
            gripping stories, and epic shootouts, experience the outlaw life
            like never before. Saddle up for adventure!
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default Post;
