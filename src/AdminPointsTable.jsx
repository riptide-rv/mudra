// src/PointsTable.js
import React, { useEffect, useState } from 'react';
import { database } from './config/firebase';

const AdminPointsTable = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          var starCountRef = database.ref('score/');
          starCountRef.on('value', (snapshot) => {
          const data = snapshot.val();
          console.log(Object.values(data))
          const teamsArray = Object.values(data)
             teamsArray.sort((a, b) => b.score - a.score);
             setTeams(Object.values(teamsArray));
          });
          
        } catch (error) {
          console.error("Error fetching data from Firebase:", error);
        }
      };
  
      fetchData();
    }, []);

    const handleIncreaseScore = (teamId, points) => {
        // Implement logic to increase the score
        const updatedTeams = teams.map((team) =>
          team.dept === teamId ? { ...team, score: team.score + points } : team
        );
        setTeams(updatedTeams);
        
      };
    
      const handleDecreaseScore = (teamId) => {
        // Implement logic to decrease the score
        const updatedTeams = teams.map((team) =>
          team.dept === teamId ? { ...team, score: team.score - 1 } : team
        );
        setTeams(updatedTeams);
        
      };
    
      const handleSetNewScore = (teamId, newScore) => {
        // Implement logic to set a new score
        const updatedTeams = teams.map((team) =>
          team.dept === teamId ? { ...team, score: newScore } : team
        );
        setTeams(updatedTeams);
        
      };
    
      const saveScore = (teams) => {
        // Save the updated score to Firebase
        database.ref('score/').set(teams.reduce((acc, team) => {
          acc[team.dept] = { dept: team.dept, score: team.score };
          return acc;
        }, {}));
      };

  return (
    <div className='w-[90vw]   backgroundmain'>
      <div className='flex text-xs m-2 p-0 justify-between' style={{
        fontWeight: 200,
        letterSpacing: "0.09em"
      }}><div>DEPARTMENT</div><div>SCORE</div>
      <div>INDIVIDUAL</div>
      <div>GROUP</div>
      </div>
      <div className='text-base w-[100%] flex-col justify-center items-center ' style={{
        letterSpacing: "0.2em",
       overflow: 'scroll',
       overflow: 'auto',
        fontWeight:400
      }}>
      {teams.map((team, index) => (
            <div className='flex justify-between rounded-xl maincontainer border-2 m-2 mb-4 ' style={{
              borderColor: getColor(index),
              background: getColorBG(index)
            }} key={team.dept} >
              <div className='p-7' style={{
                minWidth: "130px"
              }}>
                {team.dept}
              </div>
              
              <div className='mr-4 p-7'>{team.score}</div>
              <div>
              <div className='flex'>
                <div><button onClick={()=>handleIncreaseScore(team.dept, 2)}>I</button></div>
                <div><button>II</button></div>
                <div><button>III</button></div>
              </div>
              </div>
              <div className='flex h-[100%] items-center'>
                <div className='flex'>
                <div><button>I</button></div>
                <div><button>II</button></div>
                <div><button>III</button></div>
                </div>
              </div>
              
            </div>
          ))}
      </div>
  
    </div>
  );
};

function getColor(index) {
  switch(index){
    case 0:
      return "#ffd70095";
      break;
    case 1:
      return "#c0c0c0";
      break;
    case 2:
      return "#CD7F3295";
      break;
    default:
      return "#ffffff20"
  }
}
function getColorBG(index) {
  switch(index){
    case 0:
      return "#ffd70030";
      break;
    case 1:
      return "#c0c0c030";
      break;
    case 2:
      return "#CD7F3220";
      break;
    default:
      return "#ffffff07"
  }
}


export default AdminPointsTable;
