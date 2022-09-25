import '../assets/css/components/NameBox.scss';

function NameBox(props) {
  return (
    <div className='name-box'>
      <h3>Hi, my name is <span>{props.name}</span>!</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default NameBox;