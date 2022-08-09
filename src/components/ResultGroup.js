import React from 'react';

const ResultGroup = ({
  src,
  href,
  title,
  summary,
  tags,
  btnText,
  target,
  onClick,
}) => (
  <div className='res-view-wrap'>
    <div className='res-img-wrap'>
      <img src={src} alt='Publication cover' />
    </div>

    <article>
      <div className='res-art-wrap'>
        <h4>
          <a href={href} target={target} rel='noreferrer'>
            {title}
          </a>
        </h4>

        <p className='tags'> {tags} </p>

        <p className='desc'> {summary} </p>

        <div className='btn-wrap'>
          <a href={href} target='_blank' rel='noreferrer'>
            <button className='page-btn' onClick={onClick}>
              {btnText}
            </button>
          </a>
        </div>
      </div>
    </article>
  </div>
);

//refactor this button to use the btn comp

export default ResultGroup;
