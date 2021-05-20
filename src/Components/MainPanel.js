import React from 'react'
import Settings from './Settings'
import Joombatron from './Joombatron'

const MainPanel = ({dash, toggleTheme}) => {
		const wr = (dash === 'graph') ? "<LineDemo chart={chart}  />" : (dash === 'settings') ? <Settings toggleTheme={toggleTheme}/> : <Joombatron />
    
        return (
          
          <div className="p-2 mb-4 rounded-3" id={dash}>
                {wr}
          </div>
		)
}

export default MainPanel