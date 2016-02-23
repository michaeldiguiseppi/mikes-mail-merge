// add scripts
var panels = 0;
$(document).on('ready', function() {
  console.log('sanity check!');
  panels = $('.panel').length;
  if (panels > 0) {
      appendPanelCounter();
  }
});


$(document).on('click', '.close', function (event) {
    event.preventDefault();
    var panelID = $(this).attr('id');
    var panelToHide = $(this).closest('div.panel');
    var panel = panelToHide.attr('id');

    if (panel === panelID) {
        panelToHide.addClass('hidden');
        panels -= 1;
        appendPanelCounter();
    } else {
        console.log('Error');
    }
});


function appendPanelCounter () {
    $('#emailCount').text('Emails(' + panels + ')');
}