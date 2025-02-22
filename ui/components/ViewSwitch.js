import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import GridOnIcon from "@material-ui/icons/GridOn";
import TableChartIcon from "@material-ui/icons/TableChart";

function ViewSwitch({ view, changeView }) {
  console.log(view)
  return (
    <ToggleButtonGroup
      size="small"
      value={view}
      exclusive
      onChange={(_, newView) => changeView(newView)}
      aria-label="Switch View"
    >
      <ToggleButton value="grid" data-cy="grid-view">
        <GridOnIcon />
      </ToggleButton>
      <ToggleButton value="table" data-cy="table-view">
        <TableChartIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default ViewSwitch