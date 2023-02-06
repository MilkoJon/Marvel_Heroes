import React from "react";
import "./CardSearch.scss";
import { numberOfTeamMembers } from "../../constants/Constants";
import { Link, useHistory } from "react-router-dom";
import AlertDialog from "../AlertDialog/AlertDialog";


function CardSearch({
  hero,
  teamMembers,
  setTeamMembers,
  teamData,
  setTeamData,
  setPage,
}) {

  const history = useHistory();

  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState('')
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div id="cardSearch">
      <AlertDialog open={open} setOpen={setOpen} handleClose={handleClose} message={message}/>
      <h5 className="name">{hero.name}</h5>
      <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}></img>
      <div>
        {/* <Link to={`/single-hero/${hero.id}`}>
          Info
        </Link> */}
        <button className="btnLeft"
          onClick={() =>
            history.push(`/single-hero/${hero.id}`, setPage("singleHero"))
          }
        >
          Info
        </button>
        {/* <Modal/> */}
        <button className="btnRight"
          onClick={() => {
            // console.log("onClick add team member" + teamMembers);
            if (teamMembers.length >= numberOfTeamMembers) {
              console.log("reached max team members. create modal for message");
              setMessage("Reached maximum team members");
              handleClickOpen();
            } else if (teamMembers.find((e) => e === hero.id)) {
              console.log("this hero is already selected in your team");
              setMessage("This hero is already selected in your team");
              handleClickOpen();
            } else {
              setTeamMembers([...teamMembers, hero.id]);
              setTeamData([...teamData, hero]);
            }
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default CardSearch;
