import '../static/css/UnderlineDiv.css';

const Contact = () => {
  return (
    <div className='full-height-section' style={{ marginBottom: '30px' }}>
      <div className='container'>
        <OneContact textContext='EMAIL' />
        <OneContact textContext='DRIBBLE' />
        <OneContact textContext='TWITTER' />
      </div>
    </div>
  );
};

const OneContact = ({ textContext }) => {
  return (
    <div>
      <span
        className='left-to-right-hold'
        style={{
          fontSize: 'calc(4vh + 4vw + 1.5vmin)',
        }}>
        {textContext}
      </span>
    </div>
  );
};

export default Contact;
