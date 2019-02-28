import React from 'react';
import Bosses from './metroidbosses';


-

class SingleBoss extends React.Component {
    render() {
        return (
                <div>
                    {Bosses.map((boss, index) => {
                        return <h1>{boss.name}</h1>
                        })}

                </div>
                
        )
    }
}


export default SingleBoss;