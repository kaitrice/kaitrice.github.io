import './Footer.css';

export default function Footer() {
  let year = new Date().getUTCFullYear()

  return (
    <div id='footer'>
      <div className='disclaimer'>
        <p>Kait Rice © {year}</p>
        <p className='small'>Designed in Figma and coded in Visual Studio Code. <br/>Built with React.js and CSS, deployed with GitHub Pages.</p>
      </div>
    </div>
  );
}
