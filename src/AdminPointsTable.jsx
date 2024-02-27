// src/PointsTable.js
import React, { useEffect, useState } from 'react';
import { database } from './config/firebase';
import { auth } from './config/firebase';
const AdminPointsTable = () => {
    const [teams, setTeams] = useState([]);

    const handleLogout = () => {
        auth.signOut().then(() => {
            localStorage.removeItem('user');
            window.location.reload();
        }).catch((error) => {
            console.error("Error signing out:", error);
        });
    }

    useEffect(() => {
      const fetchData = async () => {
        try {
          var starCountRef = database.ref('score/');
          starCountRef.on('value', (snapshot) => {
          const data = snapshot.val();
          console.log(Object.values(data))
          const teamsArray = Object.values(data)
            //  teamsArray.sort((a, b) => b.score - a.score);
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
          team.dept === teamId ? { ...team, score: (team.score - 1) >= 0? team.score -1 :0 } : team
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
        }, {})).then(() => {
            alert('Score saved successfully');
        }).catch((error) => {
            console.error("Error saving data to Firebase contact 9633766566");
        });
      };

  return (
    <div className='w-[90vw]   backgroundmain'>
        
      <div className='flex text-xs  p-0 justify-between' style={{
        fontWeight: 200,
        letterSpacing: "0.09em"
      }}><div className='ml-2 w-[15vw]'>DEPARTMENT</div><div className='w-[20vw]'>SCORE</div>
     
      <div className='w-[20vw]'>INDIVIDUAL</div>
      <div className='w-[20vw] pl-32'>GROUP</div>
      <div className='w-[20vw]'></div>
      
      </div>
      <div className='text-base w-[100%] flex-col justify-center items-center ' style={{
        letterSpacing: "0.2em",
       overflow: 'scroll',
       overflow: 'auto',
        fontWeight:400
      }}>
      {teams.map((team, index) => (
            <div className='flex justify-between border-t-2 border-b-2 m-2 maincontainer ' style={{
             
            }} key={team.dept} >
              <div className='mt-4' style={{
                minWidth: "130px"
              }}>
                {team.dept}
              </div>
              
              <div className='mt-4'>{team.score}</div>
              <div>
              <div className='flex'>
                <div><button className='m-2' onClick={() => handleIncreaseScore(team.dept, 5)}>I</button></div>
                <div><button className='m-2' onClick={() => handleIncreaseScore(team.dept, 3)}>II</button></div>
                <div><button className='m-2' onClick={() => handleIncreaseScore(team.dept, 1)}>III</button></div>
              </div>
              </div>
              <div className='flex h-[100%] items-center'>
                <div className='flex'>
                <div><button className='m-2' onClick={() => handleIncreaseScore(team.dept, 10)} >I</button></div>
                <div><button className='m-2' onClick={() => handleIncreaseScore(team.dept, 6)}>II</button></div>
                <div><button className='m-2' onClick={() => handleIncreaseScore(team.dept, 2)}>III</button></div>
                </div>
              </div>
              <div className='m-2'><button onClick={() => handleDecreaseScore(team.dept)}>-</button></div>
              
            </div>
          ))}
      </div>
      <div className='flex'>
        <div className='flex flex-grow'><button className='fixed bg-[#ff0000] m-2' onClick={() => handleLogout()}>Log Out</button></div>
        <div className='m-2'><button onClick={() => saveScore(teams)} className='bg-[#00ff00] text-black'>Save Changes</button></div>
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
