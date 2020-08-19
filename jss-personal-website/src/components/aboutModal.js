import React, { useContext } from 'react';
import { Window, WindowContent, WindowHeader, Button, Anchor, Tabs, Tab, TabBody } from 'react95';
import { StoreContext } from '../store';
import Draggable from 'react-draggable';

const AboutModal = () => {
    const [state, dispatch] = useContext(StoreContext);

    const _handleClose = () => {
        dispatch({ type: 'SET_ABOUT_MODAL', payload: false });
        dispatch({ type: 'SET_HIDE_ABOUT_MODAL_BUTTON', payload: true });
        dispatch({ type: 'SET_TAB', payload: 0 });
    };

    const _handleClick = () => {
        dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'about' });
    };

    const _handleChange = (_, tab) => {
        dispatch({ type: 'SET_TAB', payload: tab });
    };

    return (
        <Draggable>
            <Window
                onClick={_handleClick}
                style={{
                    width: 500,
                    maxWidth: '94%',
                    maxHeight: '100%',
                    zIndex: state.activeModal === 'about' ? 2 : 1,
                    position: 'fixed',
                    transform: 'translate(-50%, -50%)',
                    display: state.aboutModal ? 'block' : 'none',
                }}
            >
                <WindowHeader style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <span>about.exe</span>
                    <Button onClick={_handleClose}>
                        <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>
                            x
                    </span>
                    </Button>
                </WindowHeader>
                <WindowContent>
                    <Tabs value={state.tab} onChange={_handleChange}>
                        <Tab value={0}>overview</Tab>
                        <Tab value={1}>contact</Tab>
                    </Tabs>
                    <TabBody style={{ height: 300 }}>
                        {state.tab === 0 && (
                            <p>
                                welcome! my name is jackson saia and i am passionate about the intersection of art and
                                technology. i am a junior at brown university, studying electrical engineering. i focus
                                mainly on music outside of school, but also love taking photos and making short videos
                                to document my life. i currently work as a backend software developer at intus care.
                                this website is a side project to showcase all the things that i love to do. enjoy!
                            </p>
                        )}
                        {state.tab === 1 && (
                            <div>
                                <div>
                                    <p>email: <Anchor
                                        href="mailto: jackson_saia@brown.edu"
                                        target="_blank"
                                    >
                                        jackson_saia@brown.edu
                                    </Anchor>
                                    </p>
                                    <p>instagram: <Anchor
                                        href="https://www.instagram.com/jaxonss/"
                                        target="_blank"
                                    >
                                        @jaxonss
                                    </Anchor>
                                    </p>
                                    <p>linkedin: <Anchor
                                        href="https://www.linkedin.com/in/jackson-saia-a47b0a18b/"
                                        target="_blank"
                                    >
                                        @jackson-saia
                                    </Anchor>
                                    </p>
                                    <p>github: <Anchor
                                        href="https://github.com/jacksonsaia-eng"
                                        target="_blank"
                                    >
                                        @jacksonsaia-eng
                                    </Anchor>
                                    </p>
                                    <p>spotify: <Anchor
                                        href=" https://open.spotify.com/artist/6RaUAGMkfqkXcXElhQ91lR?si=0cS9ApAUTCGU8Udtq2ysBw"
                                        target="_blank"
                                    >
                                        @jaisairin
                                    </Anchor>
                                    </p>
                                    <p>soundcloud: <Anchor
                                        href="https://soundcloud.com/jaisairin"
                                        target="_blank"
                                    >
                                        @jaisairin
                                    </Anchor>
                                    </p>
                                </div>
                            </div>
                        )}
                    </TabBody>
                </WindowContent>
            </Window >
        </Draggable>
    );
};

export default AboutModal;