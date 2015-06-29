
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
};

function makeHelpCallback(help) {
  return function() {
    showHelp(help);
  };
};

function setupHelp() {
  setTimeout(function(){
  var helpText = [
      {'id': 'title', 'help': 'What was your item?'},
      {'id': 'cost', 'help': 'How much did it cost?'},
      {'id': 'notes', 'help': 'Do you have any special requests?'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus =
       makeHelpCallback(item.help);
  }
}, 500);
};

setupHelp();