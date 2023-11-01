import{createStore} from'redux';
import rootReducers from './actions/reducers';
const store =createStore(rootReducers);
export default store;