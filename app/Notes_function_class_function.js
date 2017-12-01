
//Use this when there's only props and renedering UI
function SelectLanguage (props) {
  var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <ul className='languages'>
      {languages.map((lang) => {
        return (
          <li
            style={lang === props.selectedLanguage ? {color: '#d0021b'} : null}
            onClick={props.onSelect.bind(null,lang)}
            key={lang}>
            {lang}
          </li>
        )
      })}
    </ul>
}


class SelectLanguage extends React.Component {
  render() {
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
      <ul className='languages'>
        {languages.map((lang) => {
          return (
            <li
              style={lang === this.props.selectedLanguage ? {color: '#d0021b'} : null}
              onClick={this.props.onSelect.bind(null,lang)}
              key={lang}>
              {lang}
            </li>
          )
        })}
      </ul>
    )
  }
}
