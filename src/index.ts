import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the custom-menu extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'custom-menu:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension custom-menu is activated!');
  }
};

export default extension;
