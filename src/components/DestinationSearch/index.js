// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

// const DestinationSearch = props => {
//   const {destinationsList} = props
//   console.log(destinationsList)
//   let filteredDestinationList
//   let searchValue = ''
//   const inputSearch = event => {
//     searchValue = event.target.value
//     console.log(searchValue)
//     console.log(destinationsList)
//     filteredDestinationList = destinationsList.filter(destination =>
//       destination.name.includes(searchValue),
//     )
//     console.log(filteredDestinationList)
//   }

//   return (
//     <>
//       <div>
//         <h1>Destination Search</h1>
//         <div>
//           <input type="search" onChange={event => inputSearch(event)} />
//         </div>
//         <ul>
//           {searchValue !== ''
//             ? filteredDestinationList.map(destination => (
//                 <DestinationItem destination={destination} />
//               ))
//             : destinationsList.map(destination => (
//                 <DestinationItem destination={destination} />
//               ))}
//         </ul>
//       </div>
//     </>
//   )
// }

let filteredDestinationList
class DestinationSearch extends Component {
  state = {filteredData: '', searchValue: ''}

  inputSearch = event => {
    const {destinationsList} = this.props
    const searchValue = event.target.value
    console.log(searchValue)
    console.log(destinationsList)
    filteredDestinationList = destinationsList.filter(destination =>
      destination.name.toLowerCase().includes(searchValue.toLowerCase()),
    )
    this.setState({
      filteredData: filteredDestinationList,
      searchValue,
    })
    console.log(filteredDestinationList)
  }

  render() {
    const {destinationsList} = this.props
    const {filteredData, searchValue} = this.state

    console.log(filteredData)
    console.log(destinationsList)

    return (
      <>
        <div className="css-bg-container">
          <div className="css-top-container">
            <h1>Destination Search</h1>

            <input
              type="search"
              onChange={this.inputSearch}
              value={searchValue}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="css-search-icon"
            />
          </div>
          <ul className="css-ul-container">
            {searchValue !== ''
              ? filteredData.map(destination => (
                  <DestinationItem destination={destination} />
                ))
              : destinationsList.map(destination => (
                  <DestinationItem destination={destination} />
                ))}
          </ul>
        </div>
      </>
    )
  }
}

export default DestinationSearch
