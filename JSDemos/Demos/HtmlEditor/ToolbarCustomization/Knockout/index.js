window.onload = function () {
  const editorValue = ko.observable();
  const visiblePopup = ko.observable(false);

  const viewModel = {
    valueContent: ko.observable(),
    htmlEditorOptions: {
      value: editorValue,
      toolbar: {
        items: [
          'undo', 'redo', 'separator',
          {
            name: 'header',
            acceptedValues: [false, 1, 2, 3, 4, 5],
          }, 'separator',
          'bold', 'italic', 'strike', 'underline', 'separator',
          'alignLeft', 'alignCenter', 'alignRight', 'alignJustify', 'separator',
          {
            widget: 'dxButton',
            options: {
              text: 'Show markup',
              stylingMode: 'text',
              onClick() {
                visiblePopup(true);
              },
            },
          },
        ],
      },
    },
    popupOptions: {
      showTitle: true,
      title: 'Markup',
      onShowing() {
        this.valueContent(editorValue());
      },
      visible: visiblePopup,
    },
  };

  ko.applyBindings(viewModel, document.getElementById('demo'));
};
