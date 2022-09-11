import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import arch from "../Untitled-1.jpg";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  background: "rgb(41, 41, 41)",
  flexDirection: "row-reverse",
  color: "#8892b0",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  background: "rgb(41, 41, 41)",
  color: "white",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>1. About</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This application was intended to use in restaurant enviroments. As a
            manager of a restaurant, you can easily create new menus, meals and
            reservations.
            <p>
              When creating new reservation you can specify customer details,
              reservation details, which tables to choose and which meals from
              menus to add. After completing new reservation, dashboard checks
              all the reservations from the mysql DB and calculate some basic
              informations. In the reservations page you can see all reservation
              that have been made. You can also edit or delete them. Page is
              switchable between timetable and list. In menus page you can
              create or delete new Menus and meals so when you create new
              reservation, they will be avaiable to choose from there.
            </p>
            There are many more things I will implement in future but this alone
            took me about one month to complete.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>2. What ive used To built this application</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            First I needed to learn react. Since I had some knowledge in html
            css and JS it wasnt that hard to learn it. Also I had knowledge
            about java but I have never used spring boot so that was another
            technology i needed to look up. After studying for approx. 10 days
            both of the technologies, implementation phase has begun. At
            frontend-React side I have used: useState useEffect, reusable
            components, conditional rendering useContext, useReducer,
            reactRouter, different libraries such as material ui, timetable,
            etc..
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>3. Architecture</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <img className="imgA" src={arch} alt="" />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
