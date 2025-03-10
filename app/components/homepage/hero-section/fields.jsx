import React from "react";

export function FieldsOfInterest({ fields }){
  return (
    <>
      <span className="text-sky-400">fieldsOfInterests: </span>
      <span className="text-gray-400">{`['`}</span>
      {fields.map((field, index) => (
        <React.Fragment key={index}>
          <span className="text-amber-300">{field}</span>
          {index < fields.length - 1 ? (
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
