'use strict';
// Add Event Listeners here:
$(function() {
  $('body').mouseover(function () {
    $('.cell').mouseover( function () {
      $(event.target).addClass('active');
    });
  });
});

// When DOM is ready:
$(() => {
  createAndPlaceRows(8);
  // Bind your event listeners here:
  $('.cell').mouseover(function () {
    console.log($(event.target));
    $(event.target).addClass('active');
  });
});

$(() => {
  $('button').click(function () {
    createAndPlaceRows(8);
  });
});





// ===============================
// Code below is to automate grid creation
// You can ignore this!
// ===============================
function createRow(cellCount) {
  let row = '<div class="row">';
  let str = '<div class="cell">&nbsp;</div>';
  for (let i = 0; i < cellCount; i++) {
    row += str;
  }
  row += '</div>';
  return row;
}

function createRows(n) {
  let rows = '';
  for (let i = 0; i < n; i++) {
    rows += createRow(n);
  }
  return rows;
}

function createAndPlaceRows(n) {
  $('.cell').remove(); // Clear all current cells and listeners
  const rows = createRows(n);
  $('.grid').html(rows);
  const cells = $('.cell');
  cells.css({ height: cells.width() });
}
