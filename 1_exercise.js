// Open sources tab and map to work space. Press the play button to run the code. 
// The debugger in the second function will stop the code. Try using keyboard shortcuts to step through.
// ⌘\  Pause/ Continue
// ⌘'  Step over
// ⌘;  Step into
// ⌘⇧; Step out

// Try adding a breakpoint in the first function.

function one() {
  let text = 'hello';
  return text;
}

function two() {
  let text = 'world';
  debugger
  return text;
}


function three() {
  return `${one()} ${two()}!`
}

three();
