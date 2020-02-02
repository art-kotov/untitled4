import React from 'react';
import UserItem from "../UserItem";
import List from "@material-ui/core/List";
import {connect} from "react-redux";
import Button from "@material-ui/core/Button";
import data from "../../data"
import {setUsers, changeStatus, downloadData} from "../../bus/users/reducer";

const mapStateToProps = (state) => ({
    usersList: state.users.usersList,
    isFetching: state.users.isFetching,
})
const mapDispatchToProps = {setUsers, changeStatus, downloadData};

const UserList = (props) => {
    return (
        <List>
            <p>Loading: {props.isFetching ? "loading": "loaded"}</p>
            {
                props.usersList.map(item => <UserItem name={item.name} email={item.email} key={item.id}/>)
            }
            <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    props.setUsers(data)
                }}>
                add Users
            </Button>
            <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    props.downloadData()
                }}>
                fetchUsers
            </Button>
            <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    props.changeStatus()
                }}>
                changeStatus
            </Button>
        </List>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
