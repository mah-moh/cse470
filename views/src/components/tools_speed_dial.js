import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import Swatch from './swatch.js';

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));



function handlePencil({ setToolType }) {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div>
              <button
                title="Pencil"
                onClick={() => {
                  setToolType("pencil");
                }}
              >
                Pencil
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy', action: handlePencil, operation: 'pencil' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

function handleClick (e,operation){
    e.preventDefault();
    if(operation=="pencil"){
      handlePencil();
    }else if(operation=="drawing"){
      //do something else
    }
  };

export default function PlaygroundSpeedDial() {
  const [direction, setDirection] = React.useState('Down');
  const [hidden, setHidden] = React.useState(false);

  const handleDirectionChange = (event) => {
    setDirection(event.target.value);
  };

  const handleHiddenChange = (event) => {
    setHidden(event.target.checked);
  };

  return (
    <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
      
      <Box sx={{ position: 'relative', mt: 3, height: 320 }}>
        <StyledSpeedDial
          ariaLabel="SpeedDial playground example"
          hidden={hidden}
          icon={<SpeedDialIcon />}
          direction={direction}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={(e) => handleClick(e.action.operation)}
            />
          ))}
        </StyledSpeedDial>
      </Box>
    </Box>
  );
}
