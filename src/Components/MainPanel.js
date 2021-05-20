import React from 'react'
import Settings from './Settings'

const MainPanel = ({dash, toggleTheme, toggleLanguage}) => {
		const wr = (dash === 'graph') ? "<LineDemo chart={chart}  />" : (dash === 'settings') ? <Settings toggleTheme={toggleTheme} toggleLanguage={toggleLanguage}/> : ''
    
        return (
          
          <div className="p-2 mb-4 rounded-3" id={dash}>
                {wr}
          </div>
		)
}

export default MainPanel