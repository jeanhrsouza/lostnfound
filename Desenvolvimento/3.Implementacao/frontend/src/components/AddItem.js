import React, { Component } from 'react';
import { AppContext } from '../Context';

class AddItem extends Component {
  static contextType = AppContext;

  insertItem = (event) => {
    this.context.insertItem(
      event,
      this.nome.value,
      this.local.value,
      this.data.value,
      this.descricao.value,
      this.categoria.value,
      this.contido.value
    );
  }

  render() {
    return (
      <form onSubmit={this.insertItem}>
        <div className="form-row">
          <div className="form-group col">
            <label
              className="font-weight-bold">
              Nome
            </label>
            <input
              type="text"
              name="nome"
              ref={(val) => this.nome = val}
              className="form-control"
              placeholder="Nome"
            />
          </div>
          <div className="form-group col">
            <label
              className="font-weight-bold">
              Local
            </label>
            <input
              type="text"
              name="local"
              ref={(val) => this.local = val}
              className="form-control"
              placeholder="Local"
            />
          </div>

          <div className="form-group col">
            <label
              className="font-weight-bold">
              Data
            </label>
            <input
              type="date"
              name="data"
              ref={(val) => this.data = val}
              className="form-control"
            />
          </div>
          <div className="form-group col">
            <label
              className="font-weight-bold">
              Descrição
            </label>
            <input
              type="text"
              name="descricao"
              ref={(val) => this.descricao = val}
              className="form-control"
              placeholder="Descrição"
            />
          </div>

          <div className="form-group col">
            <label
              className="font-weight-bold">
              Categoria
            </label>
            <input
              type="text"
              name="categoria"
              ref={(val) => this.categoria = val}
              className="form-control"
              placeholder="Categoria"
            />
          </div>
          <div className="form-group col">
            <label
              className="font-weight-bold">
              Contido
            </label>
            <input
              type="text"
              name="contido"
              ref={(val) => this.contido = val}
              className="form-control"
              placeholder="Contido"
            />
          </div>

          <div className="form-group col-12 text-right">
            <button type="submit" className="btn btn-primary">Add Item</button>
          </div>
        </div>
      </form>
    );
  }
}
export default AddItem;