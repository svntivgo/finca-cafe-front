import React from 'react';
import { Icon } from '../../atoms';
import LogoWhatsapp from '../../../assets/whatsapp.png';
import { WhatsappContainerStyled } from '..';
import { openNewTab } from '../../../shared/helper/open-new-tab';

export const Whatsapp: React.FC = () => {
  return (
    <WhatsappContainerStyled>
      <Icon
        src={LogoWhatsapp}
        width="24px"
        onClick={() =>
          openNewTab('https://api.whatsapp.com/send?phone=573178000001')
        }
      />
    </WhatsappContainerStyled>
  );
};
