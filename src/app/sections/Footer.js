import './Footer.css';
import Icon from '../components/Icon';

const socials = [
  { url: "https://linked.in/kaitrice/", icon: <Icon name={"linkedin"} /> },
  { url: "https://github.com/kaitrice/", icon: <Icon name={"github"} /> },
]

export default function Footer() {
  let year = new Date().getUTCFullYear()

  return (
    <div id='footer'>
      {/* <h2>Let's Connect!</h2>
      <p>Want to work together or have any questions? <br/>I'd love to hear from you!</p>
      <div className='socials'>
        {socials.map((social, index) => (
          <a
            key={index}
            className="social"
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.icon}
          </a>
        ))}
      </div> */}
      <div className='disclaimer'>
        <p>Kait Rice © {year}</p>
        <p className='small'>Designed in Figma and coded in Visual Studio Code. <br/>Built with React.js and CSS, deployed with GitHub Pages.</p>
      </div>
    </div>
  );
}
