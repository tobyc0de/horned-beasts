export default function HornedBeast(props) {
  return (
    <div className="hornedbeast">
      <h2>{props.title}</h2>
      <img src={props.imageUrl} alt={props.title} />
      <p>{props.description}</p>
    </div>
  );
}
