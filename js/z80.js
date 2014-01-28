define ([], function () {
	var z80 = {
		_clock : {
			m : 0, z : 0
		},
		regs : {
			a : 0, b : 0, c : 0, d : 0, e : 0, h : 0, l : 0, f : 0,
			pc : 0, sp : 0,
			m : 0, t : 0
		},
	};

	z80.add = function () {
		this.regs.a += this.regs.e;
		this.regs.f = 0;

	};

	return z80;
});