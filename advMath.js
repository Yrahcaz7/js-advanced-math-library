var advMath = advMath || (function() {
	//Accessible only here
	var innerVars = [];

	//Cannot be called from outside this function
	var innerFunction = function() {
	};

	//Return only what must be publicly accessible
	return {
		// numbers higher than...
			// 1e7 will start to take a bit longer
			// 1e8 will take too long to compute for run-time calculations
			// 1e9 will start slowing down your program significantly
			// 1e10 will not be usable and may make your program unable to load
	   	matches: function(number) {
			if (!number || number < 2) return 0;
			var result = 0;
			for (number = Math.trunc(number); number > 0; number--) {
				result += number - 1;
			};
			return result;
	   	},
	};
})();
