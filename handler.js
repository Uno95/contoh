var moment = require('moment'),
	handler, 
	home, nilai,
	mhs;

var mhs = {
		nama : "doni the batmoon",
		NIM : "141110051",
		waktu : "Pagi",
		kelas : "A",
		nilai : {
			"Pemrograman Web Lanjutan" : 100,
			"Kewarganegaraan" : 50,
			"Bahasa Inggris" : 25
		},
		absensi : ["13/3", "25/4", "18/5", "19/5"]
	};

home = function(req, res){
	res.render('home.html', {mhs: mhs});
};

nilai = function(req, res){
	var today = moment().format("DD-MM-YYYY");
	res.render('nilai.html', {
		mhs:mhs,
		date: today
	});
}

handler = {
	home: home,
	nilai: nilai
};

module.exports = handler;