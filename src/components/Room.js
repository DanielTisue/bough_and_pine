import { Link } from 'react-router-dom';

export default function Room({ room }) {
  const { name, slug, images } = room;
  return (
    <div className="featured-images">
      <Link to={`/rooms/${slug}`}>
      <img className="image-style" src={images[0]} alt="single room" />
      <div className="img-overlay">
        <p className="p2 center-align white all-caps add-spacing">{name}</p>
      </div>
      </Link>
    </div>
  )
}
