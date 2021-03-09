const content = {
    buttonLabel: "Add item",
    inputLabel: "Todo List",
  };

const AddItem = ({ name, onChange, onAdd, enter_func }) => (
    <div>
      <form>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder={content.inputLabel}
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={name}
            onChange={onChange}
            onKeyPress={enter_func}
          />
          <button type="button" className="btn btn-primary" onClick={onAdd}>
            {content.buttonLabel}
          </button>
        </div>
      </form>
    </div>
  );
  
  const List = ({ list,onRemove }) => (
    <ul className="list-group ">
      {list.map((item) => (
        <li
          id="list"
          className="list-group-item d-flex justify-content-start"
          key={item.id}
        >
          {item.name}
          <button
            type="button"
            className="material ms-auto btn">
            <span className="material-icons" onClick={() => onRemove(item.id)}>disabled_by_default</span>
          </button>
        </li>
      ))}
    </ul>
  );
  
  export  {AddItem, List}