export default function ServiceBlock(props) {


  return (
    <div className="block">
      <img src={props.imgUrl} />
      <h3>{props.serviceTitle}</h3>
    </div>
  )
}