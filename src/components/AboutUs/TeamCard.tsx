import React from 'react';

const TeamCard = ({team}:any) => {
  const { name, position, image, description } = team;
  return (
    <>
      <div className="about-team-grids">
        <img src={image} alt="" />
        <div className="team-w3lstext">
          <h4>
            <span>{`${name},`}</span>
            {position}
          </h4>
          <p>{description}</p>
        </div>
        <div className="social-icons caption">
          <ul>
            <li>
              <a href="https://www.facebook.com/" className="fa fa-facebook facebook">
                {' '}
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="fa fa-twitter twitter">
                {' '}
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="fa fa-google-plus googleplus">
                {' '}
              </a>
            </li>
          </ul>
          <div className="clearfix"> </div>
        </div>
      </div>
    </>
  );
}

export default TeamCard;
