export default function NonFiction(props) {
  return (
    <div data-testid='books-nonfiction'>
      <h1 data-testid='books-container-title'>Non-Fictions-Books</h1>

      <div className="books-container">
        {props.map((elem, index)=>{
          <div>
            <img src={elem.img} alt={elem.title}/>
            <h2>{elem.title}</h2>
            <h3>{elem.author}</h3>
            <h4>{elem.price}</h4>
          </div>
        })}
      </div>
    </div>
  );
}
