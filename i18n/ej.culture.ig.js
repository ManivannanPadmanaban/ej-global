ej.addCulture( "ig", {
	name: "ig",
	englishName: "Igbo",
	nativeName: "Igbo",
	language: "ig",
	numberFormat: {
		currency: {
			pattern: ["$-n","$ n"],
			symbol: "₦"
		}
	},
	calendars: {
		standard: {
			":": ".",
			days: {
				names: ["Sọnde","Mọnde","Tuzde","Wednesde","Tọsde","Fraịde","Satọde"],
				namesAbbr: ["Sọn","Mọn","Tuz","Ojo","Tọs","Fra","Sat"],
				namesShort: ["Sọ","Mọ","Tu","We","Tọs","Fra","Sa"]
			},
			months: {
				names: ["Jenụwarị","Febụwarị","Machị","Eprelu","Mey","Juun","Julaị","Ọgọst","Septemba","Ọcktọba","Nọvemba","Disemba",""],
				namesAbbr: ["Jen","Feb","Mac","Epr","Mey","Jun","Jul","Ọgọ","Sep","Ọkt","Nọv","Dis",""]
			},
			AM: ["Ụtụtụ","ụtụtụ","ỤTỤTỤ"],
			PM: ["Ehihie","ehihie","EHIHIE"],
			patterns: {
				d: "d/M/yyyy",
				D: "dddd, MMMM dd, yyyy",
				t: "h.mm tt",
				T: "h.mm.ss tt",
				f: "dddd, MMMM dd, yyyy h.mm tt",
				F: "dddd, MMMM dd, yyyy h.mm.ss tt",
				M: "d MMMM",
				Y: "MMMM, yyyy"
			}
		}
	}
});