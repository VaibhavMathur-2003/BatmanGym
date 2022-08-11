import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Subscription.css";
import { Link } from "react-router-dom";

export default function MediaCard() {
  return (
    <>
      <div id="Subscription">
        <div className="subscribeHead">Subscriptions</div>
        <div className="subscribe">
          <Link to="/whySoSerious">
            <Card
              sx={{
                maxWidth: 345,
                boxShadow: `rgba(0, 0, 0, 0.8) 0px 40px 58px -16px,
    rgba(0, 0, 0, 0.72) 0px 30px 22px -10px`,
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image="https://epostalnews.com/wallpaper/wallpaper/20220428/joker-wallpapers-wallpapers-hd-preview.webp"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Why So Serious!
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  The subscriptions offers an amazing training for bodybuilding
                  with access to all the equipments.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Buy</Button>
              </CardActions>
            </Card>
          </Link>
          <Link to="/Batcycle">
            <Card sx={{ maxWidth: 345, boxShadow: `rgba(0, 0, 0, 0.8) 0px 40px 58px -16px,
    rgba(0, 0, 0, 0.72) 0px 30px 22px -10px`,}}>
              <CardMedia
                component="img"
                height="140"
                image="https://wallpapercave.com/wp/wp7149547.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Batcycle
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Aling with the bodybuilding training, this subscription also
                  includes an intense cardio training.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Buy</Button>
              </CardActions>
            </Card>
          </Link>
          <Link to="/batMobile">
            <Card sx={{ maxWidth: 345 , boxShadow: `rgba(0, 0, 0, 0.8) 0px 40px 58px -16px,
    rgba(0, 0, 0, 0.72) 0px 30px 22px -10px`}}>
              <CardMedia
                component="img"
                height="140"
                image="https://wallpapercave.com/wp/8K3mVCl.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Batmobile
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  The most effective subscription providing a highly skilled
                  trainer and perfection to the exercises.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Buy</Button>
              </CardActions>
            </Card>
          </Link>
        </div>
      </div>
    </>
  );
}
