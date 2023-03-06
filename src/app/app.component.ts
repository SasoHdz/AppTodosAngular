import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tareas';


  /* function useLocalStorage(itemName, initialValue) {
    const initialState = {
      loading: true,
      error: false,
      item: initialValue,
      synchronized: true,
    }

    const [state, dispatch] = React.useReducer(reducer,initialState);

    const {
      loading,
      error,
      item,
      synchronized
    } = state;

    const onError = (error) => {
      dispatch({ type: actionTypes.error, payload: error});
    }

    const onSuccess = (parsedItem) => {
      dispatch({ type: actionTypes.success, payload: parsedItem});
    }

    const onSave = (newItem) => {
      dispatch({ type: actionTypes.save, payload: newItem });
    }

    const reLoad = () => {
      dispatch({ type: actionTypes.reLoad})
    }

    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;

          if(!localStorageItem){
            localStorage.setItem(itemName,JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
          onSuccess(parsedItem);
        } catch (error) {
          onError(error);
        }

      }, 3000);
    },[synchronized]);

    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName,stringifiedItem);
        onSave(newItem);
      } catch (error) {
        onError(error);
      }
    };

    const reLoading= ()=>{
      reLoad();
    }

    return {
      saveItem,
      reLoading,
      item,
      loading,
      error,
    };
  } */



}
