var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return(
    <div>
      <IndexLink to="/" activeClassName="active-link">React Timer App</IndexLink> |
      <Link to="/" activeClassName="active-link">Timer</Link> |
      <Link to="/countdown" activeClassName="active-link">Countdown</Link>
    </div>
  );
};

module.exports = Nav;
