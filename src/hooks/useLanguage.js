import {useState, useEffect} from 'react'

const useLanguage = () => {
	
	const [language, setLanguage] = useState('ENG')

	const toggleLanguage = () => {
		if (language === 'ENG') {localStorage.setItem('language', 'RU'); setLanguage('RU')} 
		else {localStorage.setItem('language', 'ENG'); setLanguage('ENG')}
		  console.log(language)
	}


	useEffect( () => {
		const localLanguage =  localStorage.getItem('language')
		if (localLanguage){ setLanguage(localLanguage)}
		}
	,[])
	
	return [language,toggleLanguage]
}

export default useLanguage