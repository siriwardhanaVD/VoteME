function logout() {
	window.location.href = "../frontEnd/index.html";
	localStorage.setItem("TO", "logout");
}

if(localStorage.getItem("TO") != "login"){
	window.location.href = "../frontEnd/index.html";
}

var conName = "";
$.ajax({
	url: 'http://localhost:3000/constituency/' +  localStorage.getItem("cID"),
	type: 'GET',
	success: function(result) {
		if(result.length != 0){
			document.getElementById("conNameHeading").innerHTML = result[0].conName;
			conName = result[0].conName;
			document.getElementById("TONameHeading").innerHTML = localStorage.getItem("TOName") + "(" + localStorage.getItem("NIC") + ")";
		}
	}
});

var currentLoggedInUser = "";
var closedVotes = 0;
var votedVotes = 0;
var totalVoters = 0;

function loadIDCard(currentLoggedInUser){
		$.ajax({
				url: 'http://localhost:3000/voters/' +  currentLoggedInUser,
				type: 'GET',
				success: function(result2) {
					if(result2.length != 0){
						document.getElementById("fullName").value = result2[0].fullName;
						document.getElementById("NIC").value = result2[0].NIC;
						document.getElementById("address").value = result2[0].address;
						document.getElementById("email").value = result2[0].email;
						document.getElementById("gender").value = result2[0].gender;
						document.getElementById("tblHead").innerHTML =
						"<tr>" +
						"  <td>"+ result2[0].GD +"</td>" +
						"  <td>"+ result2[0].District +"</td>" +
						"  <td>"+ result2[0].Province +"</td>" +
						"  <td>"+ result2[0].age +"</td>" +
						"</tr>";
					}
					else{
						document.getElementById("fullName").value = "";
						document.getElementById("NIC").value = "";
						document.getElementById("address").value = "";
						document.getElementById("email").value = "";
						document.getElementById("gender").value = "";
						document.getElementById("tblHead").innerHTML =
						"<tr>" +
						"  <td></td>" +
						"  <td></td>" +
						"  <td></td>" +
						"  <td></td>" +
						"</tr>";
					}
				}
			});
}


function updateDataEverySeconds() {
   document.getElementById("time").innerHTML = new Date().toLocaleTimeString();
   
	$.ajax({
		url: 'http://localhost:3000/constituency/' +  localStorage.getItem("cID"),
		type: 'GET',
		success: function(result) {
			if(result.length != 0){
				if(currentLoggedInUser != result[0].currentLoggedInUser){
					currentLoggedInUser = result[0].currentLoggedInUser;
					loadIDCard(currentLoggedInUser);
				}			
			}
		}
	});
	
	$.ajax({
		url: 'http://localhost:3000/voters' ,
		type: 'GET',
		success: function(result) {
			document.getElementById("tbl1").innerHTML = "";
			if(result.length != 0){
				closedVotes = 0;
				votedVotes = 0;
				totalVoters = 0;
				for (let i = 0; i < result.length; i++) {
					if(result[i].constituency == conName){
						totalVoters++;
						if(result[i].voteStatus != 0){
							if(result[i].voteStatus == 1){
								votedVotes++;
							}
							else {
								closedVotes++;
							}
							document.getElementById("tbl1").innerHTML +=
							"<tr>" +
							"  <td>"+ result[i].NIC +"</td>" +
							"  <td>"+ result[i].fullName +"</td>" +
							"  <td>"+ result[i].address +"</td>" +
							"  <td class=\"text-center\"><i class=\"fa fa-check-circle\" style=\"font-size:20px;color:green\"></i></td>" +
							"</tr>";
						}
						else {
							document.getElementById("tbl1").innerHTML +=
								"<tr>" +
								"  <td>"+ result[i].NIC +"</td>" +
								"  <td>"+ result[i].fullName +"</td>" +
								"  <td>"+ result[i].address +"</td>" +
								"  <td class=\"text-center\">--</td>" +
								"</tr>";
						}
					}
				}
				document.getElementById("tblSide").innerHTML =
					"<tr>" +
					"  <td>"+ totalVoters +"</td>" +
					"  <td>"+ votedVotes + "(" +((votedVotes/(totalVoters*1.0))*100) + "%)</td>" +
					"  <td>"+ closedVotes + "(" +((closedVotes/(totalVoters*1.0))*100) + "%)</td>" +
					"</tr>";
				
				document.getElementById("progress1").style.width = ((votedVotes/(totalVoters*1.0))*100) + "%";
				document.getElementById("progress2").style.width = ((closedVotes/(totalVoters*1.0))*100) + "%";
				
			}
		}
	});
}


var myInterval = setInterval(updateDataEverySeconds, 1000);





