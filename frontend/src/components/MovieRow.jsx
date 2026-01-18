import { IconButton, TableCell, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { memo } from "react";
import { Link } from "react-router-dom";

export const MovieRow = memo(({ movie, onDelete }) => (
  <TableRow hover>
    <TableCell component="th" scope="row" sx={{ fontWeight: 500 }}>
      {movie.title}
    </TableCell>
    <TableCell align="center">{movie.rating?.toFixed(1)}</TableCell>
    <TableCell align="center">
      <IconButton
        component={Link}
        to={`/admin/edit/${movie._id}`}
        color="primary"
        sx={{ mr: 1 }}
      >
        <EditIcon />
      </IconButton>
      <IconButton onClick={() => onDelete(movie._id)} color="error">
        <DeleteIcon />
      </IconButton>
    </TableCell>
  </TableRow>
));