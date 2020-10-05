import React from 'react';
import { Provider } from './Context';
import AllItems from './components/GetItem';
import AddItem from './components/AddItem';
import Actions from './Actions/Actions';

class App extends Actions {
  render() {
    const contextValue = {
      all_items: this.state.items,
      get_items: this.fetchItems,
      editMode: this.editMode,
      cancelEdit: this.cancelEdit,
      handleUpdate: this.handleUpdate,
      handleDelete: this.handleDelete,
      insertItem: this.insertItem
    }
    return (
      <Provider value={contextValue}>
        <div className="container-fluid bg-light">
          <div className="container p-5">
            <div className="card shadow-sm">
              <h1 className="card-header text-center text-uppercase text-muted">
                Lost N' Found
              </h1>
              <div className="card-body">
                <div className="column">
                  <div className="col">
                    <AddItem />
                  </div>
                  <div className="col">
                    <AllItems />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Provider>
    );
  }
}

export default App;