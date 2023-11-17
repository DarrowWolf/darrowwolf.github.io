import React from 'react';

type CardProps = {
    imageSrc: string;
    title: string;
    description: string;
    tags: string[];
};

const Card = ({ imageSrc, title, description, tags }: CardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg grow-0">
      <img className="w-50%" src={imageSrc} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
