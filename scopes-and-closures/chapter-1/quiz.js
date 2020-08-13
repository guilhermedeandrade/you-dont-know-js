function foo(a) {
  var b = a;

  return a + b;
}

var c = foo(2);

// LHS look-ups
// 1. Reference for c variable
// 2. Reference for a variable (functions's foo param)
// 3. Reference for b variable

// RHS look-ups
// 1. Reference for foo function
// 2. Reference for a variable assignment
// 3. Reference for a + ..   
// 4. Reference for .. + b 
