var advMath = advMath || (function() {
	const pi = Math.PI;
	return {
		// numbers higher than...
			// 1e7 will start to take a bit longer
			// 1e8 will take too long to compute for run-time calculations
			// 1e9 will start slowing down your program significantly
			// 1e10 will not be usable and may make your program unable to load
	   	matches: function(number) {
			number = Math.trunc(+number);
			if (number !== number) return NaN;
			if (number < 2) return 0;
			var result = 0;
			for (number = Math.trunc(+number); number > 0; number--) {
				result += number - 1;
			};
			return result;
		},
		toRadians: function(number) {
			number = +number;
			if (number !== number) return NaN;
			number = number * pi / 180;
			return number;
		},
		toDegrees: function(number) {
			number = +number;
			if (number !== number) return NaN;
			number = number * 180 / pi;
			return number;
		},
		tetration: function(height, base) {
			height = Math.trunc(+height);
			base = +base;
			if (height !== height || base !== base || height < 0) return NaN;
			if (height === 0 || base === 1) return 1;
			if (base === 0) return 0;
			var result = base;
			for (let x = 1; x < height; x++) {
				result = base ** result;
			};
			return result;
		},
	};
})();
