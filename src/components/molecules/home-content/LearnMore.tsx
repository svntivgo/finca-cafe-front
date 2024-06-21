import React from 'react';
import { VideoContainer } from '.';
import { SECTION_TITLE_FONT_STYLE, Paragraph } from '../../atoms';

export const LearnMore: React.FC = () => {
  return (
    <>
      <Paragraph
        style={{
          ...SECTION_TITLE_FONT_STYLE,
        }}
        text="CONOCE MÁS"
      />
      <VideoContainer>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/kAa5jO0paC8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          allowFullScreen
        ></iframe>
      </VideoContainer>
    </>
  );
};
