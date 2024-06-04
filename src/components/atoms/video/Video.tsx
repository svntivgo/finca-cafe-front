import React from "react";

export const Video: React.FC<{src: string}> = (props) => {
  return (
    <div style={{width: '100%'}}
      dangerouslySetInnerHTML={{
        __html: `
        <video style="width: inherit;" autoPlay muted loop>
            <source src=${props.src} />
        </video>
      `,
      }}
    ></div>
  );
};
