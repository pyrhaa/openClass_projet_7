const RentalTags = ({ tags }) => {
  return (
    <ul className="tags">
      {tags.map((tag, index) => {
        return (
          <li className="tag" key={index}>
            {tag}
          </li>
        );
      })}
    </ul>
  );
};

export default RentalTags;
