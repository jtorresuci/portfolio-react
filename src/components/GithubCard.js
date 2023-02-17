import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

const GithubCard = ({ username }) => {
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(8);

  const personalAccessToken = process.env.REACT_APP_GITHUB_TOKEN;

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
    fetchRepos();
  }, [username]);

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = Array.from(
    { length: Math.ceil(repos.length / reposPerPage) },
    (_, i) => i + 1
  );

  return (
    <div className="mx-auto">
      <nav className="mt-4 d-flex justify-content-center">
        <ul className="pagination">
          {pageNumbers.map((pageNumber) => (
            <li key={pageNumber} className="page-item">
              <button
                className="page-link"
                onClick={() => paginate(pageNumber)}
              >
                {pageNumber}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="d-flex flex-wrap justify-content-center">
        {currentRepos.map((repo) => (
          <Card
            key={repo.id}
            style={{
              width: "18rem",
              margin: "1rem",
              minHeight: "16rem",
              maxHeight: "16rem",
            }}
          >
            <Card.Body className="d-flex flex-column">
              <div>
                <Card.Title>{repo.name}</Card.Title>
                <Card.Text style={{ maxHeight: "7.2rem" }}>
                  {repo.description}
                </Card.Text>
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
    </div>
  );
};

export default GithubCard;
