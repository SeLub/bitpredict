import React from 'react'
import Settings from './Settings'
import Joombatron from './Joombatron'
import LineDemo from './Graph'

const MainPanel = ({dash, toggleTheme, chart, setDash}) => {
		const wr = (dash === 'graph') ? <LineDemo chart={chart}  /> : (dash === 'settings') ? <Settings toggleTheme={toggleTheme}/> : <Joombatron setDash={setDash}/>
    
        return (
          
          <div className="p-2 mb-4 rounded-3" id={dash}>
                {wr}
          </div>
		)
}

export default MainPanel