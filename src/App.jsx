import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ScrollableFeed from 'react-scrollable-feed';
import FullHeight from './FullHeight';
import FlexSponge from './FlexSponge';
import InBar from './InBar';
import Menu from './Menu';

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: theme.typography.fontFamily,
  },
  bottomUp: {
    display: 'flex',
    flexDirection: 'column-reverse',
  },
  messages: {
    // ScrollableFeed sets this to 'inherit', which means initial messages
    // on top appear. Setting to 'auto' will position them at the bottom.
    height: 'auto',
    fontSize: 16,
  },
  topPanel: {
    background: `linear-gradient(#ddd, #ccc) no-repeat center/1px 100%`,
  },
  left: {
    marginRight: '50%',
    overflowWrap: 'break-word',
    paddingRight: 24,
    textAlign: 'right',
  },
  right: {
    marginLeft: '50%',
    maxWidth: '50%',
    paddingLeft: 24,
    overflowWrap: 'break-word',
    textAlign: 'left',
  },
}));

export default function App() {
  const classes = useStyles();

  const [messages, setMessages] = React.useState([]);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMessage = (text, left) => {
    const message = { text, time: Date.now(), left };
    setMessages([...messages, message]);
  };

  return (
    <FullHeight className={clsx(classes.root, classes.bottomUp)}>
      <FlexSponge expanded={menuOpen}>
        <Menu />
      </FlexSponge>
      <InBar onMessage={handleMessage} onMenuClick={handleMenuClick} />

      <FlexSponge expanded={!menuOpen} className={clsx(classes.topPanel, classes.bottomUp)}>
        <ScrollableFeed className={classes.messages} forceScroll>
          {messages.map(({ text, time, left }) => (
            <div key={time} className={left ? classes.left : classes.right}>
              {text}
            </div>
          ))}
        </ScrollableFeed>
      </FlexSponge>
    </FullHeight>
  );
}
