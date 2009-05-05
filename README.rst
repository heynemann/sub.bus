Introduction
------------

Sub.buS is a VERY lightweight publish/subscribe event bus for JQuery-powered applications.

One of the goals for Sub.buS is to be as simple as possible. The actual code for the bus is only 18 lines (not minified), so you can easily understand what's going on.

Sub.buS is tested using QUnit, so if you want to know more about the quality of the project, go check the /tests folder of the codebase. If you feel that we are missing any tests, just help us improve that and send some tests our way. We'll be glad to improve on our test suite.

Using Sub.buS
-------------

Using Sub.buS is as easy as it gets. Just add the *sub.bus.js* file to your page and use the methods below to subscribe, publish and/or reset the bus.

Subscribe
=========

Subscribing is what allows you to handle events that go through the bus. You can subscribe to events using this syntax::

    $.sub.subscribe("event.key", function(obj) { //do something });

The first parameter is the event key, meaning that when someone publishes an event with the same key, this subscription will be triggered.

The second parameter is the callback function. This is the function that will get executed when the given event is published. The argument 'obj' to this function is the JSON object that gets passed as part of publishing. This parameter would contain relevant information on the event.

Publish
=======

Publishing is the process that triggers all subscriptions to the given message. You can publish an event using this syntax::

    $.sub.publish("event.key", obj);

The first parameter is the event key, meaning that all subscriptions to this key should be triggered.

The second parameter is the argument that needs to be passed to the event subscriptions. This usually is some relevant information on the event that was triggered.

Reset
=====

Resetting the bus has proven very useful in the tests (since all tests are in the same page). Since it's already implemented we'll document it here. Resetting the bus means it "forgets" all subscriptions. You can reset the bus using this syntax::

    $.sub.reset();

Feature Request, Suggestions, Feedback
--------------------------------------

If you want to contribute with the project, even if it's just to ask for something not implemented yet, just contact me through GitHub or create an issue here in the project's repository.
