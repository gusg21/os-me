/*
    os-me: the most likely non-functional os-detection library
    author: gusg21
    year: 2017
    awesome: probably not
*/

/*	os Object Constructor
========================*/

function os() {
		return this;
}

/*	os Prototype Functions
============================*/

os.prototype = {
	clientOS:	function () {
                var OSName="Unknown OS";
                if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
                if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
                if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
                if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
				return OSName;
			},
};
