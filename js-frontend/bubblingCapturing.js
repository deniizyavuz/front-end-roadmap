// // Bubbling
// // The bubbling principle is simple.

// // When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

// // Let’s say we have 3 nested elements FORM > DIV > P with a handler on each of them:

// // <style>
// //   body * {
// //     margin: 10px;
// //     border: 1px solid blue;
// //   }
// // </style>

// // <form onclick="alert('form')">FORM
// //   <div onclick="alert('div')">DIV
// //     <p onclick="alert('p')">P</p>
// //   </div>
// // </form>

// // A click on the inner <p> first runs onclick:

// // On that <p>.
// // Then on the outer <div>.
// // Then on the outer <form>.
// // And so on upwards till the document object.

// **************************

// event.target
// A handler on a parent element can always get the details about where it actually happened.

// The most deeply nested element that caused the event is called a target element, accessible as event.target.

// Note the differences from this (=event.currentTarget):

// event.target – is the “target” element that initiated the event, it doesn’t change through the bubbling process.
// this – is the “current” element, the one that has a currently running handler on it.
// For instance, if we have a single handler form.onclick, then it can “catch” all clicks inside the form. No matter where the click happened, it bubbles up to <form> and runs the handler.

// In form.onclick handler:

// this (=event.currentTarget) is the <form> element, because the handler runs on it.
// event.target is the actual element inside the form that was clicked.


// ***************************

// Stopping bubbling
// A bubbling event goes from the target element straight up. Normally it goes upwards till <html>, and then to document object, and some events even reach window, calling all handlers on the path.

// But any handler may decide that the event has been fully processed and stop the bubbling.

// The method for it is event.stopPropagation().

// For instance, here body.onclick doesn’t work if you click on <button>:

// <body onclick="alert(`the bubbling doesn't reach here`)">
//   <button onclick="event.stopPropagation()">Click me</button>
// </body>

// event.stopImmediatePropagation()
// If an element has multiple event handlers on a single event, then even if one of them stops the bubbling, the other ones still execute.

// In other words, event.stopPropagation() stops the move upwards, but on the current element all other handlers will run.

// To stop the bubbling and prevent handlers on the current element from running, there’s a method event.stopImmediatePropagation(). After it no other handlers execute.

// Don’t stop bubbling without a need!
// Bubbling is convenient. Don’t stop it without a real need: obvious and architecturally well thought out.

// Sometimes event.stopPropagation() creates hidden pitfalls that later may become problems.

// **************************

// Before we only talked about bubbling, because the capturing phase is rarely used. Normally it is invisible to us.

// Handlers added using on<event>-property or using HTML attributes or using two-argument addEventListener(event, handler) don’t know anything about capturing, they only run on the 2nd and 3rd phases.

// To catch an event on the capturing phase, we need to set the handler capture option to true:

// elem.addEventListener(..., {capture: true})
// // or, just "true" is an alias to {capture: true}
// elem.addEventListener(..., true)
// There are two possible values of the capture option:

// If it’s false (default), then the handler is set on the bubbling phase.
// If it’s true, then the handler is set on the capturing phase.