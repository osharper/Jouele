$ (function () {
    var pluginFilename = 'jquery.jouele.js'
    var $exists = $ ('script').filter (function () {
      return this.src.indexOf ('/' + pluginFilename) != -1
    }).eq (0)

    if (!$exists.size ()) {
        var thisFilename = 'jouele.js'
        $exists = $ ('script').filter (function () {
          return this.src.indexOf ('/' + thisFilename) != -1
        }).eq (0)

        if ($exists.size ()) {
          var jouelePluginPath = ($exists.attr ('src').slice (0, -1 - thisFilename.length)) + '/jquery.jouele.js'
          $.getScript(jouelePluginPath, function() {
              $('a.jouele').jouele();
          })
        }
    }
    else {
        $('a.jouele').jouele();
    }
})