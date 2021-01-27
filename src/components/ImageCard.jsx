import Tag from './Tag';

const Card = ({ image }) => {
  const tags = image.tags.split(', ');

  return (
    <div className="md:max-w-sm mx-auto rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt={image.tags} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong> {image.views}
          </li>
          <li>
            <strong>Downloads: </strong> {image.downloads}
          </li>
          <li>
            <strong>likes: </strong> {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag) => (
          <Tag key={`${image.id}-${tag}`} tag={tag} />
        ))}
      </div>
    </div>
  );
};

export default Card;
