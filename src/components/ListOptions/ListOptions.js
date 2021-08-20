import React, { useState } from 'react';
import {
  EuiButton,
  EuiContextMenu,
  EuiPopover,
} from '@elastic/eui';
import './ListOptions.css'

const ListOptions = () => {
  const [isPopoverOpen, setPopover] = useState(false);

  const onButtonClick = () => {
    setPopover(!isPopoverOpen);
  };

  const closePopover = () => {
    setPopover(false);
  };

  const panels = [
    {
      id: 0,
      title: 'Nuestros Servicios',
      items: [
        {
          name: 'Inflables',
          /* icon: 'wrench', */
          panel: 1,
        },
        {
          name: 'Juegos de Salon',
          panel: 2,
        },
        {
          name: 'Juegos de Living',
          panel: 3,
        },
      ],
    },
    {
      id: 1,
      title: 'Inflables',
      items: [
        {
          name: 'Castillos',
          onClick: () => {
            closePopover();
          },
        },
        {
            name: 'Castillos con Rampa',
            onClick: () => {
              closePopover();
            },
          },
          {
            name: 'Carrera de Obstaculos',
            onClick: () => {
              closePopover();
            },
          },
          {
            name: 'Acuaticos',
            onClick: () => {
              closePopover();
            },
          },
          {
            name: 'Deportivos',
            onClick: () => {
              closePopover();
            },
          },
      ],
    },
    {
      id: 1,
      title: 'Inflables',
      items: [
        {
          name: 'Castillos',
          onClick: () => {
            closePopover();
          },
        },
        {
            name: 'Castillos con Rampa',
            onClick: () => {
              closePopover();
            },
          },
          {
            name: 'Carrera de Obstaculos',
            onClick: () => {
              closePopover();
            },
          },
          {
            name: 'Acuaticos',
            onClick: () => {
              closePopover();
            },
          },
          {
            name: 'Deportivos',
            onClick: () => {
              closePopover();
            },
          },
      ],
    },
    {
        id: 2,
        title: 'Juegos de Salon',
        items: [
          {
            name: 'Metegol',
            onClick: () => {
              closePopover();
            },
          },
          {
            name: 'Tejo de Aire',
            onClick: () => {
              closePopover();
              },
            },
            {
              name: 'Pool',
              onClick: () => {
                closePopover();
              },
            },
            {
              name: 'Ping Pong',
              onClick: () => {
                closePopover();
              },
            },
            {
                name: 'Sapo',
                onClick: () => {
                    closePopover();
                },
            },
            {
                name: 'Jenga',
                onClick: () => {
                    closePopover();
                },
            },
        ],
      },
      {
        id: 3,
        title: 'Juegos de Living',
        items: [
          {
            name: 'Livings para Chicos',
            onClick: () => {
              closePopover();
            },
          },
          {
            name: 'Livings para Adultos',
            onClick: () => {
              closePopover();
            },
          },
        ],
      },
  ];

  const button = (
    <div className="option">
        <EuiButton iconType="arrowDown" iconSide="right" onClick={onButtonClick}>
            Servicios
        </EuiButton>
    </div>
    
  );

  return (
    <EuiPopover
      id="contextMenuExample"
      button={button}
      isOpen={isPopoverOpen}
      closePopover={closePopover}
      panelPaddingSize="none"
      anchorPosition="downLeft">
      <EuiContextMenu initialPanelId={0} panels={panels} />
    </EuiPopover>
  );
};

export default ListOptions;