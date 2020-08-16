import React from 'react';
import { Link } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Button,
    List,
    ListItem,
    Divider
} from 'react95';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function WindowsAppBar() {
    const [open, setOpen] = React.useState(false);

    return (
        <AppBar>
            <Toolbar style={{ justifyContent: 'space-between' }}>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                    <Button
                        onClick={() => setOpen(!open)}
                        active={open}
                        style={{ fontWeight: 'bold' }}
                    >
                        <span role='img' aria-label='💫'>
                            💫
                </span>
            Start
          </Button>
                    {open && (
                        <List
                            style={{
                                position: 'absolute',
                                left: '0',
                                top: '100%'
                            }}
                            onClick={() => setOpen(false)}
                        >
                            <Link to="/music">
                                <ListItem>
                                    <span role='img' aria-label='🎧'>
                                        🎧
                                    </span>
                                    music
                                </ListItem>
                            </Link>
                            <Link to="/photo">
                                <ListItem>
                                    <span role='img' aria-label='📷'>
                                        📷
                                    </span>
                                    photo
                                </ListItem>
                            </Link>
                            <Link to="/video">
                                <ListItem>
                                    <span role='img' aria-label='🎥'>
                                        🎥
                                    </span>
                                    video
                                </ListItem>
                            </Link>
                            <Link to="/engineering">
                                <ListItem>
                                    <span role='img' aria-label='🛠️'>
                                        🛠️
                                    </span>
                                    engn
                                </ListItem>
                            </Link>
                            <Link to="/about">
                                <ListItem>
                                    <span role='img' aria-label='📋'>
                                        📋
                                    </span>
                                    about
                                </ListItem>
                            </Link>
                            <Divider />
                            <Link to="/">
                                <ListItem>
                                    <span role='img' aria-label='🏠'>
                                        🏠
                                </span>
                                home
                            </ListItem>
                            </Link>
                        </List>
                    )}
                </div>
                <div>
                    <a href="https://www.instagram.com/jaxonss/">
                        <Button square>
                            <InstagramIcon />
                        </Button>
                    </a>
                    <a href="https://www.linkedin.com/in/jackson-saia-a47b0a18b/">
                        <Button square>
                            <LinkedInIcon />
                        </Button>
                    </a>
                </div>
            </Toolbar>
        </AppBar>
    );
};