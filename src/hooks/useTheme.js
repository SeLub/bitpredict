import {useState, useEffect} from 'react'

const useTheme = () => {
	
	const [theme, setTheme] = useState('ligth')

	const toggleTheme = () => {
		//(theme == 'dark') ? (localStorage.setItem('theme', 'light'), setTheme('light')) : (localStorage.setItem('theme', 'dark'), setTheme('dark'))
		if (theme === 'dark') {localStorage.setItem('theme', 'light'); setTheme('light')} 
		else {localStorage.setItem('theme', 'dark'); setTheme('dark')}
		  console.log(theme)
	}


	useEffect( () => {
		const localTheme =  localStorage.getItem('theme')
		if (localTheme){ setTheme(localTheme)}
		}
	,[])
	
	return [theme,toggleTheme]
}

export default useTheme