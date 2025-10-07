function ListsComponent(props) {
  return (
    <section>
      <h2>Lists</h2>

      <h3>Ordered list</h3>
      <ol>
        <li>
          {props.olItem1}
          <ol>
            <li>{props.olItemInner}</li>
          </ol>
        </li>
      </ol>

      <h3>Unordered list</h3>
      <ul>
        <li>
          {props.ulItem1}
          <ul>
            <li>{props.ulItemInner}</li>
            <li>{props.ulItemInner1}</li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
export default ListsComponent;
