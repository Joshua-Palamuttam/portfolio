import React from "react"
import {
  FaLinkedin,
  FaGithubSquare,
  FaFile,
  // FaFacebookSquare,
  // FaTwitterSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/joshua-palamuttam-03b78aab/",
  },
  {
    id: 2,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/joshpal97",
  },
  {
    id: 3,
    icon: <FaFile className="social-icon"></FaFile>,
    url: resumeURL,
  },
  // {
  //   id: 4,
  //   icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
  //   url: "https://",
  // },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link" target="_blank">
        {link.icon}
      </a>
    </li>
  )
})

export const resumeURL =
  "https://www.joshuapalamuttam.com/Joshua_Palamuttam_Resume"

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
