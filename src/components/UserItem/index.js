import React from 'react';
import {Avatar, ListItem, ListItemAvatar, ListItemText, Typography, Link} from "@material-ui/core";

const UserItem = ({name, email}) => (
    <ListItem>
        <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="https://via.placeholder.com/40"/>
        </ListItemAvatar>
        <ListItemText
            primary={name}
            secondary={
                    <Link
                    >
                        {email}
                    </Link>
            }
        />
    </ListItem>
);

export default UserItem;
