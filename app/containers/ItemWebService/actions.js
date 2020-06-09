import { 
    SELECT, 
} from './constants';
  
export function select(item) {
    return {
        type: SELECT,
        item
    };
}
  

  
  