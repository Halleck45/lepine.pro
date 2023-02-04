import './styles/app.less';
import application from './application';
import 'sal.js';
import 'sal.js/dist/sal.css';


document.addEventListener('DOMContentLoaded', (event) => {
    application.init();
}, {once: true});
