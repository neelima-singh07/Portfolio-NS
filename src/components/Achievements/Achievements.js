import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import AchievementCard from "./AchievementCard";

function Achievements() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Achievements </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of my accomplishments and milestones.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <AchievementCard
              title="700+ DSA Problems Solved"
              description="Strengthened algorithmic thinking and coding efficiency by solving 700+ DSA problems across LeetCode (300+), Codeforces (24), CodeChef (82), GfG (150+), CodeStudio (111)."
              
            />
          </Col>

          <Col md={6} className="project-card">
            <AchievementCard
              title="Shraman Foundation Scholarship"
              description="₹50,000/year scholarship awarded for academic excellence  US-Texas based Scholarship."
              
            />
          </Col>

          <Col md={6} className="project-card">
            <AchievementCard
              title="Best Mentee DSA C++ Cohort"
              description="Recognized as Top 2 Mentee in Summer sprint challenge By TechNeeds (GDTUW)."
              
            />
          </Col>

          <Col md={6} className="project-card">
            <AchievementCard
              title="Adobe India Hackathon 2025"
              description="Cleared DSA Round (Round 1), ranked in the top 5% (4,000 out of 80,000+ teams) nationwide."
             
            />
          </Col>

          <Col md={6} className="project-card">
            <AchievementCard
              title="Amazon Future Enginerr Bootcamp"
              description="Selected among top 500 of 5,000+ participants for Phase 2 (DSA). Awarded a laptop for ranking in the top 5%."
              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Achievements;
