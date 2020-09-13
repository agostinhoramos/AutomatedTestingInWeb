function close_box(e, parent = 0) {
  if (parent == 0) {
    e.remove();
  } else if (parent == 1) {
    e.parentNode.remove();
  } else if (parent == 2) {
    e.parentNode.parentNode.remove();
  } else if (parent == 3) {
    e.parentNode.parentNode.parentNode.remove();
  } else if (parent == 4) {
    e.parentNode.parentNode.parentNode.parentNode.remove();
  } else if (parent == 5) {
    e.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
  }
}
