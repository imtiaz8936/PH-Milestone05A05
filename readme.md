### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

---
### Answer:
1. The difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll** are the getElementById is used for only to select an unique id element it which can not be duplicate, the getElementsByClassName is used for to select a cluster of common class elements, the querySelector is used for to select css id or class it returns only the first element and the querySelectorAll is used for to select a common bunch of css id or class.

2. To **create and insert a new element into the DOM** we can follow the below codes:
      let p = document.createElement("p");

      p.innerText = "New paragraph added!";

      document.body.appendChild(p);

3. Event bubbling means that when an event happens on an element, it first runs the event handler on that element, then it "bubbles up" the DOM tree to its parent, then to the parent’s parent, and so on — until it reaches the <html> (document root).

4. Event Delegation means instead of attaching event listeners to many individual child elements, you attach one listener to a parent element and let event bubbling handle the rest. it is useful because it is an optimized approach of loop traversing which means no need to loop through every child and attached handlers thus it helps to load the UI faster.

5. The difference between **preventDefault() and stopPropagation()** methods are the preventDefault() prevents the default browser behavior for an event. It does not stop the event from bubbling up the DOM. The stopPropagation() stops the event from bubbling up or trickling down in capturing phase. It does not affect the default browser behavior.

