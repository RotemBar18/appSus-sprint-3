export class NoteSearch extends React.Component {

  state = {
    searchBy: ''
  }

  handleChange = (ev) => {
    const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value
    this.setState({ searchBy: value }, () => {
      this.props.onSetSearch(this.state.searchBy)
    })
  }

  onSearch = (ev) => {
    ev.preventDefault()
    this.props.onSetSearch(this.state.filterBy)
  }

  render() {
    const { searchBy } = this.state
    return (
      <div className="note-search">
        <h1>Search:</h1>
        <form className="search" onSubmit={this.onFilter}>

          <label htmlFor="searchBy">By Key Word</label>
          <input type="text" id="searchBy" name="searchBy" placeholder='search...' onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}