//size
$('#sizePicker').submit(function (event) {
  event.preventDefault();
  const height = document.getElementById('inputHeight').value;
  const width = document.getElementById('inputWidth').value;
  makeGrid(height, width);
})

function makeGrid(x,y) {
  //reset
    $('tr').remove();

    for (var c = 1; c <= x; c++) {
        $('#pixelCanvas').append('<tr id=table' + c + '></tr>');
        for (var a = 1; a <= y; a++) {
            $('#table' + c).append('<td></td>');
        }
    }
//color selector
    $('td').click(function addColor() {
      color = $('#colorPicker').val();
      if ($(this).attr('style')) {
          $(this).removeAttr('style')
      } else {
           $(this).attr('style', 'background-color:' + color);
      }
    })
}
