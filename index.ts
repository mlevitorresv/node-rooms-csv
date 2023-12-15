import fs from 'fs'
import { RoomInterface } from './interface/RoomInterface';
const fileContent: string = fs.readFileSync('./data/rooms.JSON', 'utf-8');
const rooms: RoomInterface[] = JSON.parse(fileContent);

rooms.sort((a: RoomInterface, b: RoomInterface) => a.price - b.price)

const csvContent = rooms.map((room) => {
    return `
    ${room.photo}, ${room.id}, ${room.type}, ${room.bed}, ${room.amenities}, 
    ${room.description}, ${room.rate}, ${room.price}, ${room.discount}, ${room.available} 
    `
}).join('\n')
fs.writeFileSync('./data/rooms.csv', `photo, id, type, bed, amenities, description, rate, price, discount, available\n${csvContent}`, 'utf-8');
