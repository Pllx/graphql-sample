casper.test.begin('GraphQL Tests', 1, function suite(test) {
    casper.start("http://localhost:3000", function() {
        test.assertTitle("GraphQL-Sequelize", "title is the one expected");
    });

    casper.run(function() {
        test.done();
    });
});