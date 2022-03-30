import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../style/Footer.css'
function Footer() {
  return (
    <div className="footer">    
        <div className="socialMedia">
            <InstagramIcon />
            <TwitterIcon />
            <FacebookIcon />
            <LinkedIcon  />
            <GitHubIcon />
        </div>
        <p>Learning ReactJS with Huy ALesta</p>
    </div>
  )
}

export default Footer