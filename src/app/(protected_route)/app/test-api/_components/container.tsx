import React from "react";

type Props = {
  data?: any;
};

const Container: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data && (
        <div className=" bg-black text-white p-2 px-5 rounded-md ">
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </>
  );
};

export default Container;
