import React from 'react';
import team1 from '../../assets/images/t1.jpg';
import team2 from '../../assets/images/t2.jpg';
import team3 from '../../assets/images/t3.jpg';
import team4 from '../../assets/images/t4.jpg';
import TeamCard from './TeamCard';
import '../../assets/style/Aboutus.css';

const AboutTeam = () => {
  const team = [
    {
        name: 'ANDERSON',
        position: 'Manager',
        image: team4,
        description: 'Odio dignissimos vero eos voluptatem accusantium doloremque laudantium reader will be distracted.'
      },
      {
        name: 'ELIFS',
        position: 'Director',
        image: team2,
        description: 'Odio dignissimos vero eos voluptatem accusantium doloremque laudantium reader will be distracted.'
      },
    {
      name: 'JESSICA',
      position: 'Supervisor',
      image: team1,
      description: 'Odio dignissimos vero eos voluptatem accusantium doloremque laudantium reader will be distracted.'
    },
    {
      name: 'RACKHAM',
      position: 'Staff',
      image: team3,
      description: 'Odio dignissimos vero eos voluptatem accusantium doloremque laudantium reader will be distracted.'
    },
  
  ];
  return (
    <>
      <div className="about-team">
        <div className="container">
          <h3 className="w3_agile_header">Meet Our Team</h3>
          <div className="team-agileitsinfo">
            <div className="row">
              {team && team.map(team => (
                <div className="col-md-3 col-sm-6">
                  <TeamCard team={team}/>
                </div>
              ))}
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutTeam;