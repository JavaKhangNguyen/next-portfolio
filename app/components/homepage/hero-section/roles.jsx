import React from "react";

export function RolesOfInterest({ roles }){
  return (
    <>
      <span className="text-sky-400">rolesOfInterests: </span>
      <span className="text-gray-400">{`['`}</span>
      {roles.map((role, index) => (
        <React.Fragment key={index}>
          <span className="text-amber-300">{role}</span>
          {index < roles.length - 1 ? (
            <span className="text-gray-400">{"', '"}</span>
          ) : (
            <span className="text-gray-400">{"'"}</span>
          )}
        </React.Fragment>
      ))}
      <span className="text-gray-400">{"]"}</span>
    </>
  );
}
