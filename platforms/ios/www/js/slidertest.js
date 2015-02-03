// Initialize a Slidr.
// Display breadcrumbs, overflow transitions, use cube transition.
var s = slidr.create('slidr-api-demo', {
  breadcrumbs: true,
  overflow: true
});

// Add horizontal slides with default linear transition.
// The extra "one" allows the slidr to circle back and loop infinitely.
s.add('h', ['one', 'two', 'three', 'one']);

// Now start.
s.start();
