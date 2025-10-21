import React from "react";
import Card from "react-bootstrap/Card";

function AchievementCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold" }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Text style={{ color: "#c770f0", fontStyle: "italic" }}>
          {props.date}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default AchievementCard;
