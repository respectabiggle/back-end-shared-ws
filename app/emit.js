import { log } 					from 'console'


import { createServer }			from 'http'
const httpServer 				= createServer()
httpServer						.listen(3000)

import { Server } 				from 'socket.io'
const io		 				= new Server(httpServer)

import { WebSocket } 			from 'ws'
const ws 						= new WebSocket('wss://ws.coincap.io/prices?assets=ethereum')





export const emit = async function (){

	log('emitting')





    ws.on('message', (event) => {


        let data = JSON.parse(event)
		log(data) 					
                
        io.emit('test', data)



    }) 



}


