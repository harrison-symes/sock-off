import {combineReducers} from 'redux'

import socket from './socket'
import votes from './votes'
import gameInfo from './gameInfo'
import room from './room'
import rooms from './rooms'

export default combineReducers({
  socket,
  votes,
  gameInfo,
  room,
  rooms
})
