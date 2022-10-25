// any functions that use loops will get very slow at a high number of iterations.
var advMath = advMath || (function() {
	const pi = Math.PI;
	return {
		// advMath.trunc() is a smarter version of Math.trunc().
		// this one will never mess up on integer values.
		trunc: function(number) {
			number = +number;
			if (number !== number) return NaN;
			if (number % 1 === 0 || number % 1 === -0) return Math.round(number);
			return Math.trunc(number);
		},
		matches: function(number) {
			number = Math.trunc(+number);
			if (number !== number) return NaN;
			if (number === Infinity) return Infinity;
			if (number < 2) return 0;
			let result = 0;
			for (number = Math.trunc(+number); number > 0; number--) {
				result += number - 1;
			};
			return result;
		},
		toRadians: function(number) {
			number = +number;
			if (number !== number) return NaN;
			number = number * pi / 180;
			return +number;
		},
		toDegrees: function(number) {
			number = +number;
			if (number !== number) return NaN;
			number = number * 180 / pi;
			return +number;
		},
		// WARNING: toBinary is an experimental function, which
		// will be very innacurrate with bigger numbers, and
		// sometimes not work at all.
		toBinary: function(number, negativeRepresentation = "-") {
			number = +number;
			if (number !== number) return "NaN";
			let negative = false;
			if (number === 0) return "0";
			if (number === -0) return "" + negativeRepresentation + "0";
			if (number < 0) {
				negative = true;
				number = -number;
			};
			if (number === Infinity) {
				if (negative) return "" + negativeRepresentation + "Infinity";
				return "Infinity";
			};
			if ((number).toString(2).length >= 32) {
				let result = number / (10 ** Math.trunc(Math.log10(number)));
				result = ((Math.round(result * 1e32)) / 1e32).toString(2);
				result += "e" + ((number).toString(2).length).toString(2);
				if (negative) return "" + negativeRepresentation + result;
				return "" + result;
			};
			if (negative) return "" + negativeRepresentation + (number).toString(2);
			return "" + (number).toString(2);
		},
		tetration: function(height, base) {
			height = Math.trunc(+height);
			base = +base;
			if (height !== height || base !== base || height < -1) return NaN;
			if (height === Infinity || base === Infinity) return Infinity;
			if (base === -Infinity) return -Infinity;
			if (height == 0 || base == 1) return 1;
			if (height == -1 || base == 0) return 0;
			let result = base;
			for (let x = 1; x < height; x++) {
				result = base ** result;
			};
			return +result;
		},
		randomInt: function(min, max, roundPlaceValue = 0) {
			min = Math.ceil(+min);
			max = Math.floor(+max);
			roundV = 10 ** Math.trunc(+roundPlaceValue);
			if (min !== min || max !== max || roundV !== roundV) return NaN;
			if (min > max) [min, max] = [max, min];
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
