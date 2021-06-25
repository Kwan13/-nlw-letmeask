import { ReactNode } from 'react';
import cx from 'classnames';

import '../styles/question.scss';

type Question = {
  content: string;
  author: {
    name: string;
    avatar: string;
  }
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
}

export function Question({ content, children, author, isAnswered = false, isHighlighted = false }: Question) {
  return (
    <div className={cx(
      'question',
      { answered: isAnswered },
      { highlighted: isHighlighted && !isAnswered },
    )}>
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </div>
  );
}