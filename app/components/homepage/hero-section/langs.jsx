import React from "react";
import Flag from "react-flagkit";
export function LangsOfComms({ langs }){
  return (
    <>
      <span className="text-red-400">langsOfComms: </span>
      {langs.map((lang, index) => (
        <React.Fragment key={index}>
          <span className="inline-block"><Flag country={lang} className="mx-1"/></span>
        </React.Fragment>
      ))}
    </>
  );
}
