// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destination} = props
  console.log(destination)
  return (
    <li key={destination.name} className="css-list-container">
      <img
        src={destination.imgUrl}
        alt={destination.name}
        className="css-image-itself"
      />
      <p>{destination.name}</p>
    </li>
  )
}

export default DestinationItem
