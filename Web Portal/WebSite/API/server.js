const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
var nodemailer = require('nodemailer');

var firebase = require('firebase');

const firebaseConfig = {
  apiKey: "AIzaSyCC9oXDyn9PtrK0BqVmQVczui8nd3cgcGE",
  authDomain: "election-41364.firebaseapp.com",
  databaseURL: "https://election-41364-default-rtdb.firebaseio.com",
  projectId: "election-41364",
  storageBucket: "election-41364.appspot.com",
  messagingSenderId: "24893477661",
  appId: "1:24893477661:web:e352ae2a91f5caea7c07f4",
  measurementId: "G-H1PT5RVBXS"
};
  
 firebase.initializeApp(firebaseConfig);
var database = firebase.database();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});


//Get All Voters
app.get('/voters', (req, res) => {
	const data = [];
    database.ref('voters').once('value')
	.then(function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
			data.push(childSnapshot.val());
		});
		res.send(data);
	});
});
//get One Voter
app.get('/voters/:id', (req, res) => {
	var id = req.params.id;
	const data = [];
	var linkRef = "voters/" + id;
    database.ref(linkRef).once('value')
	.then(function(snapshot) {
		if(snapshot.val() != null){
			data.push(snapshot.val());
		}
		res.send(data);
	});
});
//Insert New Voter or Update Voter
app.post('/voters', (req, res) => {
	var NIC = req.body.NIC;
	var fullName = req.body.fullName;
	var address = req.body.address;
	var age = req.body.age;
	var constituency = req.body.constituency;
	var OTP = req.body.OTP;
	var voteStatus = req.body.voteStatus;		
	var District = req.body.District;
	var Province = req.body.Province;
	var DOB = req.body.DOB;
	var gender = req.body.gender;
	var email = req.body.email;
	var TP = req.body.TP;
	var GD = req.body.GD;
	
	var reference = "voters/" + NIC;
	
	var obj = new Object();
	obj.NIC = NIC;
	obj.fullName = fullName;
	obj.address = address;
	obj.age = age;
	obj.constituency = constituency;
	obj.OTP = OTP;
	obj.voteStatus = voteStatus;
	obj.District = District;
	obj.Province = Province;
	obj.gender = gender;
	obj.DOB = DOB;
	obj.email = email;
	obj.TP = TP;
	obj.GD = GD;
	
	database.ref(reference).set(obj, function(error) {
		if (error) {
		  // The write failed...
		  console.log("Failed with error: " + error);
		  res.send("Error");
		} else {
		  // The write was successful...
		  console.log("success");
		  res.send("Success");
		}
	})
});
//Delete Voter
app.post('/voters/:id', (req, res) => {
	var id = req.params.id;
	const data = [];
	var linkRef = "voters/" + id;
    database.ref(linkRef).remove(function(error) {
		if (error) {
			res.send("error");
		}
		else{
			res.send("success");
		}
	});
});



//Get All Technical Officer
app.get('/TO', (req, res) => {
	const data = [];
    database.ref('technicalOfficer').once('value')
	.then(function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
			data.push(childSnapshot.val());
		});
		res.send(data);
	});
});

//get One Technical Officer
app.get('/TO/:id', (req, res) => {
	var id = req.params.id;
	const data = [];
	var linkRef = "TO/" + id;
    database.ref(linkRef).once('value')
	.then(function(snapshot) {
		if(snapshot.val() != null){
			data.push(snapshot.val());
		}
		res.send(data);
	});
});

//Insert New Technical Officer or Update Technical Officer
app.post('/TO', (req, res) => {
	var NIC = req.body.NIC;
	var fullName = req.body.fullName;
	var address = req.body.address;
	var age = req.body.age;
	var mobileNumber = req.body.mobileNumber;
	var cID = req.body.cID;
		
	var reference = "technicalOfficer/" + NIC;
	
	var obj = new Object();
	obj.NIC = NIC;
	obj.fullName = fullName;
	obj.address = address;
	obj.age = age;
	obj.mobileNumber = mobileNumber;
	obj.cID = cID;
	
	database.ref(reference).set(obj, function(error) {
		if (error) {
		  // The write failed...
		  console.log("Failed with error: " + error);
		  res.send("Error");
		} else {
		  // The write was successful...
		  console.log("success");
		  res.send("Success");
		}
	})
});


//Delete Technical Officer
app.post('/TO/:id', (req, res) => {
	var id = req.params.id;
	const data = [];
	var linkRef = "technicalOfficer/" + id;
    database.ref(linkRef).remove(function(error) {
		if (error) {
			res.send("error");
		}
		else{
			res.send("success");
		}
	});
});




//Get All Candidate
app.get('/candidate', (req, res) => {
	const data = [];
    database.ref('candidate').once('value')
	.then(function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
			data.push(childSnapshot.val());
		});
		res.send(data);
	});
});

//Insert New Candidate or Update Candidate
app.post('/candidate', (req, res) => {
	var partyName = req.body.partyName;
	var CandidateName = req.body.CandidateName;
	var colorCode = req.body.colorCode;
	var img = req.body.img;
	var votesCount = req.body.votesCount;
	var reference = "";
	/*if(partyName.split("'").length > 0){
		partyName = partyName.split("'")[0] + "_" +partyName.split("'")[1];
	}*/
	var reference = "candidate/" + partyName;
	
	var obj = new Object();
	obj.partyName = partyName;
	obj.CandidateName = CandidateName;
	obj.colorCode = colorCode;
	obj.img = img;
	obj.votesCount = votesCount;
	
	database.ref(reference).set(obj, function(error) {
		if (error) {
		  // The write failed...
		  console.log("Failed with error: " + error);
		  res.send("Error");
		} else {
		  // The write was successful...
		  console.log("success");
		  res.send("Success");
		}
	})
});

//Delete Candidate
app.post('/candidate/:id', (req, res) => {
	var id = req.params.id;
	/*if(id.split("'").length > 0){
		id = id.split("'")[0] + "_" +id.split("'")[1];
	}*/
	const data = [];
	var linkRef = "candidate/" + id;
    database.ref(linkRef).remove(function(error) {
		if (error) {
			res.send("error");
		}
		else{
			res.send("success");
		}
	});
});




//Get All Constituency
app.get('/constituency', (req, res) => {
	const data = [];
    database.ref('constituency').once('value')
	.then(function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
			data.push(childSnapshot.val());
		});
		res.send(data);
	});
});


//get One constituency
app.get('/constituency/:id', (req, res) => {
	var id = req.params.id;
	const data = [];
	var linkRef = "constituency/" + id;
    database.ref(linkRef).once('value')
	.then(function(snapshot) {
		if(snapshot.val() != null){
			data.push(snapshot.val());
		}
		res.send(data);
	});
});

//Insert New Constituency or Update Constituency
app.post('/constituency', (req, res) => {
	var ID = req.body.ID;
	var conName = req.body.conName;
	var address = req.body.address;
	var TechnicalOfficerID = req.body.TechnicalOfficerID;
	var province = req.body.province;
	var distric = req.body.distric;
	
	var reference = "";
	/*if(conName.split("'").length > 0){
		conName = conName.split("'")[0] + "_" +conName.split("'")[1]
	}*/
	var reference = "constituency/" + ID;
	
	var obj = new Object();
	obj.ID = req.body.ID;
	obj.conName = conName;
	obj.address = address;
	obj.TechnicalOfficerID = TechnicalOfficerID;
	obj.province = province;
	obj.distric = distric;
	
	console.log(obj.ID + "/" + obj.conName + "/" + obj.address + "/" + obj.TechnicalOfficerID + "/" + obj.province + "/" + obj.distric);
	
	database.ref(reference).set(obj, function(error) {
		if (error) {
		  // The write failed...
		  console.log("Failed with error: " + error);
		  res.send("Error");
		} else {
			var reference2 = "technicalOfficer/" + TechnicalOfficerID + "/cID";
			database.ref(reference2).set(ID, function(error) {
				if (error) {
				  // The write failed...
				  console.log("Failed with error: " + error);
				  res.send("Error");
				} else {
				  // The write was successful...
				  console.log("success");
				  res.send("Success");
				}
			});
		}
	});
});

//Delete Constituency
app.post('/deleteConstituency', (req, res) => {
	var ID = req.body.ID;
	var TechnicalOfficerID = req.body.TechnicalOfficerID;
	
	const data = [];
	var linkRef = "constituency/" + ID;
    database.ref(linkRef).remove(function(error) {
		if (error) {
			res.send("error");
		}
		else{
			var reference2 = "technicalOfficer/" + TechnicalOfficerID + "/cID";
			database.ref(reference2).set("0", function(error) {
				if (error) {
				  // The write failed...
				  console.log("Failed with error: " + error);
				  res.send("Error");
				} else {
				  // The write was successful...
				  console.log("success");
				  res.send("Success");
				}
			});
		}
	});
});

//Get All Votes
app.get('/console', (req, res) => {
	const data = [];
    database.ref('console').once('value')
	.then(function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
			data.push(childSnapshot.val());
		});
		res.send(data);
	});
});

app.post('/getCandidateImage/:id', (req, res) => {
	var id = req.params.id;
	database.ref("candidate/" + id + "/img").once('value')
	.then(function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
			data.push(childSnapshot.val());
		});
		res.send(data);
	});
	
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});