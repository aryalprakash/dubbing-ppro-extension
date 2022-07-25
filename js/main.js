// (function () {
//  'use strict';
//  var path, slash;
//  path = location.href;
// 	if(getOS() == "MAC") {
// 		slash = "/";
// 		path = path.substring(0, path.length - 11);
// 	}
// 	if(getOS() == "WIN") {
// 		slash = "/";
// 		path = path.substring(8, path.length - 11);
// 	}

//  }());

//  function importFile(filePath) {
//     app.project.importFiles([filePath],
//         false, // suppress warnings 
//         app.project.getInsertionBin(),
//         false); // import as numbered stills
// }

function startAddingVideo() {
    const urlVideo = "https://identv-precision-visual-data.s3.amazonaws.com/6245b16c249b99006d833a1d/13.mp4?AWSAccessKeyId=AKIA4GZ224W5WLEQWJGE&Expires=1658255407&Signature=dlYXl2KLZfSYa92B8Yo5ZSTr1Pg%3D"
    importInPremiere(urlVideo, "CoolTest")
    $.write("Hello World")  
}
// function goIntoJSX() {
	
// 	}

// function getOS() {
//  		var userAgent = window.navigator.userAgent,
//  		platform = window.navigator.platform,
//  		macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
//  		windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
//  		os = null;

//  		if(macosPlatforms.indexOf(platform) != -1) {
//  			os = "MAC";
//  		} else if(windowsPlatforms.indexOf(platform) != -1) {
//  			os = "WIN";
//  		}
//  		return os;
//  	}