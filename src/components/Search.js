import '../style/Search.css';

function Search() {
    return (
        <div className = "select-reading-level">
            <select name="reading-level" id="reading-level">
                <option disabled="disabled" selected="selected">Select an option</option>
                <option value="0">5th Grade</option>
                <option value="1">6th Grade</option>
                <option value="2">7th Grade</option>
                <option value="3">8th & 9th Grade</option>
                <option value="4">10th to 12th Grade</option>
                <option value="5">College</option>
                <option value="6">College Graduate</option>
            </select>
        </div>
    );
  }

  export default Search;