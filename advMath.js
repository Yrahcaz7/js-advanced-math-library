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
			if (number === Infinity) return Infinity;
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
		},/*
		isPrime: function(number) {
			number = Math.trunc(+number);
			if (number < 3 || !number || number === Infinity) return false;
			for (let num = 2; num < number; number++) {
				if (number % num === 0) {
					console.log(num + "|" + (number % num));
					return false;
				};
			};
			return true;
		},*///WHYYYY IS IT NOT WORKINGGGGGGGGGGG ARGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG
		tetration: function(height, base) {
			height = Math.trunc(+height);
			base = +base;
			if (height !== height || base !== base || height < -1) return NaN;
			if (height === Infinity || base === Infinity) return Infinity;
			if (base === -Infinity) return -Infinity;
			if (height == 0 || base == 1) return 1;
			if (height == -1 || base == 0) return 0;
			var result = base;
			for (let x = 1; x < height; x++) {
				result = base ** result;
			};
			return result;
		},
		randomInt: function(min, max, roundPlaceValue = 0) {
			min = Math.ceil(+min);
			max = Math.floor(+max);
			roundV = 10 ** Math.trunc(+roundPlaceValue);
			if (min !== min || max !== max || roundV !== roundV || min > max) return NaN;
			if (min === -Infinity && max === Infinity) {
				if (Math.random() >= 0.5) return Infinity;
				return -Infinity;
			};
			if (min === -Infinity) return -Infinity;
			if (max === Infinity) return Infinity;
			if (min == max) return min;
			if (roundV < 1) return Math.floor(Math.random() * (max - min + 1)) + min;
			return Math.floor(((Math.random() * (max - min + 1)) + min) / roundV) * roundV;
		},
	};
})();
