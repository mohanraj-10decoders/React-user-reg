import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@mui/material';

function AllUsers({ users, setUsers }) {
  const styles = {
    fontWeight: 'bold',
    color: 'rgb(23, 43, 77)',
    backgroundColor: 'lightblue',
  };
  return (
    <div>
      {users.length ? (
        <Button onClick={() => setUsers([])}>DELETE ALL</Button>
      ) : (
        <></>
      )}
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={styles}>Name</TableCell>
              <TableCell style={styles}>Email</TableCell>
              <TableCell style={styles}>Phone</TableCell>
              <TableCell style={styles}>City</TableCell>
              <TableCell style={styles}>Country</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.length ? (
              <>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell align='left'>
                      {user.firstName + ' ' + user.lastName}
                    </TableCell>
                    <TableCell align='left'>{user.email}</TableCell>
                    <TableCell align='left'>{user.phone}</TableCell>
                    <TableCell align='left'>{user.city}</TableCell>
                    <TableCell align='left'>{user.country}</TableCell>
                  </TableRow>
                ))}
              </>
            ) : (
              <div
                style={{
                  color: 'black',
                  textAlign: 'center',
                  padding: '20px',
                  width: '250%',
                }}
              >
                No user data available
              </div>
            )}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

export default AllUsers;
