import React, { useState } from "react";
import { useSelector } from "react-redux";
import Usersuggestion from "./Usersuggestion.tsx";
import { Button } from "@mui/material";
import Friendcard from "./Friendcard.tsx";
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
      friends:{
        pending:any[];
        sent:any[];
        friends:any[]
      }
    };
  }
  const suggestion = useSelector(
    (state: RootState) => state?.suggested?.suggesteduser
  );
  const pending = useSelector(
    (state:RootState)=>state?.suggested?.friends?.pending
  );
  const sent = useSelector(
    (state:RootState)=>state?.suggested?.friends?.sent
  );
  const friends = useSelector(
    (state:RootState)=>state?.suggested?.friends?.friends
  );
  if (suggestion === null || pending === null || sent === null || friends === null) return <div className="">loading....</div>
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
            {suggestion?.map((e, index) => (
              <Usersuggestion info={e} key={index} />
            ))}
          </div>
        </div>
      ) :page=== "Pending" ? (
        <div className="  w-full  overflow-y-scroll overflow-x-hidden  p-4 ">
        <div className="w-full text-center font-bold text-xl m-2 text-white">
          Pending Request
        </div>
        <div className="w-full h-0.5 bg-gray-100"></div>
        <div className="">
          {pending?.map((e, index) => (
            <Friendcard info={e} key={index} />
          ))}
        </div>
      </div>
      ) :page=== "Sent" ? (
        <div className="  w-full  overflow-y-scroll overflow-x-hidden  p-4 ">
        <div className="w-full text-center font-bold text-xl m-2 text-white">
          Sent Request
        </div>
        <div className="w-full h-0.5 bg-gray-100"></div>
        <div className="">
          {sent?.map((e, index) => (
            <Friendcard info={e} key={index} />
          ))}
        </div>
      </div>
      ) : page=== "friends" ?(
        <div className="  w-full  overflow-y-scroll overflow-x-hidden  p-4 ">
        <div className="w-full text-center font-bold text-xl m-2 text-white">
          Friends
        </div>
        <div className="w-full h-0.5 bg-gray-100"></div>
        <div className="">
          {friends?.map((e, index) => (
            <Friendcard info={e} key={index} />
          ))}
        </div>
      </div>
      ):(
        <div className="  w-full  overflow-y-scroll overflow-x-hidden  p-4 ">
          <div className="w-full text-center font-bold text-xl m-2 text-white">
            You may Know them
          </div>
          <div className="w-full h-0.5 bg-gray-100"></div>
          <div className="">
            {suggestion?.map((e, index) => (
              <Usersuggestion info={e} key={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Friends;
