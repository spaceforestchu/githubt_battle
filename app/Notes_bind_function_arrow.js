var React = require('react');

class Popular extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: 'All'
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang) {
    this.setState(function() {
      return {
        selectedLanguage: lang
      }
    });
  }

  render() {
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
      <ul className='languages'>
        //Using function we have to make use bind it outside
        {languages.map(function(lang) {
          return (
            <li
              style={lang === this.state.selectedLanguage ? {color: '#d0021b'} : null}
              onClick={this.updateLanguage.bind(null,lang)}
              key={lang}>
              {lang}
            </li>
          )
          //need to pass in this to bind to the outside context
        },this)}
      </ul>
    )
  }
 }

export default Popular;
