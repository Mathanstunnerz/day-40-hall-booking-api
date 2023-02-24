import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import express from "express";
const PORT = process.env.PORT;
console.log(process.env.PORT);
const app = express();

const room = {
  NumberofSeatsavailable: 400,
  amenities_in_room: "A/C,Attached bathroom,Per Room 4 people",
  Price_1_hour: 3000,
};
const data = [
  {
    Roomname: "dheesha reception hall",
    booked_status: "booked",
    customer_name: "Mathan",
    Date: "1/03/2023",
    Start_time: "8AM",
    End_time: "1PM",
  },
  {
    Roomname: "dheesha reception hall",
    booked_status: "booked",
    customer_name: "kumar",
    Date: "3/03/2023",
    Start_time: "10AM",
    End_time: "12PM",
  },
  {
    Roomname: "dheesha reception hall",
    booked_status: "booked",
    customer_name: "Ragav",
    Date: "5/03/2023",
    Start_time: "9AM",
    End_time: "5PM",
  },
  {
    Roomname: "dheesha reception hall",
    booked_status: "booked",
    customer_name: "Madhubalan",
    Date: "10/03/2023",
    Start_time: "3PM",
    End_time: "10PM",
  },
  {
    Roomname: "dheesha reception hall",
    booked_status: "booked",
    customer_name: "Karthick",
    Date: "12/03/2023",
    Start_time: "5pM",
    End_time: "9PM",
  },
  {
    Roomname: "dheesha reception hall",
    booked_status: "booked",
    customer_name: "shayad",
    Date: "12/03/2023",
    Start_time: "7AM",
    End_time: "1PM",
  },
  {
    Roomname: "dheesha reception hall",
    booked_status: "booked",
    customer_name: "kumaran",
    Date: "15/03/2023",
    Start_time: "8AM",
    End_time: "2PM",
  },
  {
    Roomname: "dheesha reception hall",
    booked_status: "booked",
    customer_name: "rubynathan",
    Date: "20/03/2023",
    Start_time: "6PM",
    End_time: "12AM",
  },
];

app.get("/Alldata", function (request, response) {
  response.send(data);
});
app.get("/customerbookings", function (request, response) {
  const obj = data.map(
    ({ Roomname, customer_name, Date, Start_time, End_time }) => {
      const fg = {
        Roomname: Roomname,
        customer_name: customer_name,
        Date: Date,
        Start_time: Start_time,
        End_time: End_time,
      };
      return fg;
    }
  );
  response.send(obj);
});
app.get("/hallfacilities", function (request, response) {
  const obj = room;
  response.send(obj);
});

app.post("/hallbook", express.json(), function (request, response) {
  let countd = 0;
  const ty = request.body;
  const fhj = "already exists";
  data.filter(({ Date, Start_time, End_time }) => {
    if (
      Date === ty.Date &&
      Start_time === ty.Start_time &&
      End_time === ty.End_time
    ) {
      countd++;
    }
  });
  if (countd == 0) {
    data.push(ty);
    response.send("data added");
  } else {
    response.send(fhj);
  }

  console.log(ty);
  console.log(countd);
});

app.listen(PORT, () => console.log("SERVER IS CONNECTED"));

// http://localhost:4545
