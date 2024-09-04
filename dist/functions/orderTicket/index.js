"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const responses_1 = require("../responses");
// Mock data for events
const events = [
    {
        id: 1,
        artist: "Lasse-Stefans",
        date: new Date("2023-03-21"),
        arena: "Kjell Härnqvistsalen",
        time: "19.00 - 21.00",
        price: 350,
    },
    {
        id: 2,
        artist: "Pelle trubadur",
        date: new Date("2023-03-29"),
        arena: "Pubelipub",
        time: "22.00 - 00.00",
        price: 110,
    },
    {
        id: 3,
        artist: "Kajsas kör",
        date: new Date("2023-04-10"),
        arena: "Götaplatsen",
        time: "15.00 - 16.00",
        price: 99,
    },
    {
        id: 4,
        artist: "Klubb Untz",
        date: new Date("2023-04-17"),
        arena: "Din favoritkällare",
        time: "22.00 - du tröttnar",
        price: 150,
    },
];
const generateTicketNumber = () => {
    return Math.floor(Math.random() * 100000000)
        .toString()
        .padStart(8, "0");
};
const handler = async (event) => {
    const { id } = JSON.parse(event.body || "{}");
    // Kontrollera om evenemanget finns
    const eventDetails = events.find((e) => e.id === id);
    if (!eventDetails) {
        return (0, responses_1.errorResponse)("Event not found");
    }
    const ticketNumber = generateTicketNumber();
    return (0, responses_1.successResponse)({
        message: "Ticket successfully generated",
        ticketNumber,
        eventDetails,
    });
};
exports.handler = handler;
