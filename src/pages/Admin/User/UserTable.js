import React, { useEffect, useState } from "react";
import { Typography, Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {
  Box,
  Card,
  Container,
  IconButton,
  TableFooter,
  TablePagination,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import Axios from "axios";
import TablePaginationActions from "@material-ui/core/TablePagination/TablePaginationActions";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Paper from "@material-ui/core/Paper";


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  root: {
    height: "100%",
    paddingTop: "30px",
  },
});

function userTable() {
  const classes = useStyles();

  const [data, setData] = useState([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
    const userList = async () => {

      const user = await Axios.get("http://localhost:3003/users/user",{
          headers:{
              "Authorization":"Bearer "+localStorage.getItem("auth_token")
          }
      })
      setData(user.data.userInfo)
      console.log(user.data.userInfo) 
    };

    useEffect(() => {
      userList()
    }, []);

  //   const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    const handleOpenDeleteDialog = (user) => {
      setSelectedUser(user);
      setDeleteDialogOpen(true);
    };
  
    const handleCloseDeleteDialog = () => {
      setDeleteDialogOpen(false);
      setSelectedUser(null);
    };
  
    const handleConfirmDelete = async () => {
      try {
        // Perform the delete operation using the selectedUser._id
        await Axios.delete(`http://localhost:3003/users/delete/${selectedUser._id}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("auth_token"),
          },
        });
  
        // Close the dialog and refresh the user list
        setDeleteDialogOpen(false);
        setSelectedUser(null);
        userList();
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    };



  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <Container className={classes.root}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow className="bg-dark ">
              <TableCell align="center" className="text-light">
                Role
              </TableCell>
              <TableCell align="center" className="text-light">
                 Name
              </TableCell>
              <TableCell align="center" className="text-light">
                Email
              </TableCell>

              <TableCell align="center" className="text-light">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : data
            ).map((row) => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row" align="center">
                  {row.role}
                </TableCell>

                <TableCell align="center">{row.userName}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell className="" align="center">
                  <IconButton>
                    <EditIcon color="primary" />
                  </IconButton> 
                  <IconButton onClick={() => handleOpenDeleteDialog(row)}>
                    <DeleteIcon style={{ color: "red" }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 7, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{ 
                  inputProps: { "aria-label": "rows per page" },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
             {/* Delete Confirmation Dialog */}
             <Dialog
            open={deleteDialogOpen}
            onClose={handleCloseDeleteDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Delete User?"}</DialogTitle>
            <DialogContent>
              <Typography variant="body1">
                Are you sure you want to delete the user?
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDeleteDialog} color="primary">
                Cancel
              </Button>
              <Button onClick={handleConfirmDelete} color="primary" autoFocus>
                Confirm
              </Button>
            </DialogActions>
          </Dialog>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default userTable;
