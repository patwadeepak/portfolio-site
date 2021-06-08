import '../static/css/UnderlineDiv.css';

const UnderlineDiv = ({ text }) => {
  return (
    <div className='container' style={{ fontSize: '2vh', paddingTop: '50px' }}>
      <span className='left-to-right-hold'>{text}</span>
    </div>
  );
};

export default UnderlineDiv;
