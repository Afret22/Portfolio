import React from "react";
import { Button, Card } from "react-bootstrap";
import Link from "next/link";

const ProjectCard = ({
  image,
  description,
  link,
  descriptionLink = "",
  date = "may 2020",
  buttonText = "View",
}) => {
  return (
    <Card className='card1' style={{ maxWidth: "45vw" }}>
      <Card.Img variant='top' src={`${image}`} />
      <Card.Body>
        <Card.Title>The Game of Life</Card.Title>
        <Card.Text>
          <p>{description}</p>
          {descriptionLink && (
            <a href={`${descriptionLink}`}>
              <h3>Discrption</h3>
            </a>
          )}
        </Card.Text>
        <Button variant='primary'>
          <Link href={`${link}`}>
            <h4>{buttonText}</h4>
          </Link>
        </Button>
      </Card.Body>
      <Card.Footer>
        <small className='text-muted'>{date}</small>
      </Card.Footer>
    </Card>
  );
};

export default ProjectCard;
