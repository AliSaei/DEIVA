const steps = [
  {
    element: '#charts',
    intro: 'DEIVA: Interactive Visual Analysis of differential gene expression test results',
    position: 'floating'
  }, {
    element: '#data-set',
    intro: 'Simply select a differential gene expression test of interest from the dropdown...'
  }, {
    element: '#data-drop',
    intro: '...or, import a custom input file here! See the about page for details on the input format.'
  }, {
    element: '#_scatter__chart',
    intro: 'Highlight a region by drawing a rectangle.'
  }, {
    element: '#chart-toolbar',
    intro: 'Use the toolbar to zoom into selected region, zoom-in, zoom-out and to reset.',
    position: 'left'
  }, {
    element: '.expression-grid',
    intro: 'This table shows the highlighted genes from the plot area. You can sort any of the columns (just click the column header)!',
    position: 'top'
  }, {
    element: '.expression-grid .ui-grid-icon-container',
    intro: 'Show addional data columns or export visible data from the table for later import into other applications.',
    position: 'left'
  }, {
    element: '#data-download',
    intro: 'Export the complete raw data here.'
  }, {
    element: '#svg-download',
    intro: 'Export the current plot as SVG.'
  }, {
    element: '#gene-select',
    intro: 'Locate one or more genes of interest in the scatter plot. Different colors are automatically assigned. You can paste entire list of space separated genes!'
  }, {
    element: '#gene-list-toolbar',
    intro: 'Use these buttons to copy and clear the current list.'
  }, {
    element: '#fc-filter',
    intro: 'Set a custom abs. log2 Fold Change filter.'
  }, {
    element: '#fdr-filter',
    intro: 'Set a custom FDR filter.'
  }, {
    element: '#bm-filter',
    intro: 'Set a custom baseMean or logCPM filter.'
  }, {
    element: '#_scatter__chart',
    intro: 'Features passing these filters will be indicated in red on the plot...'
  }, {
    element: '#gene-count',
    intro: 'and the number of up- and down-regulated features that pass these filters will be displayed here.'
  }, {
    element: '#plot-options',
    intro: 'Change density plot opacity, density plot type (Hexplot/Scatterplot), and plot type (MA/Volcano) here.'
  }, {
    element: '#plot-options',
    intro: 'Switch between hexplot (fast) and scatter plot. The scatter plot is slower but allows inspection of each feature in the plot.'
  }, {
    element: '#charts',
    intro: 'If you encounter any issues please let us know in the [DEIVA GitHub issues](https://github.com/Hypercubed/DEIVA/issues)',
    position: 'floating'
  }
];

export default steps;
