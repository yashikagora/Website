import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { cardData } from './carddata';

export default function ProjecCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return cardData.map((data, key) =>  (
    <Card sx={{ maxWidth: 345, borderRadius: "30px" }} key={key}>
      <CardHeader
      sx={{ backgroundColor: "rgb(32, 104, 213)"}}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {data.Avtar}
          </Avatar>
        }
        title= {data.Title}
        subheader= {data.Skill}
      />
      <CardMedia
        component="img"
        height="194"
        image={data.Image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {data.Summary} 
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
          <ExpandMoreIcon expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"/>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Features:</Typography>
          <Typography paragraph>
            {data.Feature}
          </Typography>
          <Typography>
            {data.git}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  ));
}
