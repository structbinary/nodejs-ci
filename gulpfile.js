var gulp = require('gulp');
var sonarqubeScanner = require('sonarqube-scanner');
 
gulp.task('sonar', function(callback) {
  sonarqubeScanner({
    serverUrl : "http://172.17.0.3:9000",
    options : {
    }
  }, callback);
});