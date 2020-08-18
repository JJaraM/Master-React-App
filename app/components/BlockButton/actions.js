/*
 * Disable the button when this is pressed, and the action
 * is completed return the button to its original state.
 *
 * @param func original function that will be call after disable the button.
 * @param id of the button to search the element and then add the to disable it.
 * @param evt of the onClick action.
 * @param fields from the form.
 */
const onClickAction = function onClickAction(func, id, evt, fields) {
  const className = 'btn-disable';
  const button = document.getElementById(id);
  if (button) {
    button.classList.add(className);
  }

  func(evt, fields);
  
  if (button) {
    button.classList.remove(className);
  }
 
};

export { onClickAction };
