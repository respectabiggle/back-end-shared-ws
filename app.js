import { log } 		from 'console'


import { emit } 	from './app/emit.js'
import { listen } 			from './app/listen.js'




let app = async function(){

	await emit()
	await listen() 




}
app()

