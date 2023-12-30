const urlParams = new URLSearchParams(window.location.search);

const username = urlParams.get("username");

const room = urlParam.get("room");

console.log(username, room);

const socket = io("http://localhost:8080/user", {transports:["websockets"]});





