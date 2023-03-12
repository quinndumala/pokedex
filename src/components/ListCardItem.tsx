import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Pokemon } from "@/common/types";

interface ListCardItemProps {
  name: string;
  image: string;
}

function ListCardItem({ name, image }: ListCardItemProps) {
  return (
    <Card sx={{ maxWidth: 285, margin: "1em" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={image}
          alt="green iguana"
          sx={{ padding: "1em", objectFit: "contain" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ListCardItem;
