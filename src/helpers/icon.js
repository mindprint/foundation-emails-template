const Handlebars = require('handlebars');

module.exports = function(url, icon) {    
    var result = '<a href="' + url + '"><img src="assets/img/icons/' + icon + '.png" alt="' + icon + '"></a>';
    
    return new Handlebars.SafeString(result);
}