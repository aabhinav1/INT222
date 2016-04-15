 var httpRequest;

      function makeRequest() {
        var url = 'https://zenit.senecac.on.ca/~emile.ohan/int222/labs/lab06/courses.json'; 
        // make an HTTP request object

        if (window.XMLHttpRequest) { // Mozilla, Safari, ...
          httpRequest = new XMLHttpRequest();
        } else if (window.ActiveXObject) { // IE
          try {
            httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
          } 
          catch (e) {
            try {
              httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
            } 
            catch (e) {}
          }
        }
    
        if (!httpRequest) {
          alert('Giving up :( Cannot create an XMLHTTP instance');
          return false;
        }
        
        // register a request listener
        httpRequest.onreadystatechange = showContents;
        // make the HTTP request 
        httpRequest.open('GET', url, true);
        httpRequest.send();
      }
    
      // the function that handles the server response

      function showContents() {
        
       //  check for response state
       //  0      The request is not initialized
       //  1      The request has been set up
       //  2      The request has been sent
       //  3      The request is in process
       //  4      The request is complete

        if (httpRequest.readyState === 4) {
          // check the respone code
          if (httpRequest.status === 200) { // The request has succeeded
            // Javascript function JSON.parse to parse JSON data

            var jsArray = JSON.parse(httpRequest.responseText);

            //**********************************
            //       include your code here
            //**********************************
			var str = "";
			 str+="<table><tr><th>Name</th><th>  semester</th><th rowspan>courses</th></tr>";
				
			for( var i = 0; i < jsArray.length; i++){
				 str+= "<tr>";
				  str+= "   <td>" + jsArray[i].name    + "</td>";
           str+= "   <td>" + jsArray[i].semester  + "</td>";
					
					for( var j =0; j < jsArray.length; j++){
				
          
		   str+= "   <td>" + jsArray[i].courses[j]  + "</td>";
           
		   
					}
			str+= "</tr>";		
			}
			str+="<caption>School of ICT| Faculty of Applied Science and Engineering Technology</caption>"
			
			
			
			
		str+= "</table>";





		  document.getElementById("data").innerHTML = str;
          } else {
            alert('There was a problem with the request.');
          }
        }
      }