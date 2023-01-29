import React from 'react'
import {Chip, Divider} from '@mui/material';
import { MuiTypography } from './material-ui/MuiTypography'
import { MuiButton } from './material-ui/MuiButton';
import { MuiTextField } from './material-ui/MuiTextField';
import { MuiSelect } from './material-ui/MuiSelect';
import { MuiRadioButton } from './material-ui/MuiRadioButton';
import { MuiCheckBox } from './material-ui/MuiCheckBox';
import { MuiSwitch } from './material-ui/MuiSwitch';
import { MuiRating } from './material-ui/MuiRating';
import { MuiAutocomplete } from './material-ui/MuiAutoComplete';
import { MuiLayout } from './material-ui/MuiLayout';
import { MuiCard } from './material-ui/MuiCard';
import { MuiAccordion } from './material-ui/MuiAccordion';
import { MuiImageList } from './material-ui/MuiImageList';
import { MuiNavbar } from './material-ui/MuiNavbar';
import { MuiLink } from './material-ui/MuiLink';
import { MuiBreadCrumbs } from './material-ui/MuiBreadCrumbs';
import { MuiDrawer } from './material-ui/MuiDrawer';
import { MuiSpeedDial } from './material-ui/MuiSpeedDial';
import { MuiBottomNavigation } from './material-ui/MuiBottomNavigation';
import { MuiAvatar } from './material-ui/MuiAvatar';
import { MuiBadge } from './material-ui/MuiBadge';
import { MuiList } from './material-ui/MuiList';
import { MuiChip } from './material-ui/MuiChip';
import { MuiToolTip } from './material-ui/MuiToolTip';
import { MuiTable } from './material-ui/MuiTable';
import { MuiAlert } from './material-ui/MuiAlert';
import { MuiSnackBar } from './material-ui/MuiSnackBar';
import { MuiDialog } from './material-ui/MuiDialogue';
import { MuiProgress } from './material-ui/MuiProgress';
import { MuiSkeleton } from './material-ui/MuiSkeleton';

const MaterialUi = () => {
  return (
    <>
      <Divider><Chip label='Typography'/></Divider>
      <MuiTypography/>
      <Divider><Chip label='Button, ButtonGroup, ToggleButton'/></Divider>
      <MuiButton/>
      <Divider><Chip label='Text Field'/></Divider>
      <MuiTextField/>
      <Divider><Chip label='Select'/></Divider>     
      <MuiSelect/>
      <Divider><Chip label='Radio Button'/></Divider>
      <MuiRadioButton/>
      <Divider><Chip label='Checkbox'/></Divider>
      <MuiCheckBox/>
      <Divider><Chip label='Switch'/></Divider>
      <MuiSwitch/>
      <Divider><Chip label='Rating'/></Divider>
      <MuiRating/>
      <Divider><Chip label='Auto Complete'/></Divider>
      <MuiAutocomplete/>
      <Divider><Chip label='Layout (Box, Stack, Grid, Paper)'/></Divider>
      <MuiLayout/>
      <Divider><Chip label='Card'/></Divider>
      <MuiCard/>
      <Divider><Chip label='Accordion'/></Divider>
      <MuiAccordion/>
      <Divider><Chip label='Image List'/></Divider>
      <MuiImageList/>
      <Divider><Chip label='Navbar (Appbar, Toolbar, Menu)'/></Divider>
      <MuiNavbar/>
      <Divider><Chip label='Link'/></Divider>
      <MuiLink/>
      <Divider><Chip label='Breadcrumbs'/></Divider>
      <MuiBreadCrumbs/>
      <Divider><Chip label='Drawer'/></Divider>
      <MuiDrawer/>
      <Divider><Chip label='Speeddial'/></Divider>
      <MuiSpeedDial/>
      <Divider><Chip label='Bottom Navigation'/></Divider>
      <MuiBottomNavigation/>
      <Divider><Chip label='Avatar'/></Divider>
      <MuiAvatar/>
      <Divider><Chip label='Badge'/></Divider>
      <MuiBadge/>
      <Divider><Chip label='List'/></Divider>
      <MuiList/>
      <Divider><Chip label='Chip'/></Divider>
      <MuiChip/>
      <Divider><Chip label='Tooltip'/></Divider>
      <MuiToolTip/>
      <Divider><Chip label='Table'/></Divider>
      <MuiTable/>
      <Divider><Chip label='Alert'/></Divider>
      <MuiAlert/>
      <Divider><Chip label='Snackbar'/></Divider>
      <MuiSnackBar/>
      <Divider><Chip label='Dialogue'/></Divider>
      <MuiDialog/>
      <Divider><Chip label='Progress'/></Divider>
      <MuiProgress/>
      <Divider><Chip label='Skeleton'/></Divider>
      <MuiSkeleton/>
    </>
  )
}

export default MaterialUi