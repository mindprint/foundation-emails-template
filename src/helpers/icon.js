const Handlebars = require('handlebars');

module.exports = function(network, url, style) {
    
    var result = '<a href="' + 
    url + '" class="social-icon"><img src="assets/img/social-icons/' + 
    network + '-' + style + '.png" alt="' + 
    network + '" width="36" height="36"></a>&nbsp;';
    
    return new Handlebars.SafeString(result);
}