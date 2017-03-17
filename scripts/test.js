QUnit.test('hello test', function(assert) {
    assert.ok(1 == "1", "passed");
});

QUnit.test('DataStore function', function(assert) {
    assert.ok(window, "running the DataStore function");
    var ds = new App.DataStore();
    console.log("ds is created\n");
    console.log(App.ds);
    assert.ok(ds.data, "DS object created");
    ds.add('m@bond.com', 'tea');
    ds.add('james@bond.com', 'eshpressho');
    assert.ok(ds.add, "Added ");
    assert.deepEqual(ds.getAll(), {
        'm@bond.com': 'tea',
        'james@bond.com': 'eshpressho'
    }, "getAll function");
    console.log(ds.getAll());
    ds.remove('m@bond.com');
    console.log("removed");
    assert.ok(ds.remove, 'remove function');
    assert.equal(ds.get('james@bond.com'), 'eshpressho');
    ds.get('m@bond.com');
    console.log(ds.get('james@bond.com'));
    console.log(ds.get('m@bond.com'));
});

QUnit.test('Truck', function(assert) {

    myTruck.createOrder({
        emailAddress: 'me@goldfinger.com',
        coffee: 'double mocha'
    });
    myTruck.createOrder({
        emailAddress: 'dr@no.com',
        coffee: 'decaf'
    });
    myTruck.createOrder({
        emailAddress: 'm@bond.com',
        coffee: 'earl grey'
    });

    var printOrders = myTruck.printOrders();
    assert.deepEqual(printOrders, [
        'me@goldfinger.com',
        'dr@no.com',
        'm@bond.com'
    ], 'The Print Order values are same');
    myTruck.deliverOrder('dr@no.com');
    myTruck.deliverOrder('m@bond.com');
    var printOrdersAfterDeletion = myTruck.printOrders();
    assert.deepEqual(printOrdersAfterDeletion, [
        'me@goldfinger.com'
    ], ' values are me@goldfinger.com');
});


/*------- Document-------
myTruck object when it was called in test.js was initially was showing not defined.
To use printOrders we needed to return the values in the customerIdArray
so that the test.js can catch the values and display them.

*/
