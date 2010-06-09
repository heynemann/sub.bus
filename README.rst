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

You can also supply a third parameter called reference. This parameter is useful for finding out if a given subscription is already registered and/or unsubscribing from a given event. In order to subscribe an event with the reference argument, you can use this syntax::

    $.sub.subscribe("event.key", function(obj) { //do something }, 'reference');

Unsubscribe
===========

In order to unsubscribe to a previously subscribed event, all you have to do is call on::

    $.sub.unsubscribe('my_event_reference');

It's important to notice, though, that you can only unsubscribe to events with a known reference (refer to subscribe for more details).

Find out if an event has been subscribed
========================================

If you registered your event with a reference (refer to subscribe for more details), you can find out if it has already been registered using hasSubscription, like this::

    $.sub.hasSubscription('my_event_reference');

Getting current subscriptions
=============================

You shouldn't have to, but if you need to get the current subscriptions, just use the following syntax::

    $.sub.getSubscriptions();

You'll receive an array of subscriptions as the result. A subscription object has two properties: key and callback. 
Key is the string that represents the event that triggers this subscription. Callback is the function that will 
be called when this event is triggered.

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
