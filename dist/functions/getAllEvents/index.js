"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const events = [
    {
        id: 1,
        artist: "Lasse-Stefans",
        date: new Date("2023-03-21"), // Changed to Date object
        arena: "Kjell Härnqvistsalen",
        time: "19.00 - 21.00",
        price: 350, // Changed to number
    },
    {
        id: 2,
        artist: "Pelle trubadur",
        date: new Date("2023-03-29"), // Changed to Date object
        arena: "Pubelipub",
        time: "22.00 - 00.00",
        price: 110, // Changed to number
    },
    {
        id: 3,
        artist: "Kajsas kör",
        date: new Date("2023-04-10"), // Changed to Date object
        arena: "Götaplatsen",
        time: "15.00 - 16.00",
        price: 99, // Changed to number
    },
    {
        id: 4,
        artist: "Klubb Untz",
        date: new Date("2023-04-17"), // Changed to Date object
        arena: "Din favoritkällare",
        time: "22.00 - du tröttnar",
        price: 150, // Changed to number
    },
];
const handler = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({ events }),
    };
};
exports.handler = handler;
