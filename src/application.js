import Layout from "./layout";
import sal from 'sal.js'

export default {
    init: () => {
        // Initializing Layout
        const layout = new Layout;
        layout.init();

        // Animation
        sal();
    }
}
