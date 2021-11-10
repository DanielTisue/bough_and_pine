import { Link } from 'react-router-dom';

export default function Room({ room }) {
  const { name, slug, images } = room;
  return (
    <div className="featured-images">
      <img className="image-style" src={images[0]} alt="single room" />
    </div>
  )
}
