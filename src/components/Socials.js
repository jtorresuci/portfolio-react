import React from 'react'
import "./Socials.css"

function Socials({githubLink, linkedinLink, resumeLink}) {
  return (
    <div className="icon-links text-flicker-in-glow ">
    <a href={githubLink} target="_blank" rel="noopener noreferrer">
      <i className="fab fa-github fa-lg"></i>
    </a>
    <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin fa-lg"></i>
    </a>
    <a href={resumeLink} target="_blank" rel="noopener noreferrer">
      <i className="far fa-file fa-lg"></i>
    </a>
  </div>
  )
}

export default Socials
