module.exports = {
    //Put your plugin name here
    name: "",

    //Put your plugin description here
    description: "",

    //Put developers of this plugin here
    author: ["koki1019"],

    //Your code goes in this function
    plugin: function (DBT) {
        //Toast
        DBT.toast({
            message: "Hello World!",
            // optional: style keyword
        });

        //Windows Notification
        DBT.notification({
            title: "Hello Notification",
            body: "Hey there",
        });

        //Error Toast
        DBT.error("ERROR: Test Error");

        //The options are Electrons notification options
    },

    //This gets called each frame
    eachFrame: function (DBT) {},
};
