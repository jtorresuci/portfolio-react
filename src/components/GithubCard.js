import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
// import { FaLink } from 'react-icons/fa';

const GithubCard = ({ username }) => {
  const [repos, setRepos] = useState([]);

  const personalAccessToken = "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";
  useEffect(() => {
    const fetchRepos = async () => {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos?sort=updated`,
        {
          headers: {
            Authorization: `Bearer ${personalAccessToken}`,
          },
        }
      );
      setRepos(response.data);
    };
    console.log(repos);
    fetchRepos();
  }, [username]);

  return (
    <div className="d-flex flex-wrap justify-content-center mx-auto">
      {repos.map((repo) => (
        <Card
          key={repo.id}
          style={{ width: "18rem", margin: "1rem", minHeight: "12rem" }}
        >
          <Card.Body className="d-flex flex-column">
            <div>
              <Card.Title>{repo.name}</Card.Title>
              <Card.Text>{repo.description}</Card.Text>
            </div>
            <div className="mt-auto d-flex flex-column">
              <Button
                variant="primary"
                href={repo.html_url}
                target="_blank"
                className="d-flex align-items-center justify-content-center"
              >
                <i className="fa-brands fa-github "></i>
                Visit
              </Button>

              <div className="mt-2">Main Language used: {repo.language}</div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default GithubCard;
