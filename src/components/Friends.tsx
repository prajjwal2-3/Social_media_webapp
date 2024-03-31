import React, { useState } from "react";
import { useSelector } from "react-redux";
import Usersuggestion from "./Usersuggestion.tsx";
import { Button } from "@mui/material";
const Friends = () => {
  const [page, setpage] = useState("");
  interface RootState {
    user: {
      user: {
        username: string;
        password: string;
      };
    };
    suggested: {
      suggesteduser: any[];
    };
  }
  const suggestion = useSelector(
    (state: RootState) => state?.suggested?.suggesteduser
  );
  if (suggestion === null) return <div className="">loading....</div>;
  return (
    <div className="h-screen bg-gray-800 flex flex-col">
      <div className="w-full justify-center flex flex-row ">
        <div className="m-2">
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              setpage("friends");
            }}
          >
            Friends
          </Button>
        </div>
        <div className="m-2">
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              setpage("suggested");
            }}
          >
            Suggested
          </Button>
        </div>
        <div className="m-2">
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              setpage("Sent");
            }}
          >
            Sent
          </Button>
        </div>
        <div className="m-2">
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              setpage("Pending");
            }}
          >
            Pending
          </Button>
        </div>
      </div>
      {page === "suggested" ? (
        <div className="  w-full  overflow-y-scroll overflow-x-hidden  p-4 ">
          <div className="w-full text-center font-bold text-xl m-2 text-white">
            You may Know them
          </div>
          <div className="w-full h-0.5 bg-gray-100"></div>
          <div className="">
            {suggestion.map((e, index) => (
              <Usersuggestion info={e} key={index} />
            ))}
          </div>
        </div>
      ) :page=== "Pending" ? (
        <div className="bg-blue-900">Pending request</div>
      ) :page=== "Sent" ? (
        <div className="bg-blue-700">Sent request</div>
      ) : (
        <div className="bg-blue-600">Friends</div>
      )}
    </div>
  );
};

export default Friends;
