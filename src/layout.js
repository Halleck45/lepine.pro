import sidebar from './sidebar';

class Layout {
  init() {
    document.querySelectorAll('.burger-link').forEach(e => {
      e.removeEventListener('click', sidebar.toggle);
      e.addEventListener('click', sidebar.toggle);
    });
    document.querySelectorAll('.sidebar-outer').forEach(e => {
      e.removeEventListener('click', sidebar.toggle);
      e.addEventListener('click', sidebar.toggle);
    });
    document.querySelectorAll('.btn-editor-print').forEach(e => {
      e.removeEventListener('click', printer.print);
      e.addEventListener('click', printer.print);
    });
  }
}

export default Layout
