import React from 'react';
import { Paragraph, Image, SECTION_TITLE_FONT_STYLE } from '../../atoms';
import { SectionLogoTitleProps } from '.';

export const SectionLogoTitle: React.FC<SectionLogoTitleProps> = (props) => {
  return (
    <>
      <Image
        src={props.logo}
        style={{ width: '160px', margin: '-5rem auto 0 auto' }}
      />
      <Paragraph style={SECTION_TITLE_FONT_STYLE} text={props.title} />
    </>
  );
};
