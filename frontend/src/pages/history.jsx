// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../contexts/AuthContext";
// import { useNavigate } from "react-router-dom";
// import Card from "@mui/material/Card";
// import Box from "@mui/material/Box";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import HomeIcon from "@mui/icons-material/Home";

// import { IconButton } from "@mui/material";
// export default function History() {
//   const { getHistoryOfUser } = useContext(AuthContext);

//   const [meetings, setMeetings] = useState([]);

//   const routeTo = useNavigate();

//   useEffect(() => {
//     const fetchHistory = async () => {
//       try {
//         const history = await getHistoryOfUser();
//         setMeetings(history);
//       } catch {
//         // IMPLEMENT SNACKBAR
//       }
//     };

//     fetchHistory();
//   }, []);

//   let formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const day = date.getDate().toString().padStart(2, "0");
//     const month = (date.getMonth() + 1).toString().padStart(2, "0");
//     const year = date.getFullYear();

//     return `${day}/${month}/${year}`;
//   };

//   return (
//     <div>
//       <IconButton
//         onClick={() => {
//           routeTo("/home");
//         }}
//       >
//         <HomeIcon />
//       </IconButton>
//       {meetings.length !== 0 ? (
//         meetings.map((e, i) => {
//           return (
//             <>
//               <Card key={i} variant="outlined">
//                 <CardContent>
//                   <Typography
//                     sx={{ fontSize: 14 }}
//                     color="text.secondary"
//                     gutterBottom
//                   >
//                     Code: {e.meetingCode}
//                   </Typography>

//                   <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                     Date: {formatDate(e.date)}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </>
//           );
//         })
//       ) : (
//         <></>
//       )}
//     </div>
//   );
// }

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import HomeIcon from "@mui/icons-material/Home";

export default function History() {
  const { getHistoryOfUser } = useContext(AuthContext);

  const [meetings, setMeetings] = useState([]);

  const routeTo = useNavigate();

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const history = await getHistoryOfUser();

        console.log("History received:", history);

        setMeetings(history || []);
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };

    fetchHistory();
  }, [getHistoryOfUser]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      return "Invalid date";
    }

    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <Box sx={{ padding: "20px" }}>
      {/* Home Button */}
      <IconButton
        onClick={() => {
          routeTo("/home");
        }}
        sx={{ marginBottom: "20px" }}
      >
        <HomeIcon />
      </IconButton>

      {/* Heading */}
      <Typography variant="h4" sx={{ marginBottom: "20px" }}>
        Meeting History
      </Typography>

      {/* History */}
      {meetings.length !== 0 ? (
        meetings.map((meeting, index) => (
          <Card
            key={meeting._id || meeting.id || index}
            sx={{
              marginBottom: "15px",
              maxWidth: "600px",
            }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Meeting
              </Typography>

              <Typography variant="h6" component="div">
                Code: {meeting.meetingCode}
              </Typography>

              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Date: {formatDate(meeting.date)}
              </Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography color="text.secondary">
          No meeting history found.
        </Typography>
      )}
    </Box>
  );
}
