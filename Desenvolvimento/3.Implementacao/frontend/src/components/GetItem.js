import React, { Component } from 'react';
import { AppContext } from '../Context';
class GetUsers extends Component {
  static contextType = AppContext;

  componentDidMount() {
    this.context.get_items();
  }

  handleUpdate = (id) => {
    this.context.handleUpdate(
      id,
      this.name.value,
      this.local.value,
      this.data.value,
      this.descricao.value,
      this.categoria.value,
      this.contido.value,
    );
  }

  render() {
    let allItems;
    let mainData;

    allItems = this.context.all_items.map(({
      id,
      nome,
      local,
      data,
      descricao,
      categoria,
      contido,
      isEditing
    }) => {
      return isEditing === true ? (
        <tr key={id}>
          <td>
            <input
              className="form-control"
              type="text"
              ref={(item) => this.name = item}
              defaultValue={nome}
            />
          </td>
          <td>
            <input
              className="form-control"
              type="text"
              ref={(item) => this.local = item}
              defaultValue={local}
            />
          </td>

          <td>
            <input
              className="form-control"
              type="date"
              ref={(item) => this.data = item}
              defaultValue={data}
            />
          </td>
          <td>
            <input
              className="form-control"
              type="text"
              ref={(item) => this.descricao = item}
              defaultValue={descricao}
            />
          </td>

          <td>
            <input
              className="form-control"
              type="text"
              ref={(item) => this.categoria = item}
              defaultValue={categoria}
            />
          </td>
          <td>
            <input
              className="form-control"
              type="text"
              ref={(item) => this.contido = item}
              defaultValue={contido}
            />
          </td>

          <td>
            <button
              className="btn btn-success mr-2"
              onClick={() => this.handleUpdate(id)}>
              Salvar
            </button>
            <button
              onClick={() => this.context.cancelEdit(id)}
              className="btn btn-light">
              Cancelar
            </button>
          </td>
        </tr>
      ) : (
          <tr key={id}>
            <td>{nome}</td>
            <td>{local}</td>
            <td>{data}</td>
            <td>{descricao}</td>
            <td>{categoria}</td>
            <td>{contido}</td>
            <td>
              <button
                className="btn btn-dark mr-2"
                onClick={() => this.context.editMode(id)}>
                Edit
              </button>
              <button
                onClick={() => this.context.handleDelete(id)}
                className="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
        );
    });

    if (this.context.all_items.length > 0) {
      mainData = (
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Local</th>
              <th>Data</th>
              <th>Descrição</th>
              <th>Categoria</th>
              <th>Contido</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allItems}
          </tbody>
        </table>
      );
    }
    else {
      mainData = (
        <div className="alert alert-light" role="alert">
          <h4 className="alert-heading">No Items Found!</h4>
          <hr />
          <p>Please Insert Some Items.</p>
        </div>
      );
    }
    return (
      <>
        {mainData}
      </>
    );
  }

}
export default GetUsers;