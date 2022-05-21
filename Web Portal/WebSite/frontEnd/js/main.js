(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

})(jQuery);


/*var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 15];
var barColors = ["red", "green","blue","orange","brown"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
    }
  }
});*/



if (window.matchMedia("(orientation: portrait)").matches) {
   document.getElementById("btnSideBar").className = "custom-menu"
}

if (window.matchMedia("(orientation: landscape)").matches) {
   document.getElementById("btnSideBar").className = "custom-menu hideOrShow"
}


function otp(){
	document.getElementById("otp").value = Math.floor(100000 + Math.random() * 900000)	
}

function createVoter(){
	var obj = new Object();
	
	obj.NIC = document.getElementById("nic").value;
	obj.fullName = document.getElementById("name").value;
	obj.address = document.getElementById("address").value;
	obj.age = document.getElementById("age").value;
	
	obj.District = document.getElementById("DistricV").value;
	obj.Province = document.getElementById("ProvinceV").value;
	obj.DOB = document.getElementById("DOB").value;
	obj.gender = document.getElementById("gender").value;
	obj.email = document.getElementById("email").value;
	obj.TP = document.getElementById("TP").value;
	obj.GD = document.getElementById("GD").value;
	
	var conSName = document.getElementById("con").value.split("-");
	var valueS = "";
	if(conSName.length > 0){
		for(let i = 0 ; i < conSName.length; i++){
			if(valueS == ""){
				valueS = conSName[i];
			}
			else {
				valueS = valueS + " " + conSName[i];
			}
			
		}
	}
	obj.constituency = valueS;
	obj.OTP = document.getElementById("otp").value;
	obj.voteStatus = 0;
	
	if(obj.NIC != "" 
		&& obj.fullName != "" 
		&& obj.address != "" 
		&& obj.age != "" 
		&& obj.District != 0 
		&& obj.Province != 0 
		&& obj.DOB != "" 
		&& obj.gender != 0
		&& obj.email != "" 
		&& obj.TP != "" 
		&& obj.GD != "" 
		&& document.getElementById("con").value != 0 
	){
		$.ajax({
			url: 'http://localhost:3000/voters',
			type: 'POST',
			data : obj,
			success: function(result) {
				if(result == "Error"){
					alert("Error");
				}
				else{
					alert("Saved Successfull");
					location.reload();
				}
			} 
		});
	}
	else{
		if(obj.NIC == "" ){
			document.getElementById("nicW").innerHTML = "Please Enter NIC";
		}
		if(obj.fullName == "" ){
			document.getElementById("nameW").innerHTML = "Please Enter Full Name";
		}
		if(obj.address == "" ){
			document.getElementById("addressW").innerHTML = "Please Enter Address";
		}
		if(obj.age == "" ){
			document.getElementById("ageW").innerHTML = "Please Enter Age";
		}
		if(obj.District == 0 ){
			document.getElementById("DistricVW").innerHTML = "Please Select District";
		}
		if(obj.Province == 0 ){
			document.getElementById("ProvinceVW").innerHTML = "Please Select Province";
		}
		if(obj.DOB == "" ){
			document.getElementById("DOBW").innerHTML = "Please Enter Date of Birth";
		}
		if(obj.gender == 0 ){
			document.getElementById("genderW").innerHTML = "Please Select Gender";
		}
		if(obj.email == "" ){
			document.getElementById("emailW").innerHTML = "Please Enter Email";
		}
		if(obj.TP == "" ){
			document.getElementById("TPW").innerHTML = "Please Enter Teliphone Number";
		}
		if(obj.GD == "" ){
			document.getElementById("GDW").innerHTML = "Please Enter Grama Niladari Devision";
		}
		if(document.getElementById("con").value == 0 ){
			document.getElementById("conW").innerHTML = "Please Select Constituency";
		}
		
	}
}

function clearAllWarinigsVoters(){
		document.getElementById("nicW").innerHTML = "";
		document.getElementById("nameW").innerHTML = "";
		document.getElementById("addressW").innerHTML = "";
		document.getElementById("ageW").innerHTML = "";
		document.getElementById("DistricVW").innerHTML = "";
		document.getElementById("ProvinceVW").innerHTML = "";
		document.getElementById("DOBW").innerHTML = "";
		document.getElementById("genderW").innerHTML = "";
		document.getElementById("emailW").innerHTML = "";
		document.getElementById("TPW").innerHTML = "";
		document.getElementById("GDW").innerHTML = "";
		document.getElementById("conW").innerHTML = "";
		
		document.getElementById("nicUW").innerHTML = "";
		document.getElementById("nameUW").innerHTML = "";
		document.getElementById("addressUW").innerHTML = "";
		document.getElementById("ageUW").innerHTML = "";
		document.getElementById("DistricVUW").innerHTML = "";
		document.getElementById("ProvinceVUW").innerHTML = "";
		document.getElementById("DOBUW").innerHTML = "";
		document.getElementById("genderUW").innerHTML = "";
		document.getElementById("emailUW").innerHTML = "";
		document.getElementById("TPUW").innerHTML = "";
		document.getElementById("GDUW").innerHTML = "";
		document.getElementById("conUW").innerHTML = "";
}

function clearAllWarinigsCadidate(){
		document.getElementById("pNameW").innerHTML = "";
		document.getElementById("cNameW").innerHTML = "";
		document.getElementById("colorW").innerHTML = "";
		document.getElementById("linkW").innerHTML = "";
		
		document.getElementById("pNameUW").innerHTML = "";
		document.getElementById("cNameUW").innerHTML = "";
		document.getElementById("colorUW").innerHTML = "";
		document.getElementById("linkUW").innerHTML = "";
}

function clearAllWarinigsTO(){
		document.getElementById("nicTW").innerHTML = "";
		document.getElementById("nameTW").innerHTML = "";
		document.getElementById("personalAddressTW").innerHTML = "";
		document.getElementById("ageTW").innerHTML = "";
		document.getElementById("mobileTW").innerHTML = "";
		
		document.getElementById("nicTUW").innerHTML = "";
		document.getElementById("nameTUW").innerHTML = "";
		document.getElementById("personalAddressTUW").innerHTML = "";
		document.getElementById("ageTYW").innerHTML = "";
		document.getElementById("mobileTYW").innerHTML = "";
}

function clearAllWarinigsCon(){
		document.getElementById("cNameW").innerHTML = "";
		document.getElementById("cAddressW").innerHTML = "";
		document.getElementById("techOffDropDownW").innerHTML = "";
		document.getElementById("ProvinceW").innerHTML = "";
		document.getElementById("DistricW").innerHTML = "";
		
		document.getElementById("cNameUW").innerHTML = "";
		document.getElementById("cAddressUW").innerHTML = "";
		document.getElementById("techOffDropDownUW").innerHTML = "";
		document.getElementById("ProvinceUW").innerHTML = "";
		document.getElementById("DistricUW").innerHTML = "";
}

function createTechnicalOfficer(){
	var obj = new Object();
	
	obj.NIC = document.getElementById("nicT").value;
	obj.fullName = document.getElementById("nameT").value;
	obj.address = document.getElementById("personalAddressT").value;
	obj.age = document.getElementById("ageT").value;
	obj.mobileNumber = document.getElementById("mobileT").value;
	obj.cID = 0;
	
	if(obj.NIC != "" 
		&& obj.NIC != "" 
		&& obj.fullName != "" 
		&& obj.address != "" 
		&& obj.age != 0 
		&& obj.mobileNumber != 0 
	){
		$.ajax({
			url: 'http://localhost:3000/TO',
			type: 'POST',
			data : obj,
			success: function(result) {
				if(result == "Error"){
					alert("Error");
				}
				else{
					alert("Saved Successfull");
					location.reload();
				}
			} 
		});
	}
	else {
		if(obj.NIC == "" ){
			document.getElementById("nicTW").innerHTML = "Please Enter NIC";
		}
		if(obj.fullName == "" ){
			document.getElementById("nameTW").innerHTML = "Please Enter Full Name";
		}
		if(obj.address == "" ){
			document.getElementById("personalAddressTW").innerHTML = "Please Enter Address";
		}
		if(obj.age == "" ){
			document.getElementById("ageTW").innerHTML = "Please Enter Age";
		}
		if(obj.mobileNumber == "" ){
			document.getElementById("mobileTW").innerHTML = "Please Enter Mobile Number";
		}
	}
}
		

function createCandidates(){
	var obj = new Object();
	
	obj.partyName = document.getElementById("pName").value;
	obj.CandidateName = document.getElementById("cName").value;
	obj.colorCode = document.getElementById("color").value;
	obj.img = document.getElementById("link").value;
	obj.votesCount = 0;
	if(obj.partyName != "" 
		&& obj.CandidateName != "" 
		&& obj.colorCode != "" 
		&& obj.img != ""
	){
		$.ajax({
			url: 'http://localhost:3000/candidate',
			type: 'POST',
			data : obj,
			success: function(result) {
				if(result == "Error"){
					alert("Error");
				}
				else{
					alert("Saved Successfull");
					location.reload();
				}
			} 
		});
	}
	else{
		if(obj.partyName == "" ){
			document.getElementById("pNameW").innerHTML = "Please Enter Party Name";
		}
		if(obj.CandidateName == "" ){
			document.getElementById("cNameW").innerHTML = "Please Enter Candidate Name";
		}
		if(obj.colorCode == "" ){
			document.getElementById("colorW").innerHTML = "Please Enter Color Code";
		}
		if(obj.img == "" ){
			document.getElementById("linkW").innerHTML = "Please Enter Image";
		}
	}
}	

function createConstituency(){
	var obj = new Object();
		
	obj.ID = document.getElementById("ID").value;
	obj.conName = document.getElementById("cName").value;
	obj.address = document.getElementById("cAddress").value;
	obj.TechnicalOfficerID = document.getElementById("techOffDropDown").value;
	obj.province = document.getElementById("Province").value;
	obj.distric = document.getElementById("Distric").value;
	obj.currentLoggedInUser = "0";
	
	if(obj.ID != "" && obj.conName != "" && obj.address != "" && obj.TechnicalOfficerID != 0 && obj.province != 0 && obj.distric != 0){
		$.ajax({
			url: 'http://localhost:3000/constituency',
			type: 'POST',
			data : obj,
			success: function(result) {
				if(result == "Error"){
					alert("Error");
				}
				else{
					alert("Saved Successfull");
					location.reload();
				}
			} 
		});
	}
	else{
		if(obj.conName == "" ){
			document.getElementById("cNameW").innerHTML = "Please Enter Constituency Name";
		}
		if(obj.address == "" ){
			document.getElementById("cAddressW").innerHTML = "Please Enter Address";
		}
		if(obj.TechnicalOfficerID == 0 ){
			document.getElementById("techOffDropDownW").innerHTML = "Please Select Tchnicla Officer";
		}
		if(obj.province == 0 ){
			document.getElementById("ProvinceW").innerHTML = "Please Select Province";
		}
		if(obj.distric == 0 ){
			document.getElementById("DistricW").innerHTML = "Please Select Distric";
		}
	}
}		
			
		
$.ajax({
	url: 'http://localhost:3000/voters' ,
	type: 'GET',
	success: function(result) {
		if(result.length != 0){
			for (let i = 0; i < result.length; i++) {
				var array = result[i].NIC + "~" + result[i].fullName + "~" + result[i].address +  "~" + result[i].age + "~" + result[i].constituency + "~" + result[i].OTP 
							+ "~" + result[i].voteStatus 
							+ "~" + result[i].District
							+ "~" + result[i].DOB
							+ "~" + result[i].gender
							+ "~" + result[i].email
							+ "~" + result[i].TP
							+ "~" + result[i].GD
							+ "~" + result[i].Province;
				document.getElementById("tblBody").innerHTML +=
					"<tr>" +
					"  <td>"+ result[i].NIC +"</td>" +
					"  <td>"+ result[i].fullName +"</td>" +
					"  <td>"+ result[i].address +"</td>" +
					"  <td>"+ result[i].age +"</td>" +
					"  <td>"+ result[i].constituency +"</td>" +
					"  <td>" +
					'<input type="button" class="btn btn-warning mx-2" onClick="captureUpdateIDVoters(\'' + result[i].NIC + '\')" value="Update" data-bs-toggle="modal" data-bs-target="#updateModel"/>'+
					'<input type="button" class="btn btn-danger mx-2" onClick="captureDeleteIDVoters(\'' + result[i].NIC + '\')" value="Delete" data-bs-toggle="modal" data-bs-target="#deleteModel"/>'+
					"  </td>" +
					"</tr>";
			}
		}
	}
});

$.ajax({
	url: 'http://localhost:3000/TO' ,
	type: 'GET',
	success: function(result) {
		if(result.length != 0){
			for (let i = 0; i < result.length; i++) {
				var array = result[i].fullName + "~" + result[i].address +  "~" + result[i].age + "~" + result[i].mobileNumber + "~" + result[i].NIC + "~" + result[i].cID;
				document.getElementById("tblBodyTechnician").innerHTML +=
					"<tr>" +
					"  <td>"+ (i + 1) +"</td>" +
					"  <td>"+ result[i].fullName +"</td>" +
					"  <td>"+ result[i].address +"</td>" +
					"  <td>"+ result[i].age +"</td>" +
					"  <td>"+ result[i].mobileNumber +"</td>" +
					"  <td>"+ result[i].NIC +"</td>" +
					"  <td>" +
					'<input type="button" class="btn btn-warning mx-2" onClick="captureUpdateIDTO(\'' + array + '\')" value="Update" data-bs-toggle="modal" data-bs-target="#updateModelT"/>'+
					'<input type="button" class="btn btn-danger mx-2" onClick="captureDeleteIDTO(\'' + array + '\')" value="Delete" />'+
					"  </td>" +
					"</tr>";
			}
		}
	}
});

$.ajax({
	url: 'http://localhost:3000/TO' ,
	type: 'GET',
	success: function(result) {
		if(result.length != 0){
			for (let i = 0; i < result.length; i++) {
				if(result[i].cID == "0"){
					document.getElementById("techOffDropDown").innerHTML +=
						"<option value="+ result[i].NIC +">"+ result[i].NIC + "-" + result[i].fullName + "</option>";
				}
			}
		}
	}
});

$.ajax({
	url: 'http://localhost:3000/constituency' ,
	type: 'GET',
	success: function(result) {
		if(result.length != 0){
			for (let i = 0; i < result.length; i++) {
				var conSName = result[i].conName.split(" ");
				if(conSName.length > 0){
					var valueS = "";
					for(let i = 0 ; i < conSName.length; i++){
						if(valueS == ""){
							valueS = conSName[i];
						}
						else {
							valueS = valueS + "-" + conSName[i];
						}
						
					}
				}
				document.getElementById("con").innerHTML +=
					"<option value="+ valueS +">"+ result[i].conName  + "</option>";
					document.getElementById("conU").innerHTML +=
					"<option value="+ valueS +">"+ result[i].conName  + "</option>";
			}
		}
	}
});


$.ajax({
	url: 'http://localhost:3000/candidate' ,
	type: 'GET',
	success: function(result) {
		if(result.length != 0){
			var name = "";
			for (let i = 0; i < result.length; i++) {
				name = result[i].partyName;
				if(result[i].partyName.split("'").length > 1){
					name = result[i].partyName.split("'")[0] + "_" + result[i].partyName.split("'")[1];
				}
				var array = name + "~" + result[i].CandidateName +  "~" + result[i].colorCode + "~" + result[i].img + "~" + result[i].votesCount;
				document.getElementById("sectionCol").innerHTML +=
					'<div class=\"col-4 my-2\" onClick="captureUpdateCandidate(\'' + array + '\')" data-bs-toggle="modal" data-bs-target="#candidateUpdate">' +
					"	<div class=\"border p-2\">" +
					"		<div class=\"row\">" +
					"			<div class=\"col-3\">" +
					'				<img src=\'' + result[i].img + '\'  style=\"height : 80px; width : 100%;\">' +
					"			</div>" +
					"			<div class=\"col-9\">" +
					"				<h6>"+ result[i].partyName +"</h6>" +
					"				<p>" + result[i].CandidateName + "<i class=\"fa fa-certificate mx-4\" style=\"font-size:24px; color : " + result[i].colorCode + "\"></i></p>" +
					"			</div>" +
					"		</div>" +
					"	</div>" +
					"</div>";
			}
		}
	}
});

//all island result
function allVotes(){
	var sVotes = 0;
	var totalVotedVotes = 0;
	var totalCacelledVotes = 0;
	var totalVotes = 0;
	
	$.ajax({
		url: 'http://localhost:3000/candidate' ,
		type: 'GET',
		success: function(result) {
			if(result.length != 0){
				document.getElementById("resultTbl").innerHTML = null;
				for (let i = 0; i < result.length; i++) {
					$.ajax({
						url: 'http://localhost:3000/console' ,
						type: 'GET',
						success: function(result2) {
							if(result2.length != 0){
								for (let j = 0; j < result2.length; j++) {
									if(result2[j].split("-")[3] == result[i].partyName && result2[j].split("-")[1] == "Voted"){
										sVotes = sVotes + 1;
									}
								}
								console.log(sVotes);
								document.getElementById("resultTbl").innerHTML +=
									"<tr>" +
									'  <td><img src=\'' + result[i].img + '\' style="max-width : 50px; max-height : 50px"/></td>' +
									"  <td><div>"+ result[i].partyName +"</div><div class=\"text-secondary\"><small>"+ result[i].CandidateName +"</small></div></td>" +
									"  <td>"+ sVotes +"</td>" +
									"</tr>";
								sVotes = 0;
							}
						}
					});
				}
			}
		}
	});
	
	$.ajax({
		url: 'http://localhost:3000/voters' ,
		type: 'GET',
		success: function(result) {
			totalVotes = result.length;
			$.ajax({
				url: 'http://localhost:3000/console' ,
				type: 'GET',
				success: function(result2) {
					for (let j = 0; j < result2.length; j++) {
						if(result2[j].split("-")[1] == "Voted"){
							totalVotedVotes++;
						}
						if(result2[j].split("-")[1] == "Cancelled"){
							totalCacelledVotes++;
						}
					}
					document.getElementById("v1").innerHTML = totalVotes;
					document.getElementById("v2").innerHTML = totalVotedVotes + "(" + (totalVotedVotes / (totalVotes * 1.0) * 100) + "%)";
					document.getElementById("v3").innerHTML = totalCacelledVotes + "(" + (totalCacelledVotes / (totalVotes * 1.0) * 100) + "%)";
					document.getElementById("v4").innerHTML = totalVotes - (totalVotedVotes + totalCacelledVotes) + "(" + ((totalVotes - (totalVotedVotes + totalCacelledVotes)) / (totalVotes * 1.0) * 100) + "%)";
				}
			});
		}
	});

}
allVotes();

function showProvinceResult() {
	var sVotes = 0;
	document.getElementById("msgP").innerHTML = "Results of " + document.getElementById("provincesDashboard").value;
	$.ajax({
		url: 'http://localhost:3000/candidate' ,
		type: 'GET',
		success: function(result) {
			if(result.length != 0){
				document.getElementById("resultTb2").innerHTML = null;
				for (let i = 0; i < result.length; i++) {
					$.ajax({
						url: 'http://localhost:3000/console' ,
						type: 'GET',
						success: function(result2) {
							if(result2.length != 0){
								for (let j = 0; j < result2.length; j++) {
									if(result2[j].split("-")[3] == result[i].partyName && result2[j].split("-")[1] == "Voted" && result2[j].split("-")[6] == document.getElementById("provincesDashboard").value){
										sVotes = sVotes + 1;
									}
								}
								console.log(sVotes);
								document.getElementById("resultTb2").innerHTML +=
									"<tr>" +
									'  <td><img src=\'' + result[i].img + '\' style="max-width : 50px; max-height : 50px"/></td>' +
									"  <td><div>"+ result[i].partyName +"</div><div class=\"text-secondary\"><small>"+ result[i].CandidateName +"</small></div></td>" +
									"  <td>"+ sVotes +"</td>" +
									"</tr>";
								sVotes = 0;
							}
						}
					});
				}
			}
		}
	});
}

function showDistrictResult() {
	var sVotes = 0;
	document.getElementById("msgD").innerHTML = "Results of " + document.getElementById("districtDashboard").value + " District";
	$.ajax({
		url: 'http://localhost:3000/candidate' ,
		type: 'GET',
		success: function(result) {
			if(result.length != 0){
				document.getElementById("resultTb3").innerHTML = null;
				for (let i = 0; i < result.length; i++) {
					$.ajax({
						url: 'http://localhost:3000/console' ,
						type: 'GET',
						success: function(result2) {
							if(result2.length != 0){
								for (let j = 0; j < result2.length; j++) {
									if(result2[j].split("-")[3] == result[i].partyName && result2[j].split("-")[1] == "Voted" && result2[j].split("-")[5] == document.getElementById("districtDashboard").value){
										sVotes = sVotes + 1;
									}
								}
								console.log(sVotes);
								document.getElementById("resultTb3").innerHTML +=
									"<tr>" +
									'  <td><img src=\'' + result[i].img + '\' style="max-width : 50px; max-height : 50px"/></td>' +
									"  <td><div>"+ result[i].partyName +"</div><div class=\"text-secondary\"><small>"+ result[i].CandidateName +"</small></div></td>" +
									"  <td>"+ sVotes +"</td>" +
									"</tr>";
								sVotes = 0;
							}
						}
					});
				}
			}
		}
	});
}

var constituencyCount = 0;
$.ajax({
	url: 'http://localhost:3000/constituency' ,
	type: 'GET',
	success: function(result) {
		constituencyCount = result.length + 1;
		document.getElementById("ID").value = constituencyCount;
		if(result.length != 0){
			for (let i = 0; i < result.length; i++) {
				var conName = result[i].conName;
				if(result[i].conName.split("'").length > 1){
					name = result[i].conName.split("'")[0] + "+" + result[i].conName.split("'")[1];
				}
				var array1U =  result[i].ID + "~" + conName +  "~" + result[i].address + "~" + result[i].TechnicalOfficerID + "~" + result[i].province + "~" + result[i].distric + "~" + result[i].currentLoggedInUser;
				var array2D =  result[i].ID + "-" + result[i].TechnicalOfficerID ;
				document.getElementById("conTabl").innerHTML +=
					"<tr>" +
					"  <td>"+ result[i].ID +"</td>" +
					"  <td>"+ result[i].conName +"</td>" +
					"  <td>"+ result[i].address +"</td>" +
					"  <td>"+ result[i].TechnicalOfficerID +"</td>" +
					"  <td>"+ result[i].province +"</td>" +
					"  <td>"+ result[i].distric +"</td>" +
					"  <td>" +
					'<input type="button" class="btn btn-warning mx-2" onClick="captureUpdateConcID(\'' + result[i].ID + '\')" value="Update" data-bs-toggle="modal" data-bs-target="#updateModelT"/>'+
					'<input type="button" class="btn btn-danger mx-2" onClick="captureDeleteConcID(\'' + array2D + '\')" value="Delete" data-bs-toggle="modal" data-bs-target="#deleteModelC"/>'+
					"  </td>" +
					"</tr>";
			}
		}
	}
});


var deleteVoterNIC = 0;
var updateVoterNIC = 0;
function captureDeleteIDVoters(id){
	deleteVoterNIC = id;
	document.getElementById("deleteTopLable").innerHTML = "Delete Voter -" + deleteVoterNIC;
}
function captureUpdateIDVoters(id){	
	$.ajax({
		url: 'http://localhost:3000/voters' ,
		type: 'GET',
		success: function(result) {
			if(result.length != 0){
				for (let i = 0; i < result.length; i++) {
					if(result[i].NIC == id){
						document.getElementById("nicU").value = result[i].NIC;
						document.getElementById("nameU").value = result[i].fullName;
						document.getElementById("addressU").value = result[i].address;
						document.getElementById("ageU").value = result[i].age;
						var conSName = result[i].constituency.split(" ");
						var valueS = "";
						if(conSName.length > 0){
							for(let i = 0 ; i < conSName.length; i++){
								if(valueS == ""){
									valueS = conSName[i];
								}
								else {
									valueS = valueS + "-" + conSName[i];
								}
								
							}
						}
						
						document.getElementById("conU").value = valueS;
						document.getElementById("otpU").value = result[i].OTP;
						document.getElementById("statusU").value = result[i].voteStatus;
						
						document.getElementById("DistricVU").value = result[i].District;
						document.getElementById("DOBU").value = result[i].DOB;
						document.getElementById("genderU").value = result[i].gender;
						document.getElementById("emailU").value = result[i].email;
						document.getElementById("TPU").value = result[i].TP;
						document.getElementById("GDU").value = result[i].GD;
						document.getElementById("ProvinceVU").value = result[i].Province;
					}					
				}
			}
		}
	});

	
	

}

function deleteVoterCofirmed() {
	$.ajax({
		url: 'http://localhost:3000/voters/' + deleteVoterNIC,
		type: 'post',
		success: function(result) {
			if(result == "success"){
				alert("delete successfull");
				location.reload();
			}
		}
	});
}


function updateVoter(){
	var obj = new Object();
	
	obj.NIC = document.getElementById("nicU").value;
	obj.fullName = document.getElementById("nameU").value;
	obj.address = document.getElementById("addressU").value;
	obj.age = document.getElementById("ageU").value;
	
	var conSName = document.getElementById("conU").value.split("-");
	var valueS = "";
	if(conSName.length > 0){
		for(let i = 0 ; i < conSName.length; i++){
			if(valueS == ""){
				valueS = conSName[i];
			}
			else {
				valueS = valueS + " " + conSName[i];
			}
			
		}
	}
	
	obj.constituency = valueS;
	obj.OTP = document.getElementById("otpU").value;
	obj.voteStatus = document.getElementById("statusU").value;
	
	obj.District = document.getElementById("DistricVU").value;
	obj.Province = document.getElementById("ProvinceVU").value;
	obj.DOB = document.getElementById("DOBU").value;
	obj.gender = document.getElementById("genderU").value;
	obj.email = document.getElementById("emailU").value;
	obj.TP = document.getElementById("TPU").value;
	obj.GD = document.getElementById("GDU").value;
	
	if(obj.NIC != "" 
		&& obj.fullName != "" 
		&& obj.address != "" 
		&& obj.age != "" 
		&& obj.District != 0 
		&& obj.Province != 0 
		&& obj.DOB != "" 
		&& obj.gender != 0
		&& obj.email != "" 
		&& obj.TP != "" 
		&& obj.GD != "" 
		&& document.getElementById("conU").value != 0 
	){
		$.ajax({
			url: 'http://localhost:3000/voters',
			type: 'POST',
			data : obj,
			success: function(result) {
				if(result == "Error"){
					alert("Error");
				}
				else{
					alert("Saved Successfull");
					location.reload();
				}
			} 
		});
	}
	else{
		if(obj.NIC == "" ){
			document.getElementById("nicUW").innerHTML = "Please Enter NIC";
		}
		if(obj.fullName == "" ){
			document.getElementById("nameUW").innerHTML = "Please Enter Full Name";
		}
		if(obj.address == "" ){
			document.getElementById("addressUW").innerHTML = "Please Enter Address";
		}
		if(obj.age == "" ){
			document.getElementById("ageUW").innerHTML = "Please Enter Age";
		}
		if(obj.District == 0 ){
			document.getElementById("DistricVUW").innerHTML = "Please Select District";
		}
		if(obj.Province == 0 ){
			document.getElementById("ProvinceVUW").innerHTML = "Please Select Province";
		}
		if(obj.DOB == "" ){
			document.getElementById("DOBUW").innerHTML = "Please Enter Date of Birth";
		}
		if(obj.gender == 0 ){
			document.getElementById("genderUW").innerHTML = "Please Select Gender";
		}
		if(obj.email == "" ){
			document.getElementById("emailUW").innerHTML = "Please Enter Email";
		}
		if(obj.TP == "" ){
			document.getElementById("TPUW").innerHTML = "Please Enter Teliphone Number";
		}
		if(obj.GD == "" ){
			document.getElementById("GDUW").innerHTML = "Please Enter Grama Niladari Devision";
		}
		if(document.getElementById("conU").value == 0 ){
			document.getElementById("conUW").innerHTML = "Please Select Constituency";
		}
		
	}
}


var deleteTONIC = 0;
var updateTONIC = 0;
function captureDeleteIDTO(id){
	deleteTONIC = id.split("~")[4];
	if(id.split("~")[5] == 0){
		$("#deleteModelT").modal("show");
	}
	else{
		$("#cantDeleteWarning").modal("show");
	}	
	document.getElementById("deleteTopLableT").innerHTML = "Delete Technical Officer -" + deleteTONIC;
}

function deleteTOCofirmed() {
	$.ajax({
		url: 'http://localhost:3000/TO/' + deleteTONIC,
		type: 'post',
		success: function(result) {
			if(result == "success"){
				alert("delete successfull");
				location.reload();
			}
		}
	});
}

function captureUpdateIDTO(id){
	var array = id.split("~");
	document.getElementById("nameTU").value = array[0];
	document.getElementById("personalAddressTU").value = array[1];
	document.getElementById("ageTU").value = array[2];
	document.getElementById("mobileTU").value = array[3];
	document.getElementById("nicTU").value = array[4];
	document.getElementById("cIDU").value = array[5];
}

function updateTechnicalOfficer(){
	var obj = new Object();
	
	obj.NIC = document.getElementById("nicTU").value;
	obj.fullName = document.getElementById("nameTU").value;
	obj.address = document.getElementById("personalAddressTU").value;
	obj.age = document.getElementById("ageTU").value;
	obj.mobileNumber = document.getElementById("mobileTU").value;
	obj.cID = document.getElementById("cIDU").value;
	if(obj.NIC != "" && obj.fullName != "" && obj.address != "" && obj.age != "" && obj.mobileNumber != ""){	
		$.ajax({
			url: 'http://localhost:3000/TO',
			type: 'POST',
			data : obj,
			success: function(result) {
				if(result == "Error"){
					alert("Error");
				}
				else{
					alert("Saved Successfull");
					location.reload();
				}
			} 
		});
	}
	else {
		if(obj.NIC == "" ){
			document.getElementById("nicTUW").innerHTML = "Please Enter NIC";
		}
		if(obj.fullName == "" ){
			document.getElementById("nameTUW").innerHTML = "Please Enter Full Name";
		}
		if(obj.address == "" ){
			document.getElementById("personalAddressTUW").innerHTML = "Please Enter Address";
		}
		if(obj.age == "" ){
			document.getElementById("ageTUW").innerHTML = "Please Enter Age";
		}
		if(obj.mobileNumber == "" ){
			document.getElementById("mobileTUW").innerHTML = "Please Enter Mobile Number";
		}
	}
}

function deleteCandidates() {
	$.ajax({
		url: 'http://localhost:3000/candidate/' + document.getElementById("pNameU").value,
		type: 'post',
		success: function(result) {
			if(result == "success"){
				alert("delete successfull");
				location.reload();
			}
		}
	});
}

function captureUpdateCandidate(id){
	var array = id.split("~");
	if(array[0].split("_").length > 1){
		array[0] = array[0].split("_")[0] + "'" +array[0].split("_")[1];
	}
	document.getElementById("pNameU").value = array[0];
	document.getElementById("cNameU").value = array[1];
	document.getElementById("colorU").value = array[2];
	document.getElementById("linkU").value = array[3];
	document.getElementById("votesCountU").value = array[4];
	
}

function showDialogCandidate(){
	$("#deleteModelCandidate").modal("show");
	$("#candidateUpdate").modal("hide");
}
function showDialogCandidateNoOption(){
	$("#deleteModelCandidate").modal("hide");
	$("#candidateUpdate").modal("show");
}

function updateCandidate(){
	var obj = new Object();
	
	obj.partyName = document.getElementById("pNameU").value;
	obj.CandidateName = document.getElementById("cNameU").value;
	obj.colorCode = document.getElementById("colorU").value;
	obj.img = document.getElementById("linkU").value;
	obj.votesCount = document.getElementById("votesCountU").value;
	if(obj.partyName != "" & obj.CandidateName != "" & obj.colorCode != "" & obj.img != ""){
		$.ajax({
			url: 'http://localhost:3000/candidate',
			type: 'POST',
			data : obj,
			success: function(result) {
				if(result == "Error"){
					alert("Error");
				}
				else{
					alert("Saved Successfull");
					location.reload();
				}
			} 
		});
	}
	else{
		if(obj.partyName == "" ){
			document.getElementById("pNameUW").innerHTML = "Please Enter Party Name";
		}
		if(obj.CandidateName == "" ){
			document.getElementById("cNameUW").innerHTML = "Please Enter Candidate Name";
		}
		if(obj.colorCode == "" ){
			document.getElementById("colorUW").innerHTML = "Please Enter Color Code";
		}
		if(obj.img == "" ){
			document.getElementById("linkUW").innerHTML = "Please Enter Image";
		}
	}
}



var deleteConcID = 0;
var updateConcID = 0;
function captureDeleteConcID(id){
	deleteConcID = id;
}

function deleteConcIDConfirmed() {
	var obj = new Object();
	
	obj.ID = deleteConcID.split("-")[0];
	obj.TechnicalOfficerID = deleteConcID.split("-")[1];
	$.ajax({
		url: 'http://localhost:3000/deleteConstituency' ,
		type: 'post',
		data : obj,
		success: function(result) {
			if(result == "Error"){
				alert("Error");
			}
			else{
				alert("Saved Successfull");
				location.reload();
			}
		} 
	});
}

function captureUpdateConcID(id){
	$.ajax({
		url: 'http://localhost:3000/constituency' ,
		type: 'GET',
		success: function(result) {
			if(result.length != 0){
				for (let i = 0; i < result.length; i++) {
					if(result[i].ID == id){
						document.getElementById("IDU").value = result[i].ID;
						document.getElementById("cNameU").value = result[i].conName;
						document.getElementById("cAddressU").value = result[i].address;
						document.getElementById("tOfficerU").value = result[i].TechnicalOfficerID;
						document.getElementById("ProvinceU").value = result[i].province;
						document.getElementById("DistricU").value = result[i].distric;
						document.getElementById("currentLoggedInUserU").value = result[i].currentLoggedInUser;
					}
				}
			}
		}
	});
	
	$("#updateConc").modal("show");
}


function updateConstituency(){
	var obj = new Object();
		
	obj.ID = document.getElementById("IDU").value;
	obj.conName = document.getElementById("cNameU").value;
	obj.address = document.getElementById("cAddressU").value;
	obj.TechnicalOfficerID = document.getElementById("tOfficerU").value;
	obj.province = document.getElementById("ProvinceU").value;
	obj.distric = document.getElementById("DistricU").value;
	obj.currentLoggedInUser = document.getElementById("currentLoggedInUserU").value;
	
	if(obj.ID != "" && obj.conName != "" && obj.address != "" && obj.TechnicalOfficerID != 0 && obj.province != 0 && obj.distric != 0){
		$.ajax({
			url: 'http://localhost:3000/constituency',
			type: 'POST',
			data : obj,
			success: function(result) {
				if(result == "Error"){
					alert("Error");
				}
				else{
					alert("Saved Successfull");
					location.reload();
				}
			} 
		});
	}
	else{
		if(obj.conName == "" ){
			document.getElementById("cNameUW").innerHTML = "Please Enter Constituency Name";
		}
		if(obj.address == "" ){
			document.getElementById("cAddressUW").innerHTML = "Please Enter Address";
		}
		if(obj.TechnicalOfficerID == 0 ){
			document.getElementById("techOffDropDownUW").innerHTML = "Please Select Tchnicla Officer";
		}
		if(obj.province == 0 ){
			document.getElementById("ProvinceUW").innerHTML = "Please Select Province";
		}
		if(obj.distric == 0 ){
			document.getElementById("DistricUW").innerHTML = "Please Select Distric";
		}
	}
}		


	
function allIslandView(){
	document.getElementById("allIsland").style.display = "block";
	document.getElementById("provincial").style.display = "none";
	document.getElementById("distric").style.display = "none";
	document.getElementById("topic1").className = "nav-link active cursorClass";
	document.getElementById("topic2").className = "nav-link cursorClass";
	document.getElementById("topic3").className = "nav-link cursorClass";
}
function provicialView(){
	document.getElementById("allIsland").style.display = "none";
	document.getElementById("provincial").style.display = "block";
	document.getElementById("distric").style.display = "none";
	document.getElementById("resultTb2").innerHTML = "";
	document.getElementById("msgP").innerHTML = "";
	document.getElementById("topic1").className = "nav-link  cursorClass";
	document.getElementById("topic2").className = "nav-link active cursorClass";
	document.getElementById("topic3").className = "nav-link cursorClass";
}
function districView(){
	document.getElementById("allIsland").style.display = "none";
	document.getElementById("provincial").style.display = "none";
	document.getElementById("distric").style.display = "block";
	document.getElementById("resultTb3").innerHTML = "";
	document.getElementById("msgD").innerHTML = "";
	document.getElementById("topic1").className = "nav-link  cursorClass";
	document.getElementById("topic2").className = "nav-link cursorClass";
	document.getElementById("topic3").className = "nav-link active cursorClass";
}

function logout() {
	window.location.href = "./index.html";
	localStorage.setItem("election", "logout");
}

if(localStorage.getItem("election") != "login"){
	window.location.href = "./index.html";
}

